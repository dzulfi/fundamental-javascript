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