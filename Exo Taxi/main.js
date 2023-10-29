alert("Exercice Taxi")

var john = 10
var feuRouge = 0
const musics = ['LOAT - JOYCA, Cjae', 'Counting Star - OneRepublic', 'LET GO - Central Cee', '7 Years - Lukas Graham', 'Anissa - Wejdene']
var change = 0

while ( feuRouge < 30 && john > 0){
    for(let i = 0; i < 5; i++){
        console.log(musics[i],feuRouge++)
            console.log (' John écoute la Musique')
            if(musics [4] === musics[i] ){
                john -= 1
                change += 1
                console.log (' John a perdu 1  de santé Mental, et il change de Taxi et il lui reste ' + john + ' de santé Mental !')
            }
            if(john == 0){
                console.log (' John explose ! ')
                break
                }
            if(feuRouge == 30){
                console.log('John est arrivé chez lui, il changé ' + change + ' fois de Taxi durant le Trajet ! ')
                break
            }
        }
    }
