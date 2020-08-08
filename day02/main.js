import {ToyReact, Component} from "./ToyReact.js"

class MyComponent extends Component{
	render(){
		return <div>
			<span>hello</span>
			<span>world!</span>
			<div>
				{true}
			</div>
			<div>
				{this.children}
			</div>
		</div>
	}
}

class Square extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}
	render() {
		return (
			// <button className="square" onClick={function() { alert('click'); }}>
			// 	{this.props.value}
			// </button>

			// <button className="square" onClick={() => this.setState({key: 'X'})}>
			// 	{this.state.value}
			// </button>

			<button className="square" onClick={() => this.setState({value: 'X'})}>
				{this.state.value ? this.state.value : " "}
			</button>
		);
	}
}

class Board extends Component {
	renderSquare(i) {
		return <Square value={i} />;
	}
	render() {
		return (
			<div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}



let a = <Board />
// let a = <MyComponent name="a" id="ida">
// 		<span>hello </span>
// 		<span>myWorld</span>
// 		<span>!</span>
// 		<div>123</div>
// 		<span>1234</span>
// 	</MyComponent>
// console.log(a)
ToyReact.render(
	a,
	document.body
);