import React from 'react';

// eslint-disable-next-line arrow-body-style
export const TodoItem = () => {
  return (
    <li>
      <div className="view">
        <input type="checkbox" className="toggle" />
        <label>123</label>
        <button type="button" className="destroy" />
      </div>
      <input type="text" className="edit" />
    </li>
  );
};
// TodoItem.propTypes = {};
// import PropTypes from 'prop-types';
