// export class GameJsonSerializer {
//   constructor(game) {
//     this.game = game;
//   }

//   serialize() {
//     return JSON.stringify(this.game);
//   }
// }

// algorithmic way
export class GameJsonSerializer {
  constructor(game) {
    this.game = game;
  }

  serialize() {
    let columns = [];
    for (let i = 0; i < 6; i++) {
      let innerCol = [];
      for (let j = 0; j < 7; j++) {
        innerCol.push(this.game.getTokenAt(j, i));
      }
      columns.push(innerCol);
    }

    let savedState = {
      "player1": this.game.getPlayerOne(),
      "player2": this.game.getPlayerTwo(),
      "currentPlayer": this.game.getCurrentPlayer(),
      "tokens": columns
    };

    return JSON.stringify(savedState);
  }
}
