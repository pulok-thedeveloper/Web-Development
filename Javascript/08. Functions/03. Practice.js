function getAvg(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const avg = total / 3;
    return avg;
}


const assignment1Marks = 60;
const assignment2Marks = 50;
const assignment3Marks = 59;

var avg = getAvg(assignment1Marks, assignment2Marks, assignment3Marks);

console.log('My average is' ,avg.toFixed(2));