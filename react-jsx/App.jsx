import React from 'react';
import ReactDOM from 'react-dom';
require("../scss/style.scss");

class C1 extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}
	componentDidMount(){
	}
	handleClick(){
		
	}
	render(){
		return (
			<div>hello react</div>
		);
	}
}
class App extends React.Component{
		render(){
			
			return (
				<C1 />
			);
		}
}
export default App;
