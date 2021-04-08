const BabyNameFunc = (props) => {
    const babyNamesData = props.names;

    babyNamesData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (b.name < a.name) {
          return 1;
        } else {
          return 0;
        }
      });


    return (
    
        <div>
        {babyNamesData.map((obj, index) => {
            if(obj.sex === "m") {
            return <p onClick = {props.handleFavourites} className= "babyBoys" key = {index}>{obj.name}</p>    
      } else {
          return <p onClick = {props.handleFavourites} className= "babyGirls" key = {index}>{obj.name}</p>
      }
      
      })}
        </div>
    )
}

export default BabyNameFunc;