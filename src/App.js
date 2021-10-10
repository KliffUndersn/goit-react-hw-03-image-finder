import React, { Component , createRef} from 'react'
import SearchBar from "./components/SearchBar";
import getPosts from "./components/Fetch/Fetch"
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';

export default class App extends Component {

  state = {
    searchQuerry:"",
    searchResult: [],
    page:1,
    loading:false,
    modal:false,
    largeImage:"",
  }
  galleryList = createRef()
  componentDidUpdate(_, prevState, snapshot) {
    
    const searchQuerry = this.state.searchQuerry
    const prevResult = prevState.searchQuerry
    const page = this.state.page
    const prevPage = prevState.page
    if (searchQuerry !== prevResult){ this.setState({page:1,searchResult:[]})}
    if (searchQuerry !== prevResult || page !== prevPage) {
    this.setState({loading:true})
    getPosts(page,12,searchQuerry).then(data=>(data.data.hits)).then(data=>setTimeout(() => {this.setState((prevState)=>{return{searchResult:[...prevState.searchResult,...data],loading:false}})}, 1000))
    
     } 

     if(snapshot){
         window.scrollTo({
             top: snapshot,
             behavior: "smooth"
         });
     }    
    }
  loadMore = () => {
    
    this.setState((prevState)=>{return {page:prevState.page +1}})
  }

  searchQuerry = (querry) => {
    this.setState({searchQuerry:querry})
  }
  modalOpen = (img) => {
    this.setState({largeImage:img})
    this.setState({modal:true})
  }
  modalSwitch = () => {
    this.setState({modal:false})
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    if(prevState.searchResult.length < this.state.searchResult.length) {
        // const current = document.getElementById("post-searchResult")
        // return current.scrollHeight
        const {current} = this.galleryList;
        return current.scrollHeight;
    }
    return null;
}




  render() {
    const {largeImage,searchResult,searchQuerry,loading,modal} = this.state
    return (
      <div>
        <SearchBar submit={this.searchQuerry}/>
        <ImageGallery data={searchResult} img={this.modalOpen} galleryList={this.galleryList}/>
        {searchQuerry && <Button clicker={this.loadMore}/>}
        {loading && <Loader/>}
        {modal && <Modal largeImage={largeImage} modalSwitch={this.modalSwitch}/>}
      </div>
    )
  }
}



