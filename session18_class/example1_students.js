
class Students {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your fullName is ${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return 'You are expelled!!!';
        }
        return `Student ${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }

    addScores(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage() {
        let sum = this.scores.reduce((a, b) => a + b);
        return sum / this.scores.length;
    }

    static EnrollStudents() {
        return 'ENROLLING STUDENTS...'
    }
}

let std1 = new Students('Vanh', 'Le');
console.log(std1.fullName());
console.log(std1.markLate());
console.log(std1.markLate());
console.log(std1.markLate());
console.log(std1.addScores(50));
console.log(std1.addScores(100));
console.log(std1.calculateAverage());
console.log(Students.EnrollStudents());
