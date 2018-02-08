// Code ThemedDecoration Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class ThemedDecoration extends React.Component {
  render (){
    const divWrapper = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
          className: this.props.theme
        })
      });
    return (
      <div>
        {divWrapper}
      </div>
    )
  }
}
