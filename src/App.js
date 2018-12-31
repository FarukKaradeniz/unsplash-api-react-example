import React, { Component } from 'react';
import Axios from 'axios';

import SearchHeader from './components/SearchHeader';
import Content from './components/Content';
import './resources/styles/App.css';

const selectOptionList = [
  {
    name: "Istanbul",
    id: 3590378,
    selected: false,
  },
  {
    name: "Nature",
    id: 158642,
    selected: false,
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_made: '', // arama yapıldı mı yapılmadı mı gösterilir
      imgList: null, // gelen veriler
      query: '', 
      collectionName: 'Collections',
      collection: -1, // yani -1 ile başlar
      currentPage: 1,
    }
  }

  onInputChange = (e) => { //query onchange eventi
    this.setState({[e.target.name]: e.target.value})
  }

  itemClicked = (newId) => { //liste item tıklaması eventi
    this.setState({collection: newId});
  }

  onButtonClick = () => {
    this.setState({
      search_made: "inline", //inline classname
    });
    console.log(this.state);
    this.loadImages();     

  }

  loadImages = () => { //api isteği yapılır
    Axios({
      method: 'get',
      url: 'https://api.unsplash.com/search/photos',
      params: {
        client_id: '4207199fdd3a75e974b6da10050b17abb8eb576fbeb023de2486ea4c1c42313e', //2.hesap 
        // client_id: 'c6247455a0aefef5dcb6858a1e1e49df53c4260a8b27b1dd27b5be0ffedcf2f6',
        collections: this.state.collection,
        query: this.state.query,
        per_page: 15,
        page: this.state.currentPage,
      }
    })
    .then(reponse => {
      console.log(reponse);
      this.setState({imgList: reponse.data});
    })
    .catch(err => {
      //error ekranı burada olabilir
      console.log(err);
    })
  }

  onNextClick = () => {
    let nextPage = this.state.currentPage + 1;
    this.setState({
      currentPage: nextPage,
    });
    this.loadImages();
  }

  onPrevClick = () => {
    let nextPage = this.state.currentPage - 1;
    this.setState({
      currentPage: nextPage,
    });
    this.loadImages();
  }
  
  render() {
    return (
      <div className="App">
        <SearchHeader 
          formdata={{query: this.state.query, collection: this.state.collectionName, collectionId: this.state.collection}}
          inline={this.state.search_made} 
          ops={selectOptionList}
          itemClicked={this.itemClicked.bind(this)}
          onInputChange={this.onInputChange.bind(this)}
          onButtonClick={this.onButtonClick.bind(this)}
          selectOptionList={selectOptionList} 
          />
          <Content 
            visibility={this.state.search_made!=='' ? "block" : "none"} 
            data={this.state.imgList}
            currentPage={this.state.currentPage}  
            onPrevClick={this.onPrevClick}
            onNextClick={this.onNextClick}
          />
      </div>
    );
  }
}

export default App;
