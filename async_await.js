/**
 * Catatan:
 * Async Await adalah fitur dari ES8 (ECMAScript 2017) yang membuat kita bisa bekerja dengan Promise menggunakan sintaks yang lebih mudah dibaca.
    Dengan async dan await, kita tidak perlu lagi membuat banyak then() yang bersarang, alur
    kodenya jadi terasa lebih "linear", seperti menulis kode biasa.
 * Cara Menggunakan Async Await
• async digunakan untuk mendefinisikan function asynchronous.
• await digunakan untuk "menunggu" Promise selesai sebelum melanjutkan eksekusi.
 */

/**
 * contoh sederhana
 */
async function hello() {
    return "hallo dunia";
}

hello().then((hasil) => console.log(hasil));

/**
 * contoh menggunakan await
 */
function delay(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("selesai setelah delay!");
        }, ms);
    })
}

async function proses() {
    console.log("milai ...");
    let hasil = await delay(2000);
    console.log(hasil);
    console.log("selesai");
}

proses();

/**
 * error handling dengan try catch
 */
function login(user) {
    return new Promise((resolve, reject) => {
        if (user === "admin"){
            resolve("login berhasil")
        } else {
            reject("login gagal");
        }
    })
}

async function prosesLogin() {
    try {
        let hasil = await login("admin");
        console.log(hasil);
    } catch (error) {
        console.log(error);
    }
}

prosesLogin();