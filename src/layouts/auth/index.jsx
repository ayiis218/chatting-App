import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const layout = ({ children }) => {
   return (
      <main className="layout">
         <div className="children">{children}</div>
      </main>
   );
};

export default layout;

layout.PropTypes = {
   children: PropTypes.element,
};
