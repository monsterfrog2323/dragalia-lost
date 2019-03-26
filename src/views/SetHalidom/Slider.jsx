// @flow

import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";

const propTypes = {
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

const defaultProps = {
  max: 30,
};


class Slider extends React.PureComponent {
  render() {
    const {
      level,
      max,
      onChange,
    } = this.props;
    return (
      <input
        className="slider"
        type="range"
        min="0" max={max} step="1"
        value={level}
        onChange={onChange}
      />
    );
  }
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;