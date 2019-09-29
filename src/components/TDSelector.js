import React from "react";
import PropTypes from "prop-types";

import "./TDSelector.css";
import { TD_LIST, areaList } from "../common/td_list";

const AREA = areaList(TD_LIST);

class TDSelector extends React.Component {
  static get propTypes() {
    return {
      onSelectTD: PropTypes.func
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      areaSelection: undefined
    };
  }

  handleOnSelectChange = event => {
    const area = event.target.value;
    this.setState({ areaSelection: area });
    this.props.onSelectTD(TD_LIST.filter(td => td.area === area));
  };

  getOption(a) {
    return <option value={a}>{a}</option>;
  }

  render() {
    return (
      <select
        name="area"
        className="td-selector"
        onChange={this.handleOnSelectChange}
        value={this.state.areaSelection}
      >
        <option value="">-----</option>
        {AREA.map(a => this.getOption(a))}
      </select>
    );
  }
}

export default TDSelector;
