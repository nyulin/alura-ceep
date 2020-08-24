import React, { Component } from "react";
import CardCategory from "./components/CardCategory";
import CardList from "./components/CardList";
import Form from "./components/Form";

import "./assets/App.css";
import "./assets/index.css";

import Categories from "./data/Categories";
import Cards from "./data/Cards";

class App extends Component {
  
  constructor(){
    super();
    this.categories = new Categories();
    this.cards = new Cards();

  }

  render(){
    return (
      <section className="content">
        <Form 
          createCard={this.cards.createCard.bind(this.cards)} 
          cardCategories={this.categories}
        />
        <main className="content-main">
          <CardCategory 
            createCardCategory={this.categories.createCategory.bind(this.categories)}
            cardCategories={this.categories}
          />
          <CardList
            cards={this.cards}
            deleteCard={this.cards.deleteCard.bind(this.cards)}
          />
        </main>

      </section>
  );    
  }
}

export default App;
