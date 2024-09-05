// funkcja do zmiany naglowka
function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

// funkcja do zmiany koloru         
function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}

//przykladowy komentarz

/*
przykladowy
komentarz
*/

// Zadanie 1

// const doubleArray = (numbers) =>numbers.map(number => number * 2);

// const originalArray = [4, 17, 37, 42, 502];
// const doubledArray = doubleArray(originalArray);

// console.log(originalArray, doubledArray); 


//Zadanie 2

const getStudentNames = (students) => {
    return students.map(student => student.name);
};
const students = [
    {name: 'Tom', age: 21, major: 'Math' },
    {name: 'Angelica', age: 23, major: 'Law'},
    {name: 'Patrick', age: 22, major: 'Medicine'},
];

const studentNames = getStudentNames(students);
console.log(studentNames);

