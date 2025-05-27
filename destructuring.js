/**
 * catatan:
 * Destructuring adalah fitur ES6 yang memungkinkan kita untuk mengambil nilai dari array atau object dan menyimpannya ke dalam variable dengan cara yang cepat dan praktis. Kalau biasanya kita akses properti satu-satu, dengan destructuring cukup sekali deklarasi!
 */

/**
 * destructuring array
 */
const angka = [1,2,3,4];

// tanpa destructuring 
const satu = angka[0]
const dua = angka[1]
const tiga = angka[2]

console.log(satu, dua, tiga)

//dengan destructuring
const [atu, ua, iga, empat] = angka;

console.log(atu, ua, iga, empat)

// pemisah
console.log(' ')

/**
 * destructuring object
 */
// tanpa destructuring
const user = {
    nama: "budi",
    umur: 24
}

const nama = user.nama;
const umur = user.umur;

console.log(nama, umur);

// dengan destructuring
const siswa = {
    name: "sakti",
    old: 23
}
const {name, old} = siswa;

console.log(name, old);

// pemisah
console.log(' ')


/**
 * mengganti nama variabel saat destructuring
 */
const pengguna = {
    nama: "santi",
    umur: 29
}

const {nama: namaLengkap, umur: usia} = pengguna;
console.log(namaLengkap);
console.log(usia);

// pemisah
console.log('')

/**
 * destructuring + rest pada object
 */
const data = {
    jeneng: "ayu",
    umur: 23,
    kelas: "12 IPS"
}

const {jeneng, ...infoLain} = data;

console.log(jeneng);
console.log(infoLain)