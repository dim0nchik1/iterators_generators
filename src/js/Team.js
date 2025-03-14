import Character from "./Character.js";
export default class Team {
    constructor() {
        this.players = [];
        this.numPlayers = 0;
    }
    add(player) {
        if (player instanceof Character) {
            this.players.push(player);
            this.numPlayers ++;
        } else {
            throw new Error("Unknown player");
        }
    }
    [Symbol.iterator]() {
        let current = 0
        const {players, numPlayers} = this;
        return {
            next() {
                if (current < numPlayers) {
                    return {
                        value: players[current++],
                        done: false
                    };
                }
                return {
                    value: undefined,
                    done: true,

                }

            }
        }
    }

}
