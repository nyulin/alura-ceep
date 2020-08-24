export default class Category{
    constructor(){
        this.categories = [];
        this._subscribers = [];
    }

    createCategory(category){
        this.categories.push(category);
        this.notify();
    }

    subscribe(func){
        this._subscribers.push(func);
    }

    unsubscribe(func){
        this._subscribers.filter(f => f !== func);
    }

    notify(){
        this._subscribers.forEach(func =>{
            func(this.categories);
        });
    }
}