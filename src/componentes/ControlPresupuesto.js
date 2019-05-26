import React, { Component } from "react";
import PropTypes from "prop-types";
import Presupuesto from "./Presupuesto";
import Restante from "./Restante";

class ControlPresupuesto extends Component {
  render() {
    const { presupuesto, restante } = this.props;
    return (
      <React.Fragment>
        <Presupuesto presupuesto={presupuesto} />
        <Restante presupuesto={presupuesto} restante={restante} />
      </React.Fragment>
    );
  }
}

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.string.isRequired,
  restante: PropTypes.string.isRequired,
};

export default ControlPresupuesto;
