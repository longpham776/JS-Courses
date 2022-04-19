import { Node } from "./core/Node.js";
import { Sprite } from "./core/Sprite.js";
import { Card } from "./components/Card.js";

class Game extends Node {
    constructor() {
        super();
        this._init();
    }
    _init() {
        this._createCards();
        this._createScore();
    }
    _createCards() {
        this.cards = [];
        let img = 0;
        this.firstCard = null;
        //his.firstCard.open()
        this.secondCard = null;
        // for 
        for (let index = 0; index < 20;index++){
            this.card = new Card(index+1);
            this.card.elm.addEventListener("click",()=>{
                this.onClickCard(this.card);
            });
            this.card.elm.id = "card"+(index+1);
            if(img > 9) img = 0;
            this.card.setValue(img);
            img ++;
            let col = Math.floor(index/5);
            let row = index % 5;
            this.card.elm.style.top = col*100+"px";
            this.card.elm.style.left = row*100+"px";
            this.addChild(this.card);
            this.cards.push(this.card);
        }
        // this.firstCard = new Card();
        // this.firstCard.open()
        // this.secondCard = null;
    }
    _createScore(){

    }

    onClickCard(card){
        if(this.firstCard === null) this.firstCard = card;
        else if(this.firstCard) this.secondCard = card;
        else this.compareCard(this.firstCard,this.secondCard);
        console.log(this.firstCard);
        console.log(this.secondCard);
    }
    compareCard(firstCard,secondCard){

    }
    resetGame(){

    }
}

let game = new Game();
game.elm.id = "mainboard";
game.elm.style.left = "35%";
game.elm.style.top = "30%";
document.body.appendChild(game.elm);
