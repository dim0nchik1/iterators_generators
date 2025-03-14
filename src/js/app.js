import Character from "./Character";
import Team from "./Team";


const player1 = new Character({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10

    }
)
const player2 = new Character({
    name: 'Воин',
    type: 'Warrior',
    health: 60,
    level: 1,
    attack: 50,
    defence: 10
})
const player3 = new Character({
    name: 'Маг',
    type: 'Magician',
    health: 80,
    level: 1,
    attack: 20,
    defence: 10
})

const newTeam = new Team()
newTeam.add(player1)
newTeam.add(player2)
newTeam.add(player3)
for (let player of newTeam){
    console.log(player)
}