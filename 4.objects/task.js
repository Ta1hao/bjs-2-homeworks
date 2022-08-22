f"use scrict"

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Маша", "женщина", 21);
let student2 = new Student("Сергей", "мужчина", 25);
let student3 = new Student("Игнат", "мужчина", 40);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...rest) {
  if (this.marks === undefined) {
    this.marks = [...rest];
  } else {
    this.marks.push(...rest);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  let length = this.marks.length;

  for (let i = 0; i < length; i++) {
    sum += this.marks[i];
  }
  return sum / length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}