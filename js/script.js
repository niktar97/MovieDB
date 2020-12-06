/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман"); 
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt("Один из просмотренных фильмов?", "");
        const rating = prompt("На сколько оцените его?", "");
    
        if (film != null && film != '' && film.length < 50 && rating != null && rating != '') {
            personalMovieDB.movies[film] = rating;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt("Ваш любимый жанр под номером " + i + "?", "");
        personalMovieDB.genres[i - 1] = genre;
        // if (film != null && film != '' && film.length < 50 && rating != null && rating != '') {
        //     personalMovieDB.movies[film] = rating;
        // } else {
        //     i--;
        // }
    }
}

writeYourGenres();

// let film; задавать вопросы по фильмам
// let rating;

// for (let i = 1; i < 3; i++) {
//     do {
//         film = prompt("Один из просмотренных фильмов?", "");
//     } while (film == null || film == '' || film.length > 50);
//     do {
//         rating = prompt("На сколько оцените его?", "");
//     } while (rating == null || rating == '');
//     personalMovieDB.movies[film] = rating;
// } 