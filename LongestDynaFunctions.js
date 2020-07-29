const longestdynasty = (dynastyResign = []) => {
  //call convert year 
  if(dynastyResign.length < 1)
    return "No Data";

  const filteredDynas = dynastyResign.filter(dyna => {
    const dynastyName = Object.keys(dyna)[0];
    const arabicNumber = convertYear(dyna[dynastyName], longestRoman);
    return arabicNumber !== "Invalid";
  })

  const dynas = filteredDynas.map((dynasty, key) => {
    const dynastyName = Object.keys(dynasty)[0];
    const arabicNumber = convertYear(dynasty[dynastyName], longestRoman);
    let duration = 0;

    if(key !== 0){
      const prevDynaName = Object.keys(filteredDynas[key-1])[0];
      duration = arabicNumber - convertYear(filteredDynas[key-1][prevDynaName], longestRoman)
    }

    return {
      dynastyName,
      arabicNumber,
      duration,
    };
  })

  const longest = dynas.reduce((accu, value) => {
    return accu.duration > value.duration ? accu : value
  });
  return longest.dynastyName;
    
}

const convertYear = (roman, longestRoman) => {
  const regx = new RegExp('^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');

  if(!regx.test(roman))
    return "Invalid";

  let romanNumber = roman.toUpperCase();
  const romanNumList = ["CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
  const corresp = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
  let index =  0, num = 0;
  for(let rn in romanNumList){
    index = romanNumber.indexOf(romanNumList[rn]);
    while(index != -1){
      num += parseInt(corresp[rn]);
      romanNumber = romanNumber.replace(romanNumList[rn],"-");
      index = romanNumber.indexOf(romanNumList[rn]);
    }
  }

  if(num > longestRoman || num < 1000)
    return "Invalid";

  return num;
}
const longestRoman = convertYear("MCMLXXIX");

module.exports = { longestdynasty }