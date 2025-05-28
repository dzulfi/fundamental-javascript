/**
 * Catatan:
 * Promise adalah sebuah objek di JavaScript yang merepresentasikan sebuah proses yang belum selesai tapi akan selesai di masa depan (future). Promise bisa berada di tiga status:
• Pending: Sedang berjalan, belum selesai.
• Fulfilled: Berhasil diselesaikan.
• Rejected: Gagal diselesaikan.
 */

/**
 * cara kerja promise
 */
const janji = new Promise((resolve, reject) => {
  let sukses = true;

  if (sukses) {
    resolve("Berhasil!");
  } else {
    reject("Gagal!");
  }
});

janji
  .then((hasil) => {
    console.log(hasil); // Output: Berhasil!
  })
  .catch((error) => {
    console.log(error);
  });

//   pemisah
console.log(' ')

/**
 * contoh kasus
 */
function cekLogin(user){
    return new Promise((resolve, reject) => {
        if (user === "admin"){
            resolve("login berhasil")
        } else {
            reject("login gagal");
        }
    });
}

cekLogin("admin")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))


/**
 * Promise dengan setTimeout
 */

function delay(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("selesai");
        }, ms)
    })
}

delay(2000).then((hasil) => {
    console.log(hasil)
})