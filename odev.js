/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

var myCarDetails =  car.displayDetails.bind(car);
myCarDetails();



/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
    const modifiedNames = (typeof name === "string") ? name.trim().split(" "):[];
    let isBiggerThan2 = true;
    modifiedNames.forEach(item => (/^.{2,}/gim.test(item) === false) ? isBiggerThan2 = false:"")

    return (typeof name === "string") &&  isBiggerThan2;
}

/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}
const parameters = ["dystopian","1932"]
summary.apply(book,parameters);
