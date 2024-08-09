// Variable
// 1. var = Old School
// banyak menimbulkan bug, karena sering banyak dimanipulasi

var x = 0;
x = 15;

console.log(x);

// Variable MOdern
// 1. let

let z = 10;
z = 5;

//tidak boleh angka pada awal penamaan variable
// let 0
// Pengecualian yang ini ( _ dan $ )
let _a = 10;
let $a = 10;
let Z = 20;

console.log(z);

// 2. const
const y = 0;
const COLOR_RED = "red";
// y = 5;
console.log(y);

// Type Data
// primitive
let text = "lorem ipsum"; // String, yang membedakan adalah ada tanda quote nya, atau backtik
let number = 0; // Number
let kosong = null; // data kosong, varibael tersebut tidak ada isinya
let undef; // undefined > deklarasi saja,
let undef2 = undefined; // undefined
let isMorning = true; // boolean
let isEvening = false;

// non primitive
// 1. object (deskriptif)
const zenix = {
	brand: "Toyota",
	mesin: "Hybrid",
	warna: "Black",
	spec: {
		mesin: "2.0l",
		rangka: "TNGA",
	},
};
console.log(zenix);
console.log(zenix.mesin);
zenix.mesin = "diesel";
console.log(zenix);

// 2. array (list)
const mobilToyota = ["Gr yaris", "Reborn", "Supra"];
console.log(mobilToyota[2]);
mobilToyota[1] = "Innova Reborn";
console.log(mobilToyota[1]);

// data yang lengkap = penggabungan array dan object
const mobil = [
	{
		nama: "GR Yaris",
		mesin: "Hybrid",
		warna: "Black",
	},
	{
		nama: "Innova Zenix",
		mesin: "Hybrid",
		warna: "Black",
	},
];

// Operator =-*&%/!
// 1. Aritmatika
const tambah = 1 + 1; // angka 1 = operand, + = operator, 2operand disebut binary, 1operand disebut unary
const kali = 2 * 2;
const hasilBagi = 2 % 2;
const pangkat = 2 ** 2;
const pembagian = 4 / 2;
console.log(tambah);
console.log(kali);
console.log(hasilBagi);
console.log(pangkat);
console.log(pembagian);

// 2. String concatenation // menggabunglan 2 type data
const a = "a";
const b = "b";
const newText = a + b;
console.log(newText);
console.log("1" + 1);
console.log("1" - 1);
console.log("1" + [a, b, newText]);

// 3. Assignment
let seribu = 1000;
seribu = seribu + 500;
seribu += 500;
console.log(seribu);

// 4. logical >, <, <=, >=, ==, ===, !==, !=
const x1 = 1;
const x2 = 2;
const result = x2 > x1;
console.log(result);

// sama dengan / equality
console.log(1 === 1);
console.log("1" == 1);
console.log("1" === 1);

// tidak sama dengan / not equal
console.log(1 !== 1);
console.log("2" != 2);
