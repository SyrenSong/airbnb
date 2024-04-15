function filterByCity(targetCity, listingCityArray) {
  let indexs = [];
  for(let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      indexs.push(i);
    }
  }
  return indexs;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // Note: Comment out the following line when you start working on this function!
  let indexs = [];
  for(let i = 0; i < listingPriceArray.length; i++) {
    if (minPrice < listingPriceArray[i] && maxPrice > listingPriceArray[i]) {
      indexs.push(i);
    }
  } 
  return indexs;
  // return [...listingPriceArray.keys()]
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // Note: Comment out the following line when you attempt the LevelUp!
  let indexs = [];
  for(let i = 0; i < listingTypeArray.length; i++) {
    for (let j = 0; j < targetTypes.length; j++) {
      if (listingTypeArray[i].toLowerCase() === targetTypes[j].toLowerCase()) {
        if (indexs.includes(i)) {
          continue;
        }
        indexs.push(i)
      }
    }
  }
  return indexs;
  // return [...listingTypeArray.keys()]
}