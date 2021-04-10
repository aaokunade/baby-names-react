const SearchBar = (props) => {
    return (
    <div className = "searchBar">
    <input onChange ={props.handleInput} className = "input" type = "text" placeholder = "search name..."></input>
    <div className = "gender">
    <button onClick = {props.handleAll} className = "neutral">All</button>
    <button onClick = {props.handleBoys} className = "babyBoys">Boys</button>
    <button onClick = {props.handleGirls} className = "babyGirls">Girls</button>
    </div>
  </div>
    )
}


export default SearchBar;