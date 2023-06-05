import React from 'react'
import {_roots, unmountComponentAtNode} from '@react-three/fiber'
import App from './App'

// This class is used to make sure that the user clicks on the page before sound starts playing
// THE WEB AUDIO API WILL NOT WORK UNLESS THE USER INTERACTS WITH THE PAGE FIRST

class ClickThrough extends React.Component {
  constructor(props) {
    super()
    this.state = {
      app: null,
      clicked: null,
    };
    this.Click = this.Click.bind(this)
  }

  Click() {
    this.setState({
        clicked: !this.state.clicked
    })
  }  

  render() {   
    if ( this.state.clicked ) {
        return (
          <App></App>
        )
    } else return (
      <div id="container">
        <button className="btn" onClick={this.Click}>View</button>
      </div>
    );
  }
}

export default ClickThrough;
