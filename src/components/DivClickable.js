import { Component } from "react"

export default class DivClickable extends Component {
	state = {
		inputValue: "",
		todos: [],
		disabledBtn: true
	}

	handlerDisabledBtn = () => {
		(this.state.todos.length === 0) ? this.setState(() => ({ disabledBtn: true })) : this.setState(() => ({ disabledBtn: false }))
	}

	handlerKeyUp = (event) => {
		if (event.key === 'Enter') {
			this.handlerAddTodo()
		}
	}

	idGenerator = () => {
		const id = String(Math.round(Math.random() * 1000000))
		return (id)
	}

	handlerInputValue = (event) => {
		this.setState({
			inputValue: event.target.value
		})
	}

	handlerAddTodo = () => {
		this.setState(() => ({
			todos: [...this.state.todos, { text: this.state.inputValue, id: this.idGenerator() }]
		}), () => { this.handlerDisabledBtn() })
		this.setState({ inputValue: "" })
	}

	handlerDone = (event) => {
		event.target.previousElementSibling.classList.toggle('done')
	}

	handlerDelTodo = (event) => {
		const txt = event.target.previousElementSibling.previousElementSibling.textContent
		const indx = this.state.todos.findIndex(todo => todo.text === txt)
		this.state.todos.splice(indx, 1)
		this.setState(() => ({ todos: this.state.todos }), () => { this.handlerDisabledBtn() })
	}

	handlerDelAllTodos = (event) => {
		this.setState(() => ({ todos: [] }), () => { this.handlerDisabledBtn() })
	}

	render() {
		return (
			<div className="f-col-ai-c">
				<div className="input-block">
					<input type="text" value={this.state.inputValue} onChange={this.handlerInputValue} onKeyPress={this.handlerKeyUp} placeholder="Запиши задачу..." />
					<button className="add-btn" onClick={(this.state.inputValue !== "") ? this.handlerAddTodo : null}>Добавить</button>
				</div>
				<ul className="todos-list">{
					this.state.todos.map((todo, index) => {
						return (<li className="todos-list__item" key={todo.id}>
							<span className="todos-list__num">{index + 1 + "."}</span>
							<span className="todos-list__todo">{todo.text}</span>
							<button className="done-btn" onClick={this.handlerDone}>Сделано</button>
							<span className="todos-list__btn" onClick={this.handlerDelTodo}>X</span>
						</li>)
					}
					)
				}
				</ul>
				<button className="del-all-btn" disabled={this.state.disabledBtn} onClick={this.handlerDelAllTodos}>Удалить все задачи</button>
			</div>
		)
	}
}