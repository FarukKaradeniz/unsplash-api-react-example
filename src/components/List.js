import React from 'react';
import onClickOutside from "react-onclickoutside";
import '../resources/styles/List.css';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false, //listenin görünür olup olmadığını tutan değer
      collection: this.props.collection, // listede görünecek collection ismi
      collectionId: this.props.collectionId, // listede görünecek collection id'si
      ops: this.props.ops, // collection listesi
    };
  
  }

  handleClickOutside = evt => { //listenin dışına tıklanırsa liste kapatılır
    this.setState({listOpen: false});
  };

  toggleList(){ //liste açkıksa kapatır, kaplıysa açar
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }
  
  onListItemClick(id, name) { //listedeki bir elemana tıklanma durumu
    let newCollectionId = this.props.newCollectionId;
    let newCollection = this.state.collection;
    let newOps = this.state.ops;

    if (id === this.state.collectionId) { //şu an seçili olan item'a tıklama durumu
      newCollectionId = -1; //listede görünecek olan collection id resetlenir
      newCollection = this.props.collection; //default collection ismi olan 'Collections' alınır
      newOps = this.state.ops.map((item) => { //listedeki tüm elemanlar unselected yapılır
        item.selected = false;
        return item;
      });
    }
    else { //şu an seçili olmayan item'a tıklama durumu
      newOps = this.state.ops.map((item) => { //tıklanan eleman listede selected olarak seçilir
        item.selected = (item.id === id);
        return item;
      });
      newCollection = name; //collection ismi ve id'si güncellenir
      newCollectionId = id;
    }

    this.setState({
      ops: newOps,
      collection: newCollection,
      collectionId: newCollectionId,
    });

    this.props.itemClicked(newCollectionId);
  }

  listOfSelect = () => {
    const list = this.state.ops.map((item, index) => {
      let selectedClass = "";
      if (item.selected) {
        selectedClass = "selected-item" //eleman selected ise eklenecek class ismi
      }
      // eslint-disable-next-line no-useless-concat
      return <li className={"col-name list-item" + ` ${selectedClass}`} key={item.id} value={item.id}  onClick={() => this.onListItemClick(item.id, item.name)}>{item.name}</li>
    });

    return <ul className="list">{list}</ul>
  }
  
  render() {
    return(
      <div className={"wrapper"}>
        <div className="shadow-div"></div>
        <div className={"col-name header-title" + (this.state.collectionId === -1 ? ` faded` : ``) + (this.state.listOpen ? ' list-open' : '')} onClick={() => this.toggleList()}>
          {this.state.collection}
                  <img className={"header-title-icon"} src={require("../resources/images/Polygon.png")} alt="😍" />
        </div>
        
        {this.state.listOpen && this.listOfSelect()}
      </div>
    );
  }
}

export default onClickOutside(List);