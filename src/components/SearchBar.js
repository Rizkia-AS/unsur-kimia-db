import { useContext } from "react"
import DataContext from "../DataContext"

const SearchBar = () => {
    const {search,setSearch} = useContext(DataContext);

    return (
        <form action="" className="SearchBar">
            <label htmlFor="search"></label>
            <input
            type="text" 
            name="search" 
            value={search}
            placeholder="Cari Unsur"
            onChange={e => { setSearch(e.target.value); }}/>
        </form>
    )
}

export default SearchBar