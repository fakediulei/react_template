import React from 'react';
import ReactDOM from 'react-dom';
require("./style.scss");

class Hello extends React.Component{
	render(){
		return (
			<h1 className="hello">{this.props.text}</h1>
		);
	}
}
class App extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		
		
	}
	render(){
		return (
			<div>
				<Hello text="jack1"/>
				<Hello text="jack2"/>
				<Hello text="jack3"/>
			</div>	
		);
	}
}
export default App;
