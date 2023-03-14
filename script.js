"use strict"


/*
1. Напишіть функцію, яка приймає 2 числа і повертає -1, якщо
перше менше, ніж друге; 1 - якщо перше більше, ніж друге;
0 - якщо числа рівні.
*/

// function task1() {
//     let num1 = +prompt("Введіть перше число");
//     let num2 = +prompt("Введіть друге число");
//     if (num1 < num2) {
//         console.log(-1);
//     } else if (num1 > num2) {
//         console.log(1);
//     } else {console.log(0);}
// }

// task1();



/*
2. Напишіть функцію, яка вираховує факторіал переданого
їй числа
*/

// let num = 1; 

// function factorial() {
//   let result = 1;
//   for(let i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(num)); 



/*
3. Напишіть функцію, яка приймає три окремі цифри і 
перетворює їх на одне число. Наприклад: цифри 1, 4, 9 
перетворяться на число 149.
*/

// let num1 = 2;
// let num2 = 3;
// let num3 = 4;

// function task3() {
//     let result = num1.toString() + num2.toString() + num3.toString();
//     console.log(Number(result));
// }


// task3();



/*
4. Напишіть функцію, яка приймає довжину та ширину прямокутника і 
обчислює його площу. Якщо у функцію передали
1 параметр, вона вираховує площу квадрата.
*/

// let length = 2;
// let width = 4;

// function task4() {
//     let result = 0;
//     result = length * width;
//     return result;
// }

// console.log(task4());



/*
5. Напишіть функцію, яка перевіряє, чи є передане їй число
досконалим. Досконале число – це число, що дорівнює сумі
всіх своїх власних дільників.
*/

// function Task5(number) {
//   let sum = 0;
//   for(let i = 1; i < number; i++) {
//     if(number % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === number;
// }

// console.log(Task5(6)); // виведе true
// console.log(Task5(28)); // виведе true
// console.log(Task5(12)); // виведе false



/*
6. Напишіть функцію, яка приймає мінімальне і максимальне
значення для діапазону і виводить ті числа з діапазону, які
є досконалими. Використовуйте написану раніше функцію,
щоб перевірити число на досконалість.
*/

// let min = 2;
// let max = 10;
// let sum = 0;

// function Task6() {
//     for(let i = min;i < max; i++) {
//         console.log(`Число з діапазона: "${i}"`); 
        
        
//         for(let j = 0; j < max; j++ ) {
//             if(i % j === 0) {
//                 sum += i;
//                 console.log(`Good`, sum === i);
//             }
//         }



//     }
// //   return sum === number;
// }

// Task6(); 

// function isPerfect(num) {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === num;
// }

// function perfectRange(min, max) {
//   let found = false;
//   for (let i = min; i <= max; i++) {
//     if (isPerfect(i)) {
//       console.log(i);
//       found = true;
//     }
//   }
//   if (!found) {
//     console.log("No perfect numbers found in range.");
//   }
// }

// perfectRange(1, 100); // виведе 6 та 28
// perfectRange(1, 1000); // виведе 6, 28 та 496



/*
7. Напишіть функцію, яка приймає час (години, хвилини,
секунди) і виводить його на екран у форматі 
«година:хвилини:секунди». Якщо при виклику функції хвилини
та/або секунди не були передані, виводити їх як 00.
*/



function Task7(){
    let currDate = new Date();
    let hours = currDate.getHours();
    let minutes = currDate.getMinutes();
    let seconds = currDate.getSeconds();
    if (minutes <= 9) {
    minutes = "0" + minutes;
    }
    if (seconds <= 9) {
    seconds = "0" + seconds;
    }
    if (hours === undefined) {
    hours = "00 - годин";
    } 
    if (minutes === undefined) {
        minutes = "00 - хвилин";
    } 
    if (seconds === undefined) {
        seconds = "00 - секунд";
    }
    document.task7.timer.value = hours + ":" + minutes + ":" + seconds;
    setTimeout("Task7()", 1000);
}
Task7();



/*
8. Напишіть функцію, яка приймає години, хвилини та секунди 
і повертає цей час у секунди.
*/



let result = 0;

function Task8(){
    let currDate = new Date();
    let hours = currDate.getHours();
    let minutes = currDate.getMinutes();
    let seconds = currDate.getSeconds();

    result = (hours * 3600) + (minutes * 60) + (seconds);
    console.log(result);

    if (minutes <= 9) {
    minutes = "0" + minutes;
    }
    if (seconds <= 9) {
    seconds = "0" + seconds;
    }
    document.task8.timer.value = hours + ":" + minutes + ":" + seconds;
}
Task8();

const submitTaskSecond = document.querySelector(".btn_task8");
const inputSecond = document.querySelector(".inputSecond");

submitTaskSecond.onclick = function () {
    Task8();

    if (submitTaskSecond) {

        document.taskSecond.second.value = result + " секунд";
    } 
}



/*
9. Напищіть функцію, яка приймає кількість секунд, переводить 
їх у години, хвилини та секунди і повертає у вигляді 
рядка «година:хвилини:секунди».
*/
console.clear();

const submit9 = document.querySelector(".btn_task9");
const OnInput9 = document.querySelector(".input_task9");
const OutInput9 = document.querySelector(".input9");

submit9.onclick = function () {

    if (submit9) {
        const secundsUser = OnInput9.value;
        
        let secundsTask9 = secundsUser;

        const hoursTask9 = Math.floor(secundsTask9 / 3600);
        console.log(hoursTask9);
        const minutesTask9 = Math.floor((secundsTask9 % 3600) / 60);
        console.log(minutesTask9);
        const secsTask9 = secundsTask9 % 60;
        console.log(secsTask9);
        const resultTask9 = `${hoursTask9.toString().padStart(2, '0')}:${minutesTask9.toString().padStart(2, '0')}:${secsTask9.toString().padStart(2, '0')}`;

        console.log(resultTask9);

        document.taskNine.secondNine.value = resultTask9;
    }

}















