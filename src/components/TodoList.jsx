import AddTodo from './AddTodo'
import './TodoList.css'

const TodoList = () => (
	<div className="todo-list">
		<ul>
			<li> Tvätta fönstren  <button> Done </button> </li>
			<li className="done"> Plugga React </li>
		</ul>
		<AddTodo />
	</div>
)

export default TodoList
