import { useContext } from "react"
import DataContext from "../DataContext"
import {Link} from 'react-router-dom'

const UnsursList = () => {
    const {kimia,filtered,sortMethod} = useContext(DataContext);
    let unsurs = null;
    
    if(sortMethod === `golongan`) {
        return (
            <>
              {kimia.golongan.map(golongan => {
                  unsurs = filtered.filter(unsur => unsur.golongan.toString() === golongan)

                  return (
                      <div key={golongan}>
                        <h2 className="element-type">{golongan}</h2>
                        <ul className="unsurs-list">
                            {unsurs.map(unsur => (
                            <Link key={unsur.id} to={`/unsur/${unsur.id}`}>
                                <li style={
                                    (() => {
                                        if(unsur.wujud === `padat`) {
                                            return {backgroundColor : `rgb(252, 156, 170)`}
                                        } else if (unsur.wujud === `gas`) {
                                            return {backgroundColor : `rgb(137, 201, 223)`}
                                        } else if (unsur.wujud === `cair`) {
                                            return {backgroundColor : `rgb(236, 236, 1)`}
                                        } else {return {backgroundColor : `rgb(97, 209, 97)`}}
                                    })()
                                }>{unsur.nama}</li>
                            </Link> 
                            ))}
                        </ul>
                      </div>    
                  )

              })}
            </>
        )
    } else {

        if(sortMethod !== `semua`) {
            unsurs = filtered.filter(unsur => unsur.wujud === sortMethod)
        } else {unsurs = filtered;}
        
        return (
            <ul className="unsurs-list">
                {unsurs.map(unsur => (
                <Link key={unsur.id} to={`/unsur/${unsur.id}`}>
                    <li style={
                        (() => {
                            if(unsur.wujud === `padat`) {
                                return {backgroundColor : `rgb(252, 156, 170)`}
                            } else if (unsur.wujud === `gas`) {
                                return {backgroundColor : `rgb(137, 201, 223)`}
                            } else if (unsur.wujud === `cair`) {
                                return {backgroundColor : `rgb(236, 236, 1)`}
                            } else {return {backgroundColor : `rgb(97, 209, 97)`}}
                        })()
                    }>{unsur.nama}</li>
                </Link> 
                ))}
            </ul>
        )

    }

    
}

export default UnsursList
