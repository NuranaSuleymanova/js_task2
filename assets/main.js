
// ?--------Task1---------?

// const month=prompt("Ay daxil edin:");


// switch(month)
// {
//     case "Yanvar":
//     case "1":
//         console.log("Qış fəslidir");
//     break;
//     case "Fevral":
//         case "2":
//         console.log("Qış fəslidir");
//     break;
//     case "Mart" :
//         case "3":
//         console.log("Yaz fəslidir");
//     break;
//     case "Aprel":
//         case "4":
//         console.log("Yaz fəslidir");
//     break;
//     case "May":
//         case "5":
//         console.log("Yaz fəslidir");
//     break;
//     case "Iyun":
//         case "6":
//         console.log("Yay fəslidir");
//         break;
//     case "Iyul":
//         case "7":
//         console.log("Yay fəslidir");
//         break;
//     case "Avqust":
//         case "8":
//         console.log("Yay fəslidir");
//         break;
//     case "Sentiyabr":
//         case "9":
//         console.log("Payiz fəslidir");
//         break;
//     case "Oktyabr":
//         case "10":
//         console.log("Payiz fəslidir");
//         break;
//     case "Noyabr":
//         case "11":
//         console.log("Payiz fəslidir");
//         break;
//     case "Dekabr":
//         case "12":
//         console.log("Qish fəslidir");
//         break;
//     default:
//         console.log("Səhv ay girdiniz!")
// }


//?--------------- Task 2 her hansi masinin adini yazanda masin haqqinda melumatlar cixsin  -----------------


// const Car=prompt("Enter the name of car!")
// class CarInfo 
// {
//     constructor(carname,color,year)
//     {
//         this.carname=carname;
//         this.color=color;
//         this.year=year;
//     }
// }

// switch (Car)
// {
//     case "BMW":
       

//     const infoBMW= new CarInfo("BMW","black",2020);
//     console.log(infoBMW);
//     break;

//     case "Mercedes":
//         const infoMer= new CarInfo("Mercedes","gray",2022);
//         console.log(infoMer);
//         break;
//     case "Lexus":
      
//         const infoLex= new CarInfo("Lexus","white",2007);
//         console.log(infoLex);
//         break;
//     default:
//         console.log ("The car name is not entered correctly! Try again")
// }



// ?--------------Task3    bir otaq üçün ne qeder divar boyası istifadə olunur -----------------------------

//? 1 metr kvadrat divara 1 qutu reng gedir


const box=1 

class room 
{
    constructor(TopBottomWidth,LeftRightWidth,height,windownum,windowsize)
    { 
        this.TopBottomWidth=TopBottomWidth;
        this.LeftRightWidth=LeftRightWidth;
        this.height=height;
        this.windownum=windownum;
        this.windowsize=windowsize;

    }
    roomSizeCal()
{
    return ` ${2*this.TopBottomWidth* this.height + 2*this.LeftRightWidth*this.height - this.windownum*this.windowsize* this.windowsize} litr`;
}
}

const roomColor =new room(5,5, 5 ,3 ,2);

console.log(roomColor.roomSizeCal());