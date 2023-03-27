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
