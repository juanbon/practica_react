import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Button} from 'react-bootstrap';

class App extends Component {

  constructor(){
    super();

    this.state = {
      nombres:[]
    }

    axios.get("http://localhost:3001/nombres")
    .then(response=>{

      // console.log(response.data);

      this.setState({
        nombres:response.data
      })
    
    
    })
    .catch(error=>{
      console.log(error);
    })



  }

  render() {
    return (
      <div className="App">test de pruebaa
        <Button bsStyle="primary">Pridasdjklahj</Button>

        <ul>
          {this.state.nombres.map((a,b) => <li>{a}</li>)}
        </ul>


      </div>
    );
  }
}

export default App;
