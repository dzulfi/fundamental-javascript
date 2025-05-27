/**
 * catatan:
 * Rest Parameter digunakan untuk mengumpulkan sisa argumen ke dalam sebuah array. Tandanya juga menggunakan tiga titik (…), tetapi dipakai saat mendefinisikan function atau
destructuring data.
 */

/**
 * menangkap banyak argument dalam function
 */
function jumlahkan(...angka){
    let total = 0;
    for (let nilai of angka){
        total += nilai;
    }

    return total
}

console.log(jumlahkan(1,2))
console.log(jumlahkan(1,2,3,4,5))

// pemisah
console.log(' ')

/**
 * menggabungkan parameter dengan rest parameter
 * catatan:
 * Kalau kita gabungkan parameter biasa dengan Rest, posisi Rest harus paling akhir:
 */
function cetakData(nama, ...hobi){
    console.log("nama: " + nama);
    console.log("hobi: " + hobi)
}

cetakData("budi", "mancing", "ngoding", "sepak bola")

// pemisah
console.log(' ')

/**
 * rest parameter pada destructuring
 */
// array destructuring
const angka = [1,2,3,4,5];

const [pertama, kedua, ...sisanya] = angka;

console.log(pertama);
console.log(kedua)
console.log(sisanya)

// object destructuring
const user = {
    kota: "aceh",
    nama: "siti",
    umur: 23
}

const {nama, ...infoLain} = user;

console.log(nama);
console.log(infoLain);
