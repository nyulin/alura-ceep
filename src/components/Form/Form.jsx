import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this._category = "Sem Categoria";
    this._title = "";
    this._text = "";
    this.state = { categories:[] };

    this._addCategory = this._addCategory.bind(this);
  }

  componentDidMount(){
    this.props.cardCategories.subscribe(this._addCategory);
  }

  componentWillUnmount(){
    this.props.cardCategories.unsubscribe(this._addCategory);
  }

  _addCategory(categories){
    this.setState({...this.state, categories});
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    const card = {
      category: this._category,
      title: this._title,
      text: this._text
    };

    this.props.createCard(card);
  }

  _handleCategoryChange(event){
    event.stopPropagation();
    this._category = event.target.value;
  }

  _handleTitleChange(event) {
    event.stopPropagation();
    this._title = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this._text = event.target.value;
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={this._createCard.bind(this)}
      >
        <select 
          className="form-input"
          onChange={this._handleCategoryChange.bind(this)}
        >
          <option>Sem Categoria</option>
          {this.state.categories.map((category, index)=>{
            return (
              <option key={index}>
                {category}
              </option>
            );
          })}
        </select>
        <input
          className="form-input"
          type="text"
          placeholder="Digite o título"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea
          className="form-input"
          rows={5}
          placeholder="Digite sua nota"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="form-input form-submit">
          Salvar Nota
        </button>
      </form>
    );
  }
}

export default Form;