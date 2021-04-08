import { React, useState } from "react";
import Data from "../Data.json";
import BabyNameFunc from "./BabyNameFunc.js";
import SearchBar from "./SearchBar.js";
import Favourites from "./Favourites.js";



const BabyNameFiles = () => {
  const [babyNamesData, setBabyNamesData] = useState(Data);
  const [favouriteNames, setFavouriteNames] = useState([]);

  const handleSearchInput = (event) => {
    const searchInput = event.target.value.toLowerCase();
    console.log(searchInput);
    const searchedName = Data.filter((obj) => {
        if (obj["name"].toLowerCase().includes(searchInput)){
            return obj;
        }
    })
    setBabyNamesData(searchedName);
    if ( searchInput === ""){
      setBabyNamesData(Data);
    }
  };

  const handleFavourites = (event) => {
   const nameSelected = event.target.innerText;
   const favSelect = babyNamesData.filter(obj => {
     return obj["name"] === nameSelected;
    })
    setFavouriteNames([...favouriteNames, ...favSelect]);

    const namesRemain = babyNamesData.filter(obj => {
      return obj["name"] !== nameSelected;
    })
    setBabyNamesData(namesRemain);
  }

  return (
    <div className="babyNames">
      <SearchBar handleInput={handleSearchInput} />
      <Favourites favNames = {favouriteNames} />
      <BabyNameFunc names={babyNamesData} handleFavourites = {handleFavourites}/>
    </div>
  );
};

export default BabyNameFiles;
