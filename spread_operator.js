/**
 * menghubungkan dua atau lebih array
 */
const buah1 = ["apel", "jeruk"]
const buah2 = ["mangga", "pisang"]

const semuaBuah = [...buah1, ...buah2];
console.log(semuaBuah);
console.log(...buah1);

// pemisah
console.log(' ')

/**
 * menyalin array (copy array)
 */
const warnaAsli = ["merah", "biru"];
const warnaSalinan = [...warnaAsli]

warnaSalinan.push("hijau");
console.log(warnaAsli);
console.log(warnaSalinan);

// pemisah
console.log(' ')

/**
 * spread pada object
 */
const user = {
    nama: "diana",
    umur: 23
}

const updateUser = {
    ...user,
    pekerjaan: "programmer"
}

console.log(updateUser);

// pemisah
console.log(' ')

/**
 * spread pada function argument
 */
function tambah(a,b,c){
    return a + b + c;
}

const angka = [2,2,3];

console.log(tambah(...angka));