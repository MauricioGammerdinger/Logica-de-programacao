var num1 = Number(prompt('Escolha um numero'))
var num2 = Number(prompt('Escolha outro numero'))
var naomuda;

if (num1 > num2){
        naomuda = num2;
        num2 = num1;
        num1 = naomuda;
}
while (num1 <= num2) {
    if (num1 % 2 === 0) {
        console.log (num1);
    }
    num1++;
}
