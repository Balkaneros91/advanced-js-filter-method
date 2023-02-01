  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

// The filter() method - part 1

// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

// const paul = people.filter(person[2]);   // just trying 
// const paul = people[2];                  // just trying
const paul = people.filter(p => p.name === "Paul");   // array
const pauls = people.filter(p => p.name === "Paul")[0];  // first and only element
console.log(paul);
console.log(pauls);

// The filter() method - part 2

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;

//// let strongSkills =//// student.skills.filter(has5yearsExp).length > 0;   //remove the return  and strongSkills and move the .length > 0 up, so we shorten the code.
//// return strongSkills.length > 0;
//// };

const candidates = students.filter(hasStrongSkills);
console.log(candidates);

// map();
const names = candidates.map(n => n.name);
console.log(names);