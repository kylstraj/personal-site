import React from 'react';
import MenuIcon from './MenuIcon';
import MenuList from './MenuList';

class Menu extends React.Component {
  state = {
    listVisible: false,
  };

  toggleListVisible() {
    this.setState({listVisible: !this.state.listVisible});
  }

  render() {
    return (
      <div id="menu">
        <MenuIcon clickHandler={() => this.toggleListVisible()}/>
        <MenuList 
          visible={this.state.listVisible}
        />
      </div>
    );
  }
};

export default Menu;
