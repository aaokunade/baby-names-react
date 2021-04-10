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
    if ( searchInput === ""){
      const filteredData = Data.filter((obj)=>{
        return containsObject(obj, favouriteNames);
      })
      setBabyNamesData(filteredData);
    } else{
    const searchedName = Data.filter((obj) => {
        if (obj["name"].toLowerCase().includes(searchInput)){
            return containsObject(obj, favouriteNames);
        }
    })
      setBabyNamesData(searchedName);
  }
  };

  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return false;
        }
    }

    return true;
}

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

  const handleRemoveFavourite = (event) => {
    const nameRemoved = event.target.innerText;
    // console.log(nameRemoved);
    const removedName = [];
    const filteredRemoved = favouriteNames.filter(obj => {
      if(obj["name"] === nameRemoved){
        removedName.push(obj);
      } else {
        return favouriteNames
      }
      })
      setFavouriteNames(filteredRemoved)
      setBabyNamesData([...babyNamesData, ...removedName])
    }

    const handleAll = (event) => {
      const genderSelected = event.currentTarget.parentNode.childNodes;
      genderSelected.forEach((ls) => {
        if(ls.classList.contains("neutral")){
          ls.classList.add("active");
        } else {
          ls.classList.remove("active");
        }
      })
      const allButton = Data.filter((obj) => {
        return containsObject(obj, favouriteNames);
      })
      setBabyNamesData(allButton);
    }

    const handleBoys = (event) => {
      const genderSelected = event.currentTarget.parentNode.childNodes;
      genderSelected.forEach((ls) => {
        if(ls.classList.contains("babyBoys")){
          ls.classList.add("active");
        } else {
          ls.classList.remove("active");
        }
      })
      const allButton = Data.filter((obj) => {
        if(obj["sex"] === "m"){
        return containsObject(obj, favouriteNames);
       }
       })
      setBabyNamesData(allButton);
    }

    const handleGirls = (event) => {
      const genderSelected = event.currentTarget.parentNode.childNodes;
      genderSelected.forEach((ls) => {
        if(ls.classList.contains("babyGirls")){
          ls.classList.add("active");
        } else {
          ls.classList.remove("active");
        }
      })
      const allButton = Data.filter((obj) => {
        if(obj["sex"] === "f"){
        return containsObject(obj, favouriteNames);
        }
      })
      setBabyNamesData(allButton);
    }

  return (
    <div className="babyNames">
      <SearchBar handleInput = {handleSearchInput} handleAll = {handleAll} handleBoys = {handleBoys} handleGirls = {handleGirls}/>
      <Favourites favNames = {favouriteNames} handleRemoveFavourite = {handleRemoveFavourite}/>
      <BabyNameFunc names = {babyNamesData} handleFavourites = {handleFavourites} />
    </div>
  );
};

export default BabyNameFiles;
