class TicTacToe {
    constructor() {
        this.xy=[
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];
        this.first_player;
        this.second_player;
        this.current_player;

    }

    getCurrentPlayerSymbol() {
        if(!this.first_player&&!this.second_player){
            this.first_player='x';
            this.second_player='o';
            this.current_player='x';
        }
        return this.current_player;
        
    }

    nextTurn(rowIndex, columnIndex) {
        this.xy[rowIndex,columnIndex]=this.current_player;
        this.current_player=this.current_player==this.first_player?
                            this.second_player:
                            this.first_player;
    }

    isFinished() {
        this.xy.forEach(function(stroke){
            stroke.forEach(function(item) {
                if(item==null){
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

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
