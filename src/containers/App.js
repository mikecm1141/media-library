import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        {
          this.props.children
        }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};
