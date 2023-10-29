alert("Exercice Pokémon")

class pokémon {
    constructor (name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    attackPokemon(pokémon) {
        if (this.isLucky()) {
            let damage = this.attack - pokémon.defense
            pokémon.hp -= damage
            console.log(this.name + ' a attaqué ' + pokémon.name + ' et reçu ' + damage + ' points de dégâts ! Il lui reste ' + pokémon.hp + ' % points de vie')
        } else {
            console.log(this.name + ' à raté son attaque !')
        }
    }

    isLucky(){
        return this.luck > Math.random()
    }
}

let umbreon = new pokémon('Umbreon', 12, 10, 100, 0.9)
let sylveon = new pokémon('Sylveon', 14, 8, 100, 0.9)

while (umbreon.hp > 0 && sylveon.hp > 0) {

    sylveon.attackPokemon(umbreon)

    if (umbreon.hp <= 0) {
        console.log(umbreon.name + ' est KO !')
        break
    }

    umbreon.attackPokemon(sylveon)

    if (sylveon.hp <= 0) {
        console.log(sylveon.name + ' est KO !')
        break
    }
}
