import { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
// 랜덤 색상을 생성
function getRamdomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component{
  state = {
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color:getRamdomColor()
    })
  }

  render(){
    return (
      <>
      <button onClick={this.handleClick}>랜덤 색상</button>
      <ErrorBoundary>
      <LifeCycleSample color={this.state.color}/>
      </ErrorBoundary>
      </>
    )
  }
}

export default App;
/* part 6
import { Component } from "react";
import IterationSample from "./ItereationSample";

class App extends Component{
  render(){
    return(
      <IterationSample/>
    )
  }
}

export default App;
/* part 5 ref scroll
import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render(){
    return(
      <div>
      <ScrollBox ref={(ref)=>this.ScrollBox=ref}/>

      <button onClick={()=>this.ScrollBox.scrollToBottom()}>아래로</button>
      <button onClick={()=>this.ScrollBox.scrollToTop()}>위로</button>
      </div> 
    )
  }
}

export default App;
/* part 5 ref
import { Component } from "react";
import ValidationSample from "./ValidationSample";

class App extends Component {
  render(){
    return(
      <ValidationSample/>
    )
  }
}

export default App;
/* part 4
import EventPractice from "./EventPractice";

const App = () => {
  return <EventPractice/>;
}

export default App;
/* part 3-2
import Say from "./Say";

const App = () =>{
  return <Say/>
}

export default App;
/* part 3-1
import Counter from "./Counter";

const App = () => {
  return <Counter/>
}
export default App;

/* part 2(리다기)
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent name="react" favoriteNumber={17}>리액트</MyComponent>;
};
*/
