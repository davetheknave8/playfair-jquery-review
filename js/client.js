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
    $('#students').on('click', '.student', showAwesomeAlert);
    renderStudentList(playfair);
    highlightRed();
   // $('#students').on('click', '.student', showAwesomeAlert);
}

// This function highlights the students name in red once the mouse goes over it.
function highlightRed() {
    $('#students').on('mouseenter', '.student', event => {
        $(event.currentTarget).css('color', 'red');
    }).on('mouseleave', '.student', event => {
        $(event.currentTarget).css('color', 'black')
    })
}

// This function will be called when we click on a student.
function showAwesomeAlert(event){
    console.log(event.currentTarget.innerHTML);
    console.log(this);
    alert(`You're awesome ${event.currentTarget.innerHTML}!`);
}

// It will show an alert saying that student is awesome!
//Loops through an array, calling renderStudent(lines 25-28) on each iteration of the array.
function renderStudentList(studentList) {
    for( let student of studentList ) {
        renderStudent(student)
    }  
}


//Takes an argument of an item to be displayed on the DOM.
function renderStudent(student) {
    $('#students').append(`<li class="student">${student}</li>`)
}
    