import { useContext } from "react";
import DataContext from "../DataContext";
import SearchBar from "./SearchBar";
import UnsursList from "./UnsursList";
import CustButton from "./CustButton";

const Home = () => {
    const {sortMethod,setSortMethod} = useContext(DataContext);

    return (
        <div>
            <SearchBar />

            
            <label
            htmlFor="sort-method"
            style={{marginRight : `10px`}}
            >Tampilkan berdasarkan
            </label>


            <select
            name="sort-method"
            id="sort-method"
            value={(() => {
                if(sortMethod === `semua`) { return sortMethod } 
                else if(sortMethod === `golongan`) {return `golongan`} 
                else { return `wujud`}
            })()}

            onChange={e => {
                if(e.target.value === `wujud`) {setSortMethod(`padat`)
                } else {setSortMethod(e.target.value)}
            }}>
                <option value="semua">Semua</option>
                <option value="golongan">Golongan</option>
                <option value="wujud">Wujud</option>
            </select>


            <section className="keterangan">
                <CustButton cls="light-pink" innerText="Padat"/> 
                <CustButton cls="light-blue" innerText="Gas"/> 
                <CustButton cls="yellow" innerText="Cair"/> 
                <CustButton cls="light-green" innerText="Unsur buatan"/> 
            </section>


            <UnsursList />
        </div>
    )
}

export default Home