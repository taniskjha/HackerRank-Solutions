// Input = 2017  , Output = 13.09.2017

// 



// function programmer_day(n) {
//     const  leap = year 
//     const month = 9;
//     const year = n;
//     const date = 256 - (31+28+31+30+31+30+31+31);

//     console.log(date + '.' + month + '.' + year)
// }

// programmer_day(2017)



function dayOfProgrammer(year) {
    if(year % 4 == 0 && year % 100 !== 0) {
       const date = 256 - 244;
       const month = 09;
       const ear = year;
       return date + '.' + month + '.' + year
       // gregorian and julian calendar normal year calendar 
    } else if(year % 4 !== 0){
        const date2 = 256 -243;
        const month2 = 09;
        const ear2 = year;
          return date2 + '.' + month2 + '.' + year;
     // gregorian calendar leap year  conditional       
    } else if (year % 4 == 0) {
        const date3 = 256 - 244;
        const month3 = 09;
        const ear3 = year;
        return date3 + '.' + month3 + '.' + year
    }

}

programmer_day(1995)