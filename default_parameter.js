/**
 * catatan:
 * Default Parameters adalah nilai default yang akan diberikan ke parameter function kalau tidak ada nilai yang dikirim saat function dipanggil. Jadi, function tetap berjalan normal walaupun argumennya kurang.
 */

// tanpa default parameter
function greet(nama){
    if (nama === undefined) {
        nama = "guest";
    }

    console.log(`hallo, ${nama}`);
}

greet();
greet("budi")

// dengan default parameter
function user(nama = "guest"){
    console.log(`hallo, ${nama}`)
}

user();
user('andi')

// pemisah
console.log('')

/**
 * Cara Kerja Default Parameters
• Jika nilai diberikan saat pemanggilan function, nilai itu yang dipakai.
• Jika tidak ada nilai, maka default value yang dipakai.
 */

function hitungLuas(panjang = 1, lebar = 1){
    return panjang * lebar;
}

console.log(hitungLuas());
console.log(hitungLuas(4));
console.log(hitungLuas(2,3));

// pemisah
console.log('')

/**
 * default function dengan parameter
 */
function tambahan(a, b = a){
    return a + b;
}

console.log(tambahan(5))
console.log(tambahan(5, 3)) // Kalau b tidak diisi, otomatis b akan diisi dengan a .