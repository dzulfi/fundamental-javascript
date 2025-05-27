// arrow function dengan parameter
const sapa = (nama) => {
    console.log("nama saya " + nama)
}
sapa("agus")

// arrow function tanpa parameter
const halo = () => {
    console.log("hello word")
}
halo()

// arrow function satu parameter
const umur = lahir => {
    let tahun = 2025
    console.log(tahun - lahir)
}
umur(1994)

// arrow function dengan return otomatis
const jumlah = (a,b) => a + b;
console.log(jumlah(5,5))

// arrow function mengembalikan object
const user = (nama, umur) => ({
    nama: nama,
    umur: umur
})
console.log(user("andi", 10));
