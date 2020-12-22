/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ item, handleCompleted }) => (
  <li
    className={item.completed ? 'completed' : ''}
  >
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        onChange={handleCompleted}
      />
      <label>{item.title}</label>
      <button
        type="button"
        className="destroy"
        // onClick={() => handleDelete()}
      />
    </div>
    <input type="text" className="edit" />
  </li>
);

TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleCompleted: PropTypes.func.isRequired,
};
