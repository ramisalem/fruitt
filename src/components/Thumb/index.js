import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const Thumb = props => {
  return (
  
      <img className="img" src={props.src} alt={props.alt} title={props.title} />
   
  );
};

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Thumb;
