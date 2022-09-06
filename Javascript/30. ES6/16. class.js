// Syntactic sugar

class Instructor{
    name;
    designation = 'Web course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`);
    }
}
const aamir = new Instructor('aamir','lahore');
console.log(aamir);
aamir.startSupportSession('9:00');
aamir.createQuiz(41);

const salmonVai = new Instructor('Salmon Vai', 'Mumbai');
console.log(salmonVai);