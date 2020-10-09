import React, { Component } from "react";
import "./style.css";
import api from "./api";


class Personagem extends Component{
  render(){
    return(

    
        <p style={{color: this.props.color}}> {this.props.text}</p>
    

    );
  }
}

class App extends Component{
  
 state = {
    personagens: [],
  }

  async componentDidMount() {
    const response = await api.get('');

   this.setState({ personagens: response.data.results });
  }

  removeItem(e) {
    var array = [...this.state.personagens];  
    var index = array.indexOf(e);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({personagens: array});

    }
  }

  removeAllItens() {
    var array = [];  
      this.setState({personagens: array});    
  }


  render() {
     const { personagens } = this.state;
   

    return(
      <div>
     <div>
        <h1>Listar de Personagens</h1>

       
        {personagens.map(personagem => (
        
           <button type="button" onClick={() => { this.removeItem(personagem)}}>

          <Personagem text={personagem.name} color={personagem.eye_color}/>
           </button>
        

        ))}
        

      </div>

       <button type="button" onClick={() => { this.removeAllItens()}}> Remover Todos os Personagens
         </button>

      </div>
       
       
    );
    
  }
};

export default App;
