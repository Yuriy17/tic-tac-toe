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
        return this.isDraw()||this.getWinner()!==null?true:false;
    }

    getWinner() {
        if ((this.xo[0][0] == 'x' && this.xo[0][1] == 'x' && this.xo[0][2] == 'x') ||
            (this.xo[1][0] == 'x' && this.xo[1][1] == 'x' && this.xo[1][2] == 'x') ||
            (this.xo[2][0] == 'x' && this.xo[2][1] == 'x' && this.xo[2][2] == 'x') ||
            (this.xo[0][0] == 'x' && this.xo[1][0] == 'x' && this.xo[2][0] == 'x') ||
            (this.xo[0][1] == 'x' && this.xo[1][1] == 'x' && this.xo[2][1] == 'x') ||
            (this.xo[0][2] == 'x' && this.xo[1][2] == 'x' && this.xo[2][2] == 'x') ||
            (this.xo[0][0] == 'x' && this.xo[1][1] == 'x' && this.xo[2][2] == 'x') ||
            (this.xo[0][2] == 'x' && this.xo[1][1] == 'x' && this.xo[2][0] == 'x')){
            return 'x';
        }else if((this.xo[0][0] == 'o' && this.xo[0][1] == 'o' && this.xo[0][2] == 'o') ||
            (this.xo[1][0] == 'o' && this.xo[1][1] == 'o' && this.xo[1][2] == 'o') ||
            (this.xo[2][0] == 'o' && this.xo[2][1] == 'o' && this.xo[2][2] == 'o') ||
            (this.xo[0][0] == 'o' && this.xo[1][0] == 'o' && this.xo[2][0] == 'o') ||
            (this.xo[0][1] == 'o' && this.xo[1][1] == 'o' && this.xo[2][1] == 'o') ||
            (this.xo[0][2] == 'o' && this.xo[1][2] == 'o' && this.xo[2][2] == 'o') ||
            (this.xo[0][0] == 'o' && this.xo[1][1] == 'o' && this.xo[2][2] == 'o') ||
            (this.xo[0][2] == 'o' && this.xo[1][1] == 'o' && this.xo[2][0] == 'o')){
            return 'o';
        }else {return null;}
    }

    noMoreTurns() {
        for (let stroke of this.xo){
            for(let item of stroke){
                if (item === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        for (let stroke of this.xo){
            for(let item of stroke){
                if (item === null) {
                    return false;
                }
            }
        }
        return (!((this.xo[0][0] == 'x' && this.xo[0][1] == 'x' && this.xo[0][2] == 'x') ||
                (this.xo[1][0] == 'x' && this.xo[1][1] == 'x' && this.xo[1][2] == 'x') ||
                (this.xo[2][0] == 'x' && this.xo[2][1] == 'x' && this.xo[2][2] == 'x') ||
                (this.xo[0][0] == 'x' && this.xo[1][0] == 'x' && this.xo[2][0] == 'x') ||
                (this.xo[0][1] == 'x' && this.xo[1][1] == 'x' && this.xo[2][1] == 'x') ||
                (this.xo[0][2] == 'x' && this.xo[1][2] == 'x' && this.xo[2][2] == 'x') ||
                (this.xo[0][0] == 'x' && this.xo[1][1] == 'x' && this.xo[2][2] == 'x') ||
                (this.xo[0][2] == 'x' && this.xo[1][1] == 'x' && this.xo[2][0] == 'x'))&&
                !((this.xo[0][0] == 'o' && this.xo[0][1] == 'o' && this.xo[0][2] == 'o') ||
                (this.xo[1][0] == 'o' && this.xo[1][1] == 'o' && this.xo[1][2] == 'o') ||
                (this.xo[2][0] == 'o' && this.xo[2][1] == 'o' && this.xo[2][2] == 'o') ||
                (this.xo[0][0] == 'o' && this.xo[1][0] == 'o' && this.xo[2][0] == 'o') ||
                (this.xo[0][1] == 'o' && this.xo[1][1] == 'o' && this.xo[2][1] == 'o') ||
                (this.xo[0][2] == 'o' && this.xo[1][2] == 'o' && this.xo[2][2] == 'o') ||
                (this.xo[0][0] == 'o' && this.xo[1][1] == 'o' && this.xo[2][2] == 'o') ||
                (this.xo[0][2] == 'o' && this.xo[1][1] == 'o' && this.xo[2][0] == 'o'))
                )?true:false;
        
    }

    getFieldValue(rowIndex, colIndex) {
        return this.xo[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
