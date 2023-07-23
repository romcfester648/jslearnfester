let buben;
console.log(typeof buben);
buben = null; //то саме що і undefined
buben = true; //boolean 1 або 0
buben = 'klsdfj' / 9 //Nan шось не робоче
buben = 239875932875928375293857n; //bigint дуже велике число
buben = '20'; //ну тут все зрозуміло
let bubenvelikiy = { //тут теж
    buben: buben,
}
buben = Number(buben); //тепер бубен число
//if else як на с++
let buben2 = buben > 1 ? console.log(buben) : console.log(bubenvelikiy.buben);