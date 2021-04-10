import BabyNameFunc from "./BabyNameFunc.js";

const Favourites = (props) => {
return( 
<div  className = "favorite">
<p>Favourites: </p>
<BabyNameFunc names = {props.favNames} handleFavourites = {props.handleRemoveFavourite}/>
<hr></hr>
</div>
)
}

export default Favourites;