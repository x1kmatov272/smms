alert("Sizga hozir random raqam chiqadi!😉")

const randomNumber = Math.floor(Math.random() * 100) + 1; 
console.log(randomNumber);

alert(`Random raqam: ${randomNumber}`)
// if (randomNumber % 2 !== 0) {
//     alert( ${randomNumber} Hечетное число);
// } else {
//     alert( ${randomNumber} Четное число);
// }
confirm("Random raqamni 2 ga kopaytiramiz va bolamiz!")

let randomNumberiks2 = (randomNumber)*2;
let randomNumberbolish = (randomNumber)/2;
let randomNumberqoldiq = (randomNumber)%2;
alert(`Randiom orqali chiqqan son:${randomNumber}edi
biz uni 2 ga kopaytirib ${randomNumberiks2} sonini chiqardik
,va shu sonni 2 ga bolib ${randomNumberbolish} sonni chiqardik
,va shu sonni 3 ga bolgandagi qoldiq: ${randomNumberqoldiq}`)