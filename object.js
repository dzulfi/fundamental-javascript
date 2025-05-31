/**
 * object literal {}
 */
let mahasiswa = {
    nama: "budi",
    umur: 20
}
console.log(mahasiswa)

/**
 * new object()
 */
let siswa = new Object();
siswa.nama = "ahmad";
siswa.umur = 23;

console.log(siswa)

/**
 * cara akses value object
 */
// dot notation
console.log(mahasiswa.nama)
console.log(mahasiswa.umur)

// bracket notation
console.log(siswa['nama'])
console.log(siswa['umur'])

/**
 * menambah property object
 */
mahasiswa.alamat = "solo"
console.log(mahasiswa)

/**
 * mengubah property
 */
mahasiswa.umur = 22
console.log(mahasiswa)

/**
 * menghapus property
 */
delete mahasiswa.alamat;
console.log(mahasiswa)

/**
 * object dalam object
 */
let mobil = {
    merk: "toyota",
    model: "avanza",
    mesin: {
        kapasitas: "1500cc",
        bahan_bakar: "bensin"
    }
}

console.log(mobil)
console.log(mobil.mesin)
console.log("kapasitas mobil : " + mobil.mesin.kapasitas)


/**
 * looping object
 * kalau di array kita pakai forEach, di object kita bisa pakai for...in
 */
for (let key in siswa) {
    console.log(key + " : " + siswa[key])
}

/**
 * programmer zaman now
 */

const person = {}

person["nama"] = "dzulfiqar zahid amirullah"
person["umur"] = 24

console.table(person)

// akses property
console.info(`jeneng : ${person.nama}`)
console.info(`umr : ${person['umur']}`)