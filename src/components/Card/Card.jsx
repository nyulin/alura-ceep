import React, { Component } from "react";
import "./style.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class Card extends Component {

    deleteCard() {
        const index = this.props.index;
        this.props.deleteCard(index);
    }

    render() {
        return (
            <section className="card">
                <h4 className="card-categories">
                    {this.props.card.category}
                </h4>
                <header className="card-header">
                    <h3 className="card-title">
                        {this.props.card.title}
                    </h3>
                    <DeleteSVG
                        className="card-icon"
                        onClick={this.deleteCard.bind(this)}
                    />
                </header>
                <p className="card-text">
                    {this.props.card.text}
                </p>
            </section>

        );
    }
}

export default Card;