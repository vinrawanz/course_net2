//1 Algo Indomie 
// 1. Beli indomie
// 2. Bersihkan bungkus indomie
// 3. Buka bungkusnya
// 4. Panaskan air sampai mendidih
// 5. Buka bumbu lalu taruh ke mangkuk
// 6. masukan mie di air mendidih sekitar 3-5 menit
// 7. Tiriskan air
// 8. Campurkan mie dengan bumbu dan aduk secara rata
// 9. Mie siap untuk di santap

const { Console } = require('console')

//2 Algo Sirloin Steak
// 1. Beli daging Sirloin 
// 2. Keringkan daging sirloin 
// 3. Berikan garam dan lada hitam ke daging secukupnya
// 4. Berikan wajan sedikit minyak dan panaskan wajan 
// 5. Masukan daging ke wajan saat wajan sudah mulai panaskan
// 6. Biar kan daging dan mulai di putar jika warna sudah berubah 
// 7. Tusukan termometer kedalam daging apabila panas di dalam menyentuh 55-60 Derajat angkat daging 
// 8. Diamkan daging/resting
// 9. Sajikan daging 
// 10. Daging siap disantap 

//3 Luas Persegi Panjang 
// 1. Buat variable Panjang
// 2. Buat Variable Lebar 
// 3. Buat Variable Hitung = Panjang * Lebar 
// 4. Print Hitung 

//PseudoCode
// 1. STORE Panjang WITH ANY NUMBER
// 2. STORE Lebar WITH ANY NUMBBER 
// 3. STORE Penjumlahan WITH Panjang TIMES Lebar
// 4. DISPLAY Penjumlahan


//4 Volume Bola 
// 1. Buat penampung Ruas
// 2. Buat pemampung Penjumlahan = 4/3 * 3,14 * Ruas^3
// 3. Print Ruas 

//PseudoCode
// 1. STORE Ruas WITH ANY NUMBER
// 2. STORE Penjumlahan WITH 4/3 TIMES 3,14 TIMES Ruas^3
// 3. DISPLAY Penjumlahan

//5 GitHub
// 1. Save File 
// 2. Tuliskan "git add ." di terminal
// 3. Tuliskan "git commit -m "Message apa pun"
// 4. Tuliskan "git push origin main"


// TASK 2

//1 keliling persegi panjang
// 1. Buat Variable Panjang
// 2. Buat Variable Lebar 
// 2. Buat Variable Penjumlahan = 2*(Panjang * Lebar)
// 3. Print Penjumlahan

//PseudoCode
// 1. STORE Lebar WITH ANY NUMBER 
// 2. STORE Panjang WITH ANY NUMBER
// 2. STORE Penjumlahan WITH 2 TIMES (PANJANG TIMES LEBAR)
// 3. DISPLAY Penjumlahan

//CODE
var Lebar = 5
var panjang = 10
var Penjumlahan = 2*(panjang*Lebar)

console.log(Penjumlahan)

//2 Luas Permukaan balok 
// 1. Buat variable panjang 
// 2. Buat variable lebar
// 3. Buat variable tinggi 
// 4. Buat Variable hitung = 2(panjang*lebar + panjang*tinggi + tinggi+lebar)
// 5. Print hitung 

//Pseudocode
// 1. STORE panjang WITH ANY NUMBER
// 2. STORE lebar WITH ANY NUMBER 
// 3. STORE tinggi WITH ANY NUMBER 
// 4. STORE hitung WITH 2 TIMES (panjang TIMES lebar PLUS panjang TIMES tinggi PLUS lebar TIMES tinggi)
// 5. DISPLAY hitung 

//CODE
var pjg = 5
var lbr = 10
var tinggi = 5
var hitung = 2*((pjg*tinggi)+(pjg*lbr)+(lbr*tinggi))
console.log(hitung)

//3 
var rl = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question('who are you ? ', name => {
    rl.question('what is your age ? ', age => {
        console.log("My name is " + name + ", and I'm " + age + " years old")
        rl.close();
    });  
});
console.log(" ")

//4
var random = Math.floor(Math.random()*11)

console.log(random)

//5
var nama = "hehe"
var rand = Math.floor(Math.random()*50)
var bool = true
console.log(nama + rand + bool)
