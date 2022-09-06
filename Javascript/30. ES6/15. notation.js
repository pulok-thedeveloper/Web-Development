const student = {
    name: 'abdul alim',
    age: 15,
    class: 'Ten',
    marks:{
        math: 99,
        physics: 75,
        chemistry: 68
    }
}
// DOT NOTATION
const marks = student.marks;
const math = student.marks.math;

// BRACKET NOTATION
const chemistry = student['marks']['chemistry'];
console.log(chemistry);