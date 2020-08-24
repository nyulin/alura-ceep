export default class Card {
    constructor(){
        this.cards = [];
        this._subscribers = [];
    }

    createCard(card){
        this.cards.push(card);
        this.notify();
    }

    deleteCard(index){
        this.cards.splice(index, 1);
        this.notify();
    }

    subscribe(func){
        this._subscribers.push(func);
    }

    unsubscribe(func){
        this._subscribers = this._subscribers.filter( f => f !== func );
    }

    notify(){
        this._subscribers.forEach(func =>{
            func(this.cards);
        });
    }
}
