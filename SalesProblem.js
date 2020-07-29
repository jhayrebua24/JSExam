const topProduct = (profitsArray = []) => {

  if(profitsArray.length < 1)
    return "No Data";

  const highest = profitsArray.reduce((accu, value) => {
    const valueKey = Object.keys(value)[0];
    const accuKey = Object.keys(accu)[0];
    return accu[accuKey] > value[valueKey] ? accu : value
  });

  return Object.keys(highest)[0];
}

const bottomProduct = (profitsArray = []) => {
  if(profitsArray.length < 1)
    return "No Data";

  const lowest = profitsArray.reduce((accu, value) => {
    const valueKey = Object.keys(value)[0];
    const accuKey = Object.keys(accu)[0];
    return accu[accuKey] < value[valueKey] ? accu : value
  });

  return Object.keys(lowest)[0];
}

const zeroProfitProduct = (profitsArray = []) => {
  if(profitsArray.length < 1)
    return "No Data";
    
  const goal = 0;

  const closeToZero = profitsArray.reduce((accu, value) => {
    const valueKey = Object.keys(value)[0];
    const accuKey = Object.keys(accu)[0];

    const valueDistance = Math.abs(value[valueKey] - goal);
    const accuDistance = Math.abs(accu[accuKey] - goal);

    if(valueDistance === accuDistance){
      if(value[valueKey] > accu[accuKey])
        return value;
      else 
        return accu;
    }
    return (valueDistance < accuDistance ? value : accu);
  });
  return Object.keys(closeToZero)[0];
  
}

module.exports = { topProduct, bottomProduct, zeroProfitProduct };