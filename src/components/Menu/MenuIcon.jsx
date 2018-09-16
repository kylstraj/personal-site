import React from 'react';
import PropTypes from 'prop-types';

class MenuIcon extends React.Component {
  state = {
    selected: false,
  }

  static propTypes = {
    clickHandler: PropTypes.func.isRequired,
  }

  render() {
    return (
      <span className={this.state.selected ? "menu-icon selected" : "menu-icon"}
        onClick={() => {
          this.props.clickHandler();
          this.setState({selected: !this.state.selected});
        }}>
        <div></div>
        <div></div>
        <div></div>
      </span>
    );
  }
};

export default MenuIcon;
