import React from 'react';
import PropTypes from 'prop-types';

type LoadingProps = {
  text?: string;
};

const Loading: React.FC<LoadingProps> = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string
};

Loading.defaultProps = {
  text: 'Loading'
};

export default Loading;
