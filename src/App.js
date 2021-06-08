import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render () {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} /> {/* associa o criarNota com a instancia do app que foi criada a cima */}
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
  
}

export default App;
