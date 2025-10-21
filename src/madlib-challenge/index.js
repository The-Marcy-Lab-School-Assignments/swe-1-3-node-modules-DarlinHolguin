// TODO: Import prompt-sync and madlib.js
const madlib = require('./madlib.js')
const prompt = require('prompt-sync')()
// TODO: Move the madlib function to its own file: madlib.js


// TODO: Replace the hardcoded values with prompt calls
const main = () => {
  const profession = prompt('Choose a profession: ');
  const name = prompt('Choose a name: ');
  const verb = prompt('Choose a verb: ');
  const pet = prompt('Choose a pet: ');

  // We have to do some input validation for this one to make sure it is a boolean
  const storyContinuesResponse = prompt('Choose whether the story continues. Y or N: ');
  const storyContinues = storyContinuesResponse.toUpperCase() === "Y";

  madlib(profession, name, verb, pet, storyContinues);
};

main();


