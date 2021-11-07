import data from './titanic-data.js';

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic');
const biggestAge = document.querySelector('#biggest-age');
const smallestAge = document.querySelector('#smallest-age');

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid';
titanic.style.gridTemplateColumns = 'repeat(34, 30px)';
titanic.style.gridGap = '10px';
// titanic.style.display = 'flex';
// titanic.style.justifyContent = 'center';
// titanic.style.alignItems = 'flex-end';
// titanic.style.height = '50px';
titanic.style.padding = '10px';
titanic.style.border = '1px black solid';

biggestAge.style.height = '20px';
biggestAge.style.backgroundColor = 'black';
biggestAge.style.marginLeft = '20px';

smallestAge.style.height = '20px';
smallestAge.style.backgroundColor = 'black';
smallestAge.style.marginLeft = '20px';
// Map over the data and make a new element for each passenger
const passengers = data.map((p) => {
	const el = document.createElement('div');
	titanic.appendChild(el);
	return el;
});

// Let's loop over each passenger and set some styles
data.sort((a, b) => {
	if (a.fields.embarked === 'C') {
		return -1;
	} else {
		return 1;
	}
});

data.sort((a, b) => {
	if (a.fields.embarked === 'S') {
		return -1;
	} else {
		return 1;
	}
});

let biggestNum = 0;
let smallestNum = 1;

passengers.forEach((p, i) => {
	const { pclass, survived, sex, embarked, age, fare } = data[i].fields;
	if (sex === 'female') {
		p.style.borderRadius = '100px';
	}
	p.style.backgroundColor = 'yellow';

	if (embarked === 'S') {
		p.style.backgroundColor = 'gold';
	}
	if (embarked === 'C') {
		p.style.backgroundColor = 'teal';
	}
	if (embarked === 'Q') {
		p.style.backgroundColor = 'pink';
	}
	p.style.width = '15px';
	p.style.height = '15px';
	p.style.width = `${age % 30}px`;
	p.style.opacity = survived === 'Yes' ? '100%' : '30%';
	p.style.border = `${fare % 3} black solid`;
	if (age > biggestNum) {
		biggestNum = age;
	} else if (age < smallestNum) {
		smallestNum = age;
		console.log(smallestNum);
	}
});

biggestAge.style.width = `${biggestNum}px`;
smallestAge.style.width = `${smallestNum}px`;

document.getElementById('num-passengers').innerHTML = passengers.length;
document.getElementById('num-survived').innerHTML = data.filter(
	(each) => each.fields.survived === 'Yes'
).length;
document.getElementById('num-dead').innerHTML = data.filter(
	(each) => each.fields.survived === 'No'
).length;

document.getElementById('num-female').innerHTML = data.filter(
	(each) => each.fields.sex === 'female'
).length;

document.getElementById('num-male').innerHTML = data.filter(
	(each) => each.fields.sex === 'male'
).length;

// Challenges -

// Make the squares a little bigger 15px by 15px.
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger.

// Change the number of columns on the titanic to 34

// Display each passenger as a circle if they are female.
// Do this by setting the borderRadius of each passenger.
// Match the passenger in passengers to the object data
// in the data array by the index.

// Display each passengers who did not survive as
// opacity 0.5.

// Set the backgroundColor of each passenger by their
// embarked value. There are three possible values:
// 'S', 'C', and 'Q'
