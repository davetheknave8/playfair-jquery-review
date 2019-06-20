console.log('js');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Sam', 'Adam', 'Danielle', 'Kyle', 'Blake', 
    'Mitch', 'Jake'
];

$(document).ready(onReady);

//When the document is ready, runs the renderStudentList function, displaying each item on 
//the DOM in an unordered list.
function onReady(){
    renderStudentList(playfair);
    $('#students').on('mouseenter', event => {
        $(event.currentTarget).css('color', 'red');
    }).on('mouseleave', () => {
        $(event.currentTarget).css('color', 'black')
    })
}

//Loops through an array, calling renderStudent(lines 25-28) on each iteration of the array.
function renderStudentList(studentList) {
    for( let student of studentList ) {
        renderStudent(student)
    }  
}


//Takes an argument of an item to be displayed on the DOM.
function renderStudent(student) {
    $('#students').append(`<li>${student}</li>`)
}
    