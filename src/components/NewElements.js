import { useState,useContext } from "react"
import DataContext from "../DataContext"

const NewElements = () => {
    const {unsurs} = useContext(DataContext);

    const [nama, setNama] = useState(``)
    const [singkatan, setSingkatan] = useState(``)
    const [nomorAtom, setNomorAtom] = useState(``)
    const [massaAtom, setMassaAtom] = useState(``)
    const [tingkatOksidasi, setTingkatOksidasi] = useState(``)
    const [titikDidih, setTitikDidih] = useState(``)
    const [titikLeleh, setTitikLeleh] = useState(``)
    const [massaJenis, setMassaJenis] = useState(``)
    const [strukturElektron, setStrukturElektron] = useState(``)
    const [golongan, setGolongan] = useState(``)

    const handleSubmit = async e => {
        e.preventDefault()
    
        try { 
          console.log(unsurs.length);
          const id = unsurs[unsurs.length - 1].id + 1;
          const newPost = {id,nama,singkatan,nomorAtom,massaAtom,tingkatOksidasi,titikDidih,titikLeleh,massaJenis,strukturElektron,golongan};
    
          await fetch(`http://localhost:3500/posts`,{ method : `POST`,
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(newPost)     });
          
          setSingkatan(``);
          setNomorAtom(``);
          setNama(``);
          setMassaAtom(``);
          setTingkatOksidasi(``);
          setTitikDidih(``);
          setTitikLeleh(``);
          setMassaJenis(``);
          setStrukturElektron(``);
          setGolongan(``);

          window.location.reload();
        } catch (err) {
          console.log(err.message);
        }

    }

    return (
    <form className="new-elements" onSubmit={handleSubmit}>
        <label htmlFor="nama">Nama</label>
        <input type="text"
          id="nama"
          value={nama}
          onChange={e => setNama(e.target.value)}
        />

        <label htmlFor="singkatan">Singkatan</label>
        <input type="text"
          id="singkatan"
          value={singkatan}
          onChange={e => setSingkatan(e.target.value)}
        />

        <label htmlFor="nomor-atom">Nomor Atom</label>
        <input type="text"
        id="nomor-atom"
        value={nomorAtom}
        onChange={e => setNomorAtom(e.target.value)}
        />

        <label htmlFor="massa-atom">Massa Atom</label>
        <input type="text"
        id="massa-atom"
        value={massaAtom}
        onChange={e => setMassaAtom(e.target.value)}
        />

        <label htmlFor="tingkat-oksidasi">Tingkat Oksidasi</label>
        <input type="text"
        id="tingkat-oksidasi"
        value={tingkatOksidasi}
        onChange={e => setTingkatOksidasi(e.target.value)}
        />

        <label htmlFor="titik-didih">Titik Didih</label>
        <input type="text"
        id="titik-didih"
        value={titikDidih}
        onChange={e => setTitikDidih(e.target.value)}
        />

        <label htmlFor="titik-leleh">Titik Leleh</label>
        <input type="text"
        id="titik-leleh"
        value={titikLeleh}
        onChange={e => setTitikLeleh(e.target.value)}
        />

        <label htmlFor="massa-jenis">Massa Jenis</label>
        <input type="text"
        id="massa-jenis"
        value={massaJenis}
        onChange={e => setMassaJenis(e.target.value)}
        />

        <label htmlFor="struktur-elektron">Struktur Elektron</label>
        <input type="text"
        id="struktur-elektron"
        value={strukturElektron}
        onChange={e => setStrukturElektron(e.target.value)}
        />

        <label htmlFor="golongan">Golongan</label>
        <input type="text"
        id="golongan"
        value={golongan}
        onChange={e => setGolongan(e.target.value)}
        />

        <button type="submit">kirim</button>
    </form>
    )
}

export default NewElements