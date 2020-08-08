import {ToyReact, Component} from "./ToyReact.js"

// let a = <MyComponent name="a"/>


// let a = <div name="a" id="ida">
// 		<span>hello</span>
// 		<span>world</span>
// 		<span>!</span>
// 	</div>
// console.log(a)
// document.body.appendChild(a)


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
// let a = <MyComponent name="a" id="ida"></MyComponent>
let a = <MyComponent name="a" id="ida">
		<span>hello </span>
		<span>myWorld</span>
		<span>!</span>
		<div>123</div>
		<span>1234</span>
	</MyComponent>
// console.log(a)
ToyReact.render(
	a,
	document.body
);