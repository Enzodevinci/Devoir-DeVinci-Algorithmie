alert("Exercice Jason")

var jason = 100
const survivant = ['Sportif', 'Recrue', 'Toxico', 'Blonde', 'Rousse']
const boyname = ['Max', 'Adrien', 'Dylan', 'Julien', 'Axel']
const girlname = ['Éva', 'Adèle', 'Nancy', 'Nadia', 'Vanessa']
const characteristics = {
    Sportif: [0.6, 0.3, 0.7],
    Recrue: [0.8, 0.5, 0.3],
    Toxico: [0.3, 0.8, 0.1],
    Blonde: [0.2, 0.5, 0.4],
    Rousse: [0.4, 0.4, 0.6],
};
var damagedie = 15
var damageskip = 10

while (jason > 0 && survivant.length > 0) {
    for (let i = 0; i < survivant.length;i++) {
        console.log(survivant[i], jason)

        if (survivant[i] === 'Sportif' && jason > 0) {
            jason -= damagedie 
            if (jason -= 15) {
                console.log(survivant[i] + ' a infligé ' + damagedie + ' points de vie à Jason et celui-ci est mort !')
            }
        }
        if(survivant[i] === 'Recrue' && jason > 0){
            jason -= damagedie 
            if (jason -= 15) {
                console.log(survivant[i] + ' a infligé ' + damagedie + ' points de vie à Jason et celui-ci est mort !')
            }  
        }
        if (survivant[i] === 'Toxico' && jason > 0) {
            jason -= damagedie 
            if (jason -= 15) {
                console.log(survivant[i] + ' a infligé ' + damagedie + ' points de vie à Jason et celui-ci est mort !')
            }
        }
        if (survivant[i] === 'Blonde' && jason > 0) {
            jason -= damagedie 
            if (jason -= 15) {
                console.log(survivant[i] + ' a infligé ' + damagedie + ' points de vie à Jason et celui-ci est mort !')
            }
        }
        if (survivant[i] === 'Rousse' && jason > 0) {
            jason -= damagedie 
            if (jason -= 15) {
                console.log(survivant[i] + ' a infligé ' + damagedie + ' points de vie à Jason et celui-ci est mort !')
            }
        }
    }
    for(let i = 0; i < survivant.length;i++)
    if(survivant[i]){
        jason -= 0
        console.log(survivant[i] + ' est mort ! ') 
    }
    if(jason == 0){
        console.log('Jason est mort ! RIP à ' + survivant[i])
    }
}
