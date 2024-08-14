import printBestStudents from './8-seq.js';


const grades = {
    1: {
        score: 99,
        firstName: 'guillaume',
        lastName: 'salva',
    },
    2: {
        score: 65,
        firstName: 'john',
        lastName: 'doe',
    },
    3: {
        score: 80,
        firstName: 'jane',
        lastName: 'doe',
    },
};

console.log(printBestStudents(grades));