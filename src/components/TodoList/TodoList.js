import React from 'react';

// eslint-disable-next-line arrow-body-style
export const TodoList = () => {
  return (
    <ul className="todo-list">
      <li>
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label>123</label>
          <button type="button" className="destroy" />
        </div>
        <input type="text" className="edit" />
      </li>

      <li className="completed">
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label>qwertyuio</label>
          <button type="button" className="destroy" />
        </div>
        <input type="text" className="edit" />
      </li>

      <li className="editing">
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label>zxcvbnm</label>
          <button type="button" className="destroy" />
        </div>
        <input type="text" className="edit" />
      </li>

      <li>
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label>1234567890</label>
          <button type="button" className="destroy" />
        </div>
        <input type="text" className="edit" />
      </li>
    </ul>
  );
};
// TodoList.propTypes = {};
// import PropTypes from 'prop-types';
