'use strict'

const userData = {
    name: null,
    surname: null,
    age: null,
    mail: null,
    adult: null
};

// слежка за ценой
function sendData() {
    const userName = document.getElementById('userName').value;
    const userMail = document.getElementById('userMail').value;
    
    if (userName !== "" && userMail !== "") {
        event.preventDefault(); // предотвращение закрытия страницы из-за forml
        console.log(`aboa ${userData}`)
        console.log(`Имя пользователя:  ${userData.name}`);
        console.log(`Почта пользователя: ${userData.mail}`);
        console.log(userData);
        closeWindow()
    }
    else {
        alert('Заполните все поля!');
    }
}

// регистрация 
function sendRegData() {
    event.preventDefault();

    const inputName = document.getElementById('reg_name').value;
    const inputSurname = document.getElementById('reg_surname').value;
    const inputAge = document.getElementById('reg_age').value;
    const inputMail = document.getElementById('reg_mail').value;

    if (inputAge !== "" && inputSurname !== "" && inputName !== "" && inputMail !== "") {
        userData.name = inputName,
        userData.surname = inputSurname,
        userData.age = inputAge,
        userData.mail = inputMail
        if (userData.age >= 18) {
            userData.adult = true
        }
        else {
            userData.adult = false
        }
        console.log(userData);
        closeWindowReg()
    }
    else {
        alert('Заполните все поля!');
    }
}

const opacityShow = () => document.getElementById('opacity_window').style.display = 'flex';
const opacityHidden = () => document.getElementById('opacity_window').style.display = 'none';

function openRegWindow() {
    opacityShow()
    document.getElementById('registration_window').style.display = 'flex';
}

function openSpecWindow() {
    opacityShow()
    document.getElementById('spec_window').style.display = 'flex';
    document.getElementById('userName').value = userData.name ?? "";
    document.getElementById('userMail').value = userData.mail ?? "";
}

function openDynWindow() {
    opacityShow()
    document.getElementById('dynamic_window').style.display = 'flex'
}

function closeWindowReg() {
    document.getElementById('opacity_window').style.display = 'none';
    document.getElementById('registration_window').style.display = 'none';
    document.getElementById('registration').textContent = "";
    document.getElementById('login').innerHTML = `<img src="images/login.svg"> ${userData.name}`;
}

function closeWindow() {
    document.getElementById('opacity_window').style.display = 'none';
    document.getElementById('registration_window').style.display = 'none';
    document.getElementById('spec_window').style.display = 'none';
    document.getElementById('dynamic_window').style.display = 'none';

    if (userData.name != undefined) {
        console.log(`Пользователь: ${userData.name} закрыл окно.`)
    }
    else {
        console.log('Незарегистрированный пользователь закрыл окно.')
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeWindow()
    }
});

// switch(sugar) {
//     case 0: {
//         alert('Похвально.')
//         break
//     }
//     case 1: {
//         alert('Пойдёт.')
//         break
//     }
//     case 2: {
//         alert('Многовато.')
//         break
//     }
//     case 3: {
//         alert('Кариес неминуем')
//         break

//     }
//     default: {
//         alert('O_O')
//         break
//     }
// }

// let score = 10
// do {
//     console.log(score)
//     score--
// }
// while (score >0)

//     // while (score = 1) {
//     //     console.log('пора кушать память')
//     // }

//     let  count = (number) => {
//         if (number <= 0) return
//         alert(`Я считаю до ${number}`)
//         for (let i = 1; i<=number; i++) {
//             alert(i)
//         }
//     }

    
// const userNumber = +prompt('До скольки мне посчитать? Могу только до 10!')
// if (isNaN(userNumber)) {
//     alert('-_-')
// }

// if (userNumber < 0) {
//     alert("Ну ладно, тогда я посчитаю как захочу")
//     count(3)
// }

// if (userNumber === 0) {
//     alert("=(")
// }

// if (userNumber <= 10)
// {
//     count(userNumber)
//     alert('Удачи!')
// }

// if (userNumber > 10) {
//     alert('Это я уже не умею.')
// }

// // ---------------------------------------
// let test = "world"
// console.log('Hello', test)

// const pi = "3,14"
// console.log("Число Пи - ", pi)

// let world = test
// console.log (world)

// let pitest = `${pi}, ${test}`
// console.log(pitest)

// let ages = 18
// const message = ages === 18
// ? 'Самый рассвет сил'
// : '-_-'
// console.log(message)

// let year = 2025
// let born = `Дата рожедния: ${year - ages}`
// console.log(born)

// const infinity = 100 / 0
// const infinity1 = -100 / 0
// const infinityResult = `${infinity / infinity1}`
// console.log(infinityResult)

// let child = ages < 18
// console.log(child)

// // typeof - возвращание названия ф-ции