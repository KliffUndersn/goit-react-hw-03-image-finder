import React, { Component } from 'react'


export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown',this.closeModals)
     }
     
    closeModals = (e) => {
           if (e.code === "Escape") {
              this.props.modalSwitch();
            }
        
        }
        
    backDropClose = (e) => {
        if (e.target === e.currentTarget) {
           this.props.modalSwitch();
        }
        
     }
     componentWillUnmount() {
          window.removeEventListener('keydown',this.closeModals)
     }
     render(){
    return (
        <div className="Overlay">
        <div className="Modal">
            <img src={this.props.largeImage} alt={this.props.largeImage} onClick={()=>this.props.modalSwitch()}  />
        </div>
        </div>
    )}
}

