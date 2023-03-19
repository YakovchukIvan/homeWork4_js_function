"use strict"


/*
1. Напишіть функцію, яка приймає 2 числа і повертає -1, якщо
перше менше, ніж друге; 1 - якщо перше більше, ніж друге;
0 - якщо числа рівні.
*/

const submit1 = document.querySelector(".btn_task1");
const OnInput1_1 = document.querySelector(".input_task1-1");
const OnInput1_2 = document.querySelector(".input_task1-2");

submit1.onclick = function () {

    let resultTask1 = 0;

    if (submit1) {

        let num1 = OnInput1_1.value;
        let num2 = OnInput1_2.value;

        if (num1 < num2) {
            resultTask1 = -1;
        } else if (num1 > num2) {
            resultTask1 = 1;
        } else {resultTask1 = 0;}

        document.taskOne.taskOneInput.value = resultTask1;
    }

}



/*
2. Напишіть функцію, яка вираховує факторіал переданого
їй числа
*/


const submit2 = document.querySelector(".btn_task2");
const OnInput2 = document.querySelector(".input_task2");


submit2.onclick = function () {

    if (submit2) {

        let num = OnInput2.value;

        let resultTask2 = 1;
        for(let i = 2; i <= num; i++) {
            resultTask2 *= i;
        }
        OnInput2.value = "";

        return document.taskTwo.taskTwoInput.value = resultTask2;
    }



}


/*
3. Напишіть функцію, яка приймає три окремі цифри і 
перетворює їх на одне число. Наприклад: цифри 1, 4, 9 
перетворяться на число 149.
*/

const submit3 = document.querySelector(".btn_task3");
const OnInput3 = document.querySelector(".input_task3");
const OutInput3 = document.querySelector(".input_taskThree");
const btnReset = document.querySelector(".btn-reset3");

let num1 = 0;
let num2 = 0;
let num3 = 0;


submit3.onclick = function () {

    if (submit3) {
        let num = OnInput3.value;
        if (num1 === 0) {
            num1 = num;
        } else if (num2 === 0) {
            num2 = num;
        } else if (num3 === 0) {
            num3 = num;
        }
        OnInput3.value = ""; // очищує input після нажимання кнопки
        OutInput3.value = ""; // очищує input з результатом якщо потрібно йти по новому кругу
    }

    if(num3 > 0) {
        let resultTask3 = num1.toString() + num2.toString() + num3.toString();
        document.task3.inputOnThree.value = `${num1}, ${num2}, ${num3}`; // виводить всі три числа які ми ввели
        document.taskThree.taskThreeInput.value = resultTask3; // виводить числа разом
    }

}

btnReset.onclick = function () { // обнуляє inputu
    if (btnReset) {
        OnInput3.value = "";
        OutInput3.value = "";
        num1 = 0;
        num2 = 0;
        num3 = 0;
    }
}



/*
4. Напишіть функцію, яка приймає довжину та ширину прямокутника і 
обчислює його площу. Якщо у функцію передали
1 параметр, вона вираховує площу квадрата.
*/


const submit4 = document.querySelector(".btn_task4");
const OnInput4 = document.querySelector(".input_task4");
const OutInput4 = document.querySelector(".input_taskFour");

let length = 0;
let width = 0;

submit4.onclick = function () {
    if (submit4) {

        let num = OnInput4.value;

        if (length === 0) {
            length = num;
        } else if (width === 0) {
            width = num;
        }
        task4();
        OnInput4.value = ""; // очищує input після нажимання кнопки
    }

    if(width > 0) {
        let resultTask4 = length * width;
        document.task4.inputOnFour.value = `${length} + ${width}`;
        document.taskFour.inputOutFour.value = `${resultTask4} ²`;
    }
}

function task4() {
    if (OutInput4.value) {
        OnInput4.value = "";
        OutInput4.value = "";
        length = 0;
        width = 0;
    }
}



/*
5. Напишіть функцію, яка перевіряє, чи є передане їй число
досконалим. Досконале число – це число, що дорівнює сумі
всіх своїх власних дільників.
*/


// const submit5 = document.querySelector(".btn_task5");
// const OnInput5 = document.querySelector(".input_task5");
// const OutInput5 = document.querySelector(".input_taskFive");


// let numberTaskFive = 0;

// submit5.onclick = function () {
//     if (submit5) {
//         numberTaskFive = OnInput5.value;
//         Task5(numberTaskFive);
 
//         OnInput5.value = ""; // очищує input після нажимання кнопки
//     }

// }

function Task5(number) {
  let sum = 0;
  let isPerfect = false;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (sum === number) {
    isPerfect = true;
  }
  if (isPerfect) {
    console.log(number + " це число є досконалим");
  } else {
    console.log(number + " це число не є досконалим");
  }
}


Task5(6); // виведе true
Task5(28); // виведе true
Task5(12); // виведе false



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
    // console.log(result);

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



/*
10. Напишіть функцію, яка підраховує різницю між датами. Функція приймає 6 параметрів, що описують 2 дати, 
і повертає результат у вигляді рядка «година:хвилини:
секунди». Під час виконання завдання використовуйте 
функції з попередніх 2 завдань: спочатку обидві дати переведіть у секунди, дізнайтеся різницю в секундах, а потім 
різницю переведіть назад у «година:хвилини:секунди».
*/











