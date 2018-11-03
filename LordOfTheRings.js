function createCharacter(name, nickname, race, origin, attack, defense) {
  const character = {}
  character.name = name
  character.nickname = nickname
  character.race = race
  character.origin = origin
  character.attack = attack
  character.defense = defense
  character.describe = function() {
    return `${character.name} is a ${character.race} from ${character.origin}.`
  }
  character.evaluateFight = function(characterObj) {
    let health = characterObj.defense - character.attack
    let health2 = characterObj.defense - characterObj.attack
    return `${characterObj.name} takes ${
      character.attack
    } damage, his health is ${health < 0 ? 0 : health} and you receive ${
      characterObj.attack
    } damage and your health is ${health2 < 0 ? 0 : health2}`
  }

  return character
}

let characterArray = []

const gandalf = createCharacter(
  'Gandalf the White',
  'gandalf',
  'Wizard',
  'Middle Earth',
  10,
  6
)

const bilbo = createCharacter(
  'Bilbo Baggins',
  'bilbo',
  'Hobbit',
  'The Shire',
  2,
  1
)

const aragorn = createCharacter(
  'Aragorn son of Arathorn',
  'Aragon',
  'Man',
  'Dunnedain',
  6,
  8
)
const frodo = createCharacter(
  'Frodo Baggins',
  'Frodo',
  'Hobbit',
  'The Shire',
  3,
  2
)

const legolas = createCharacter(
  'Legolas',
  'legolas',
  'Efl',
  'Woodland Realm',
  8,
  5
)

const Arwen = createCharacter(
  'Arwen Undomiel',
  'arwen',
  'Half-Elf',
  'Rivendell',
  5,
  10
)
characterArray.push(legolas, gandalf, bilbo, frodo, aragorn, Arwen)

console.log(gandalf.evaluateFight(Arwen))

const arwen = characterArray.find(function(element) {
  return element.nickname === 'arwen'
})
console.log(arwen.describe())

let hobbits = characterArray.filter(function(element) {
  return element.race === 'Hobbit'
})
console.log(hobbits)

let charactersAboveFive = characterArray.filter(function(element) {
  return element.attack > 5
})
console.log(charactersAboveFive)

// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------
