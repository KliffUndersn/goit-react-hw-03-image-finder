import React, { Component } from 'react'


export default class SearchBar extends Component {

    state = {
      searchInput:"",
      searchResult:[],
    }

    getSubmitValue = (e) => {
      e.preventDefault();
      this.props.submit(this.state.searchInput)
      this.setState({searchInput:""})
     
    }

      render () {
        return(
            <>

            <header className="Searchbar">
            <form className="SearchForm"
                onSubmit={this.getSubmitValue
                }
            >
              <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
              </button>
                  <input
                  className="SearchForm-input"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  onChange={(e)=>{return this.setState({searchInput:e.target.value})}}
                  value={this.state.searchInput}
                  />
              
            </form>
            </header>
            </>
        )}
          

}

