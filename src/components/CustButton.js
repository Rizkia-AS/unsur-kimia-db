import { useContext } from "react"
import DataContext from "../DataContext"

const CustButton = ({innerText,cls}) => {
    const {sortMethod, setSortMethod} = useContext(DataContext)

    let buttonClicked = {}
    if(sortMethod === innerText.toLowerCase()) {
        buttonClicked = {
            filter: `brightness(125%)`,
            transform: `translateY(-5px)`,
            boxShadow: `0 5px 2px rgba(0, 0, 0, 0.5)`
        }
    }

    return (
        <button
        className={cls}
        style={buttonClicked}
        onClick={() => {
            setSortMethod(innerText.toLowerCase())
        }}>
            {innerText}
        </button>
    )
}

export default CustButton