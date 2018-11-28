import React from "react";
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();


  goToStore = (event) => {
   event.preventDefault();
   //gets input
   const storeName = this.myInput.value.value;
   //changes route 
   this.props.history.push(`/store/${storeName}`)
  }
  
  render() {
    return (
        <form className="store-selector" onSubmit={this.goToStore} >
          <h2>Please Enter Store</h2>
          <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
          <button type="submit">Vist Store</button>
        </form>
    );
  }
}

export default StorePicker;
