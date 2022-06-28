import React, { Component } from "react"
import './App.scss'
import DivClickable from "./components/DivClickable";
import ClockFunction from "./components/Clock"

class App extends Component {

	convertMonth = (months, monthNum) => {
		return (months[monthNum])
	}

	render() {
		const appDate = new Date()
		const appDay = appDate.getDate()
		const appMonth = appDate.getMonth()
		const appYear = appDate.getFullYear()
		const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',]
		return (
			<div className="app-wrapper">
				<h1>Задачи на {appDay} {this.convertMonth(months, appMonth)} {appYear}</h1>
				<ClockFunction />
				<DivClickable />
			</div>
		)
	}


}

export default App;
