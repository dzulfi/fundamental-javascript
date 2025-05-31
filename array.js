let buah = ["Apel", "Pisang", "Jeruk"];
let angka = [1,2,3,4,5]

/**
 * foreach()
 */
// tanpa arrow function
buah.forEach(function(item, index) {
    console.log(index, item);
})
angka.forEach(function(nama) {
    console.log(nama)
})
// dengan arrow function
buah.forEach((item, index) => console.log(item, index))

angka.forEach((nama) => console.log(nama))

/**
 * map()
 */
let angkaBaru = angka.map(function(x) {
  return x * 2;
});

console.log(angkaBaru);

/**
 * filter()
 */
let angkaGanjil = angka.filter(function(x) {
    return x % 2 !== 0;
})

console.log(angkaGanjil)

let name = [];

name.push("ahmad");
name.push("sinta", "bagus")

// ubah data index
name[0] = 'bagas'

console.info(name)
console.table(name)

console.info(name[0])
console.info(name.length)

name.push(1,2,3,4,5)
console.table(name)