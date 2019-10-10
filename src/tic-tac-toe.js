class TicTacToe {
    constructor() {
        this.xo = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.first_player = 'x';
        this.second_player = 'o';
        this.current_player = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.current_player;

    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.xo[rowIndex][columnIndex]) {
            this.xo[rowIndex][columnIndex] = this.current_player;
            this.current_player = this.current_player === this.first_player ?
                this.second_player :
                this.first_player;
        }
    }

    isFinished() {
        this.xo.forEach(function (stroke) {
            stroke.forEach(function (item) {
                if (item == null) {
                    return false;
                }
            })
        });
        return true;
    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {
        for (let stroke of this.xo){
            for(let item of stroke){
                if (item === null) {
                    return false;
                }
            }
        }
/*         this.xo.forEach((stroke) => {
            stroke.forEach((item) => {
                if (item == null) {
                    return false;
                }
            })
        }); */
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        
        return this.xo[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
