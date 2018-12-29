import React from 'react';

import List from './List';

import '../resources/styles/SearchHeader.css';

export default class SearchHeader extends React.Component {
  onButtonClick = (e) => {
    // query field kontrolü yapılır, boş ise alert gösterilir
    if(this.props.formdata.query.length === 0) {
      alert("Please enter a query")
    }
    else { // eğer query girilmişse click eventi oluşturulur
      this.props.onButtonClick();
    }
  }

  searchHeaderForm = () => {
    return(
      <div 
        className={`search-form ${this.props.inline ? this.props.inline+"-search-form" : ""}`}
        >
        <input 
          className={`input input-query ${this.props.inline ? this.props.inline+"-input-query" : ""}`} 
          type="text" 
          name="query"
          value={this.props.formdata.query}
          onChange={this.props.onInputChange}
          placeholder="Query" />
        <div className={`select-wrapper ${this.props.inline ? this.props.inline+"-select-wrapper" : ""}`}>
          {<List 
                ops={this.props.ops} 
                collection={this.props.formdata.collection} 
                collectionId={this.props.formdata.collectionId} 
                itemClicked={this.props.itemClicked}
                />}
        </div>            
        <button 
          className={`input search-button ${this.props.inline ? this.props.inline+"-search-button" : ""}`}
          onClick={this.onButtonClick.bind(this)}  
          type="submit">
            Search
          </button>
      </div> 
    );
  }

  render() {
    return(
      <header className={`header ${this.props.inline ? this.props.inline+"-header" : ""}`}>
          <div className={`header-logo-wrapper ${this.props.inline ? this.props.inline+"-header-logo-wrapper" : ""}`}>
            <div className={`header-logo ${this.props.inline ? this.props.inline+"-header-logo" : ""}`}>
              <img className={`logo ${this.props.inline ? this.props.inline+"-logo" : ""}`} src={require('../resources/images/sq.png')} alt="logo"/>
            </div>
            <h1 className={`header-logo-name ${this.props.inline ? this.props.inline+"-header-logo-name" : ""}`}><b>image</b> search</h1>
          </div>      
          {this.searchHeaderForm() /*bu kısım daha sonra ayrı bir component'e taşınsa güzel olur*/}
        </header>
    );
  }
}