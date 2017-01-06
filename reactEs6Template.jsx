import React from 'react';
class Name extends React.Compoment{
	render(){
		return (
			<h1>{this.props.name}</h1>
		);
	}
}
class App extends React.Component{
	constructor(){
		super();
		{/*es6设置state的方法（外层es6注释）*/}
		this.state={
			name:'菜鸟教程',
			site:'http://www.baidu.com'
		};
	
}	
	static get defaultProps(){
		{/*es6设置默认props的方法*/}
		return {
			name:'jack'
		}
	}
	handleClick(){
		this.setState({liked:!this.state.liked});
	}
	render(){
		return(
			<Name name={this.state.name}/>
		);
	}
}
export default App;
