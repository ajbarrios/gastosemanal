import React, { Component } from "react";
import PropTypes from "prop-types";
import { revisarPresupuesto } from "../helper";
class Restante extends Component {
  render() {
    const { presupuesto, restante } = this.props;
    return (
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: € {this.props.restante}
      </div>
    );
  }
}

Restante.propTypes = {
  presupuesto: PropTypes.string.isRequired,
  restante: PropTypes.string.isRequired
};

export default Restante;
