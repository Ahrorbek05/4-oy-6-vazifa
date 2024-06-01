// 1-masala
// let = +prompt(`1 dan 50 gacha bo'lgan ixtiyoriy son kiriting`);
// for ( let i = 1; i <= 50; i++){
//     if ( i % 2 !== 0){
//         console.log(i**2);
//     }
// }

// 2-masala
// let a = +prompt(`1 dan 10 gacha ixtiyoriy son kiriting`);
// for ( i = 1; i <= 10; i++){
//     console.log(i**3);
// }

// 3-masala
// let n = +prompt(`1 dan 20 gacha ixtiyoriy son kiriting`);
// for (let i = 1; i <= 20; i++) {
//     let factorial = 1;
//     for (let n = 1; n <= i; n++) {
//       factorial *= n;
//     }
//     console.log(`faktorial ${i} hisoblanadi ${factorial}`);
//   }

// 4-masala
// let y = +prompt(`1 dan 30 gacha ixtiyoriy son kiriting`);
// let sum = 0;
// for ( i = 1; i <= 30; i+=1){
//     sum = sum + i**2;
//     console.log(sum);
// }

// 5-masala
// for ( i = 1; i <= 20; i++){
//     let count = 0;
//     for ( let n = 1; n <= i; n++){
//         if( i % n == 0){
//             count = count + 1;
//         }
//     }
//     if (count == 2){
//         console.log(i);
//     }
// }

// 6-masala
// let son = [];
// for (let i = 1; i <= 100; i++) {
//     if (i % 7 === 0 && i % 5 !== 0) {
//         son.push(i);
//     }
// }
// console.log(son);

// 7-masala
// let sonlar = [];
// for (let i = 1; i <= 100; i++) {
//     if (i * 2 < 100) {
//         sonlar.push(i);
//     }
// }
// console.log(sonlar);


// 8-masala
// let n = +prompt("son kiriting");
// let summ = 0;
// for( let i = 1; i <= n; i++){
//    if (n % i == 0 ){
//     summ = summ + i
//     console.log(i);
// }
// }
// console.log(`yig'indi ${summ}`); 

// 9-masala
// Savol 
// Tez orada RoboContest tizimining qanday ishlayotganligini tekshirish uchun RoboticsLab direktori ishxonamizga tashrif buyuradi. 
// Biz direktorni tantanali kutib olish maqsadida direktorning moshinadan tushgan joyidan ishxonamiz eshigigacha bolgan oraliqga gilam toshashga qaror qildik. 
// Bizga malumki direktorning mashinasi toxtatiladigan joydan ishxonamiz kirish eshigigacha bolgan masofa 
// 𝑁
// N metr, bozorda 1 metr gilamning narxi 
// 𝑃
// P som. Biz gilam sotib olish uchun jami qancha mablag sarflashimizni aniqlang!.

// let N = +prompt(`N ma'lumot kiritilsin`);
// let P = +prompt(`P ma'lumot kiritilsin`);
// let sum = 0;
// for ( i = 0; i < N; i++){
//     sum += P;
// }
// console.log("Gilamning umumiy narxi: " + sum + " so'm ");

// 10-masala
// Savol

// Beshta musbat butun son berilgan, ulardan torttasini ajratib olinganda
// umumiy yigindisi bolishi mumkin bolgan minimum qiymat va maksimum qiymatni aniqlang.

// let numbers = [20, 19, 9, 24, 15]; 

// let umumiySum = 0;
// let minSum = Number.MAX_SAFE_INTEGER;
// let maxSum = Number.MIN_SAFE_INTEGER;

// for (let i = 0; i < numbers.length; i++) {
//     umumiySum += numbers[i];
// }

// for (let i = 0; i < numbers.length; i++) {
//     let torttaYigindi = umumiySum - numbers[i];
//     if (torttaYigindi < minSum) {
//         minSum = torttaYigindi;
//     }
//     if (torttaYigindi > maxSum) {
//         maxSum = torttaYigindi;
//     }
// }
// console.log("To'rtta sonning minimal yig'indisi:" + minSum);
// console.log("To'rtta sonning maksimal yig'indisi:" + maxSum);

// 11-masala
// Savol
// Ikkita butun son berilgan ularni ornini almashtiruvchi dastur tuzing.!

// let a = +prompt(`Ixtiyoriy son kiriting!`);
// let b = +prompt(`Ixtiyoriy son kiriting!`);

// for (let i = 0; i < 1; i++) {
//     let c = a;
//     a = b;
//     b = c;
// }
// console.log("Almashtirishdan keyin: a = " + a + ", b = " + b);

// 12-masala
// Savol
// Sizga to'g'ri to'rtburchakning tomonlari a va b beriladi, siz uning yuzasi va perametrini topib quyidagi shartga tekshirishingiz kerak bo'ladi.
// Agar yuzasi perimetridan katta bolsa yuzasini aks holda peremetrini chiqaring.!

// let a = +prompt(`a`);
// let b = +prompt(`b`);

// let y = 0;
// let p = 0;

// for (let i = 0; i < 1; i++) {
//     y = a * b;
//     p = 2 * (a + b);
// }
// let result;
// for (let i = 0; i < 1; i++) {
//     if (y > p) {
//         result = y - p;
//     } else {
//         result = p - y;
//     }
// }
// console.log("Natija:" + result);
