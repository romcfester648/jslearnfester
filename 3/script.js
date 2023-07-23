let buben = 'bubnoviy'; // похоже на c++
const BEZ_BUBNA = 24; //константу не можна міняти
const bubnoviy = 227.5;
console.log(buben);
buben = 'bez bubna';
console.log(buben);
const buben_krutiy = { //цю можна
    luchpik: 12,
    buben: 'buen'
}
buben_krutiy.luchpik = 22;
console.log(buben_krutiy);
if (1) {
    let letlet = 10; //буде лише в блоці if
    var varvar = 11; //буде всюди
}
console.log(varvar);