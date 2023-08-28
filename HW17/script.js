class Human {
    name = ""
    sex = ""
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    get name() {
        return this.name
    }
    get sex() {
        return this.sex
    }
    set name(asd) {
        this.name = asd
    }
    set sex(dsa) {
        this.sex = dsa
    }
}
class Flat {
    citizens = []
    entrance(citizen) {
        this.citizens.unshift(citizen)
    }
}

class House {
    flats = []
    limit = 0

    constructor(param) {
        this.limit = param
    }

    addFlat(flat) {
        if (this.flats.length < this.limit) {
            this.flats.unshift(flat)
        }
        else {
            console.log('Not enought flats')
        }
    }
}

let human = new Human('Denis', 'man')
let human1 = new Human('Alina', 'woman')
let flat = new Flat()
let flat1 = new Flat()
let flat2 = new Flat()
let param = prompt('enter limit')
param = Number(param)
let house = new House(param)
flat.entrance(human)
flat.entrance(human1)
house.addFlat(flat)
house.addFlat(flat1)
house.addFlat(flat2)
console.log(house.flats)
console.log(flat.citizens, flat1.citizens, flat2.citizens)
console.log(human.name, human.sex)
