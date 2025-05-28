/**
 * Catatan:
 * Ternary Operator adalah operator kondisional yang berbentuk satu baris, digunakan untuk menggantikan struktur if-else sederhana. 
 * Disebut "ternary' karena melibatkan tiga bagian: kondisi, hasil jika true, dan hasil jika false.
 * 
 * Format Umum
 * kondisi ? ekpresiJikaBenar : ekpresiJikaSalah;
 */

/**
 * Contoh ternary operator
 */
let umur = 20;
let status;

// tanpa ternary operator
if (umur >= 18) {
    status = "dewasa";
} else {
    status = "anak-anak"
}

console.log(status);

// dengan ternary operator
let kondisi = umur >= 21 ? "dewasa" : "remaja";

console.log(kondisi)


// pemisah
console.log('')

/**
 * ternary operator bertingkat (nested)
 */
let skor = 85;
let grade = skor >= 90 ? "A" :
            skor >= 80 ? "B" :
            skor >= 70 ? "C" : "D";

console.log(grade);