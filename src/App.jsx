import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';
import PropTypes from 'prop-types';
var _ = document;

function App(props) {
	return(
			<main>
				<Header title={props.title} />

				<section className="todo-list">
					{todos.map(todo=> 
						<Todo key={todo.id} title={todo.title} completed={todo.completed} />)
					}
				</section>
			</main>
		);
}

App.propTypes = {
	title: PropTypes.string,
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})).isRequired
 };

App.defaultProps = {
	title: "React Todo"
};

ReactDOM.render(<App todos={todos} /> , _.getElementById('root'));

export default App;