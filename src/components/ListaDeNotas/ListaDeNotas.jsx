import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./style.css";

class ListaDeNotas extends Component {

    constructor(props) { //isso é feito autom. por tras dos panos
        super(props)
    }

    render () {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => { //map percorre cada elemento atribuindo uma nota - index vai atribuir um identificador unico pra cada li
                    return (
                        <li className="lista-notas-item" key={index}>
                            <CardNota titulo={nota.titulo} texto={nota.texto}/>
                        </li>
                    );
                })}            
            </ul>
        );
    }
}

export default ListaDeNotas;