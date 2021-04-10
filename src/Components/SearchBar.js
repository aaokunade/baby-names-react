import { FaMale, FaFemale} from "react-icons/fa";
import { IoMaleFemale } from "react-icons/io5"

const SearchBar = (props) => {
    return (
    <div className = "searchBar">
    <input onChange ={props.handleInput} className = "input" type = "text" placeholder = "search name..."></input>
    <div className = "gender">
    <button onClick = {props.handleAll} className = "neutral"><IoMaleFemale className = "classIcon"/></button>
    <button onClick = {props.handleBoys} className = "babyBoys"><FaMale className = "classIcon"/></button>
    <button onClick = {props.handleGirls} className = "babyGirls"><FaFemale className = "classIcon"/></button>
    </div>
  </div>
    )
}


export default SearchBar;