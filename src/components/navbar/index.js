import React from 'react';
import * as Props from './props';

const Navbar = (props) => {
  const { title } = props;
  return (
    <div className="p-4">
      <h1 className="text-center text-white">{title}</h1>
    </div>
  );
};

Navbar.propTypes = Props.propTypes;
Navbar.defaultProps = Props.defaultProps;

export default Navbar;