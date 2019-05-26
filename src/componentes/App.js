import React, { Component } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Listado from "./Listado";
import ControlPresupuesto from "./ControlPresupuesto";
import { validarPresupuesto } from "../helper";
import "../css/App.css";

class App extends Component {
  state = {
    presupuesto: "",
    restante: "",
    gastos: {}
  };

  agregarGasto = gasto => {
    const gastos = { ...this.state.gastos };
    // Id para cada gasto
    gastos[`gasto${Date.now()}`] = gasto;
    this.restarPresupuesto(gasto.cantidadGasto);
    this.setState({ gastos });
  };

  restarPresupuesto = cantidad => {
    let restar = Number(cantidad);
    let { restante } = this.state;
    restante -= restar;
    this.setState( { restante });
  };

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt("¿Cual es tu presupuesto?");
    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        presupuesto,
        restante: presupuesto
      });
    } else {
      this.obtenerPresupuesto();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="App container">
          <Header titulo="Gasto Semanal" />
          <div className="contenido-principal contenido">
            <div className="row">
              <div className="one-half column">
                <Formulario agregarGasto={this.agregarGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={this.state.gastos} />
                <ControlPresupuesto
                  presupuesto={this.state.presupuesto}
                  restante={this.state.restante}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
