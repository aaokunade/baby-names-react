const SearchBar = (props) => {
    return (
    <div>
    <input onChange ={props.handleInput} className = "input" type = "text" placeholder = "search name..."></input>
  </div>
    )
}


export default SearchBar;