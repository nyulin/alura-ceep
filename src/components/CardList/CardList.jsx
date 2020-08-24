import React, { Component } from "react";
import Card from "../Card";
import "./style.css";

class CardList extends Component {

    constructor(){
        super();
        this.state = { cards : [] }

        this._addCard = this._addCard.bind(this);
    }

    componentDidMount(){
        this.props.cards.subscribe(this._addCard);
    }

    componentWillUnmount(){
        this.props.cards.unsubscribe(this._addCard);
    }

    _addCard(cards){
        this.setState({...this.state, cards});
    }

    render(){
        return(
            <ul className="card-list">
                {this.state.cards.map(  
                    (card, index)=>{
                        return(
                            <li className="card-list_item" key={index}>
                                <Card 
                                    card={card}
                                    index={index}
                                    deleteCard={this.props.deleteCard}
                                />
                            </li>                         
                        );
                    }    
                )}

            </ul>
        );
    }
}

export default CardList;