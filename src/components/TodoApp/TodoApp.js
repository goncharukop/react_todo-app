import React, { useState } from 'react';
import { TodoList } from '../TodoList/TodoList';

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');

  const addNewTodo = (event) => {
    const title = event.target.value.trim();
    let NewTodo = {};

    if (event.key === 'Enter' && title) {
      NewTodo = {
        title,
        id: +new Date(),
        completed: false,
      };

      setTodos(todos.concat(NewTodo));
      setTodoTitle('');
      // // eslint-disable-next-line no-console
      // console.log(todos);
    }
  };

  const handleChange = (event) => {
    const title = event.target.value;

    setTodoTitle(title);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <form>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            value={todoTitle}
            onChange={handleChange}
            onKeyDown={addNewTodo}
          />
        </form>
      </header>

      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList items={todos} />
      </section>

      <footer className="footer">
        <span className="todo-count">
          {`${todos.length} items left`}
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>

          <li>
            <a href="#/active">Active</a>
          </li>

          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>

        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
};
