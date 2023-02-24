//  Faktöriyel işlemi:

let number = prompt("Lütfen bir sayı giriniz:");

let factorial = 1;

if (number > 0 || number === Number) {
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    console.log("Faktöriyel: " + factorial);
} else {
    console.log("Hatalı işlem: Lütfen pozitif bir tamsayı giriniz!")
}


// Çarpma İşlemi:

function calculateAll() {
    let total = 1;
    for (let i = 0; i < arguments.length; i++) {
        total *= arguments[i];
    }
    alert(`Total: ${total}`);
}

calculateAll( 8, 5, 9, 6 );