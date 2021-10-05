// SOAL NO 1
// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
for (var i = 1; i<=5; i++) {
    console.log(i); // 01 - Pertama
    setTimeout(() => console.log(i), 100); // 02 - Kedua
}



// SOAL NO 2
const stopTheTime = () => {

}

const mainFunc = async () => {
    console.log("satu");
    await stopTheTime(3000);
    console.log("dua"); // "dua" akan tercetak setelah selang waktu selama 3000 ms atau 3 detik

    console.log("tiga");
    await stopTheTime(1000);
    console.log("empat"); // "dua" akan tercetak setelah selang waktu selama 1000 ms atau 1 detik
}

mainFunc();


// SOAL NO 3
const getGitHubUser = () => {
    
}
const thridQuestion = async () => {
    const mojombo = await getGitHubUser("mojombo");
    const orange = await getGitHubUser("");
    const rudiTabuti = await getGitHubUser("rudi.tabuti");

    console.log(mojombo);
    console.log(orange);
    console.log(rudiTabuti);
}

thridQuestion();


// SOAL NO 4
const getGithuUserFollowers = () => {

}

const fourthQuestion = () => {
    const mojomboFollowers = await getGithuUserFollowers("mojombo");
    const orangeFollowers = await getGithuUserFollowers("");
    const ujangFollowers = await getGithuUserFollowers("ujang");

    console.log(mojomboFollowers);
    console.log(orangeFollowers);
    console.log(ujangFollowers);
}