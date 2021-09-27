require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const {Schema} = mongoose;

const personSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

// let Person;
const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  let person = new Person({
    name: "Santiago",
    age: 27,
    favoriteFoods: ["Tamal", "Ajiaco"]
  });
  person.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

// createAndSavePerson((err, data) => console.log(data));

const arrayOfPeople = [
  {name:"Andres", age: 20, favoriteFoods: ["Tomato", "Corona"]},
  {name:"Elias", age: 25, favoriteFoods: ["Pizza", "Cake"]}
]
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  });
};

// createManyPeople(arrayOfPeople, (err, data) => console.log(data));

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

// findPeopleByName("Santiago", (err, data) => console.log(data))

const findOneByFood = (food, done) => {
  Person.findOne({"favoriteFoods": food}, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// findOneByFood("Corona", (err, data) => console.log(data))

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

// findPersonById('610782e307faa201519c16a0', (err, data) => {
//   if (err) return console.log("An error occur");
//   console.log(data)
// });

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, personToEdit) => {
    if (err) return console.error(err);
    personToEdit.favoriteFoods.push(foodToAdd);
    personToEdit.save((err, personEdited) => {
      if (err) return console.error(err);
      done(null, personEdited);
    })
  });
};

// findEditThenSave("610782e307faa201519c16a0", (err, data) => console.log(data))

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
