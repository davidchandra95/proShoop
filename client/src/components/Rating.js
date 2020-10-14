import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value }) => {
  return (
    <div className="rating">
      <span>
        <i style={{ color: '#f8e825' }} className="fas fa-star"></i>
      </span>
      <span> {value}</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
