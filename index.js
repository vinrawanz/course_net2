
//1
var input = 5;

if(input % 2 === 1){
    console.log("Ganjil")
}else{console.log("Genap")}
console.log("")
//2
var nilai = 87;

if(nilai >= 85 || nilai <= 100){
    console.log("Student mendapatkan grade A")
}else if(nilai >= 70 || nilai <= 84){
    console.log("Student mendapatkan grade B")
}else if(nilai >= 50 || nilai <= 69){
    console.log("Student mendapatkan grade C")
}else if(nilai >= 30 || nilai <= 49){
    console.log("Student mendapatkan grade D")
}else if(nilai >= 0 || nilai <= 30){
    console.log("Student mendapatkan grade E")
}
console.log("")
//3
var umur = 16;
var uang = 100000;

if(umur <= 15){
    console.log("Tidak boleh masuk")
}else if(umur >15){
    if(uang <= 50000){
        console.log("Tidak boleh masuk")
    }else{console.log("Silahkan masuk")}
}
console.log("")
//4
var angka = 15;

for(var i = 1; i <= angka;i++){
    if((i % 3) === 0){
        console.log(i + " adalah kelipatan 3")
    }else if((i % 5) === 0){
        console.log(i + " adalah kelipatan 5")
    }else if(((i % 3) === 0) && ((i % 5) === 0)){
        console.log(i + " adalah kelipatan 3 dan 5")
    }else{console.log(i)}
}
console.log("")
//5
var segitiga = 5;
var bintang = '';

for(var i = 0;i < segitiga;i++){ 
    bintang += '*'  
    console.log(bintang)   
}