import React, { Component } from "react";

class Gasto extends Component {
  render() {
    const { nombreGasto, cantidadGasto } = this.props.gasto;
    return (
      <li>
        <p>
          {nombreGasto}
          <span className="gasto"> € {cantidadGasto}</span>
        </p>
      </li>
    );
  }
}

export default Gasto;
