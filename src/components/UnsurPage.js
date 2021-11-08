import { useContext } from "react";
import { useParams,Link } from "react-router-dom"
import DataContext from "../DataContext";

const UnsurPage = () => {
    const {id} = useParams();
    const {kimia} = useContext(DataContext);
    const unsur = kimia.unsurs.find(data => data.id.toString() === id.toString());

    const backgroundChanger = () => {
        if(unsur.wujud === `padat`) {return {backgroundColor : `rgb(252, 156, 170)`}
        } else if (unsur.wujud === `gas`) { return {backgroundColor : `rgb(137, 201, 223)`}
        } else if (unsur.wujud === `cair`) { return {backgroundColor : `rgb(236, 236, 1)`}
        } else {return {backgroundColor : `rgb(97, 209, 97)`}}
    }


    return (
        <div className="unsur-page">
            <Link to="/"><span className="material-icons-outlined arrow-back">arrow_back</span></Link>


            <section 
             className="UnsurHeader" 
             style={backgroundChanger()}>

                <h2>{unsur.nama}</h2>
                <h1>{unsur.singkatan}</h1>
                <div>
                    <h2>{unsur.golongan}</h2>
                    <h2>{unsur.wujud}</h2>
                </div>
    
            </section>


            <section className="UnsurBody">
                <div><p>Nomor Atom</p> <p>{unsur.nomorAtom}</p></div>
                <div><p>Massa Atom</p> <p>{unsur.massaAtom}</p></div>
                <div><p>Tingkat Oksidasi (Konfigurasi Elektron)</p> <p>{unsur.tingkatOksidasi}</p></div>
                <div><p>Titik didih C</p> <p>{unsur.titikDidih}&deg; C</p></div>
                <div><p>Titik leleh</p> <p>{unsur.titikLeleh}&deg; C</p></div>
                <div><p>Massa jenis</p> <p>{unsur.massaJenis} (g/m) (3)</p></div>
                <div><p>Struktur Elektron</p> <p>{unsur.strukturElektron}</p></div>
            </section>
        </div>
    )
}

export default UnsurPage
