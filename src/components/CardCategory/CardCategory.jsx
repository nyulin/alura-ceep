import React, { Component } from "react";
import "./style.css";

class CardCategory extends Component {

    constructor(){
        super();
        this.state = { categories : [] }
        
        this._addCategory = this._addCategory.bind(this);
    }

    componentDidMount(){
        this.props.cardCategories.subscribe(this._addCategory);
    }

    componentWillUnmout(){
        this.props.cardCategories.unsubscribe(this._addCategory);
    }

    _addCategory(categories){
        this.setState({...this.state, categories});
    }

    _handleEventInput(e){
        if(e.key === "Enter" && e.target.value !== ""){
            this.props.createCardCategory(e.target.value);
            e.target.value = "";
        }
    }

    render() {
        return (
            <section className="card-category">
                <ul className="card-category_list">
                    {this.state.categories.map((category, index)=>{
                        return(
                        <li className="card-category_item" key={index}>
                            {category}
                        </li>
                        );
                    })
                    }
                </ul>
                <input 
                    type="text" 
                    className="card-category_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventInput.bind(this)}                
                />
            </section>

        );
    }
}

export default CardCategory;