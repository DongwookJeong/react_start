import { Component } from "react";

class Counter extends Component{
    state = {
        number: 0,
        fixedNumber: 0
    }
    render(){
        const {number, fixedNumber} = this.state; //* state를 조회할 때는 this.state로 조회
        return (
            <>
            <h1>{number}</h1>
            <h2>고정 숫자: {fixedNumber}</h2>
            <button
            //! onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
            onClick={()=>{
                //! this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
                this.setState(prevState => {
                    return {
                        number: prevState.number + 1
                    }
                });
                //? 위 코드와 아래 코드는 같은 기능을 한다.
                //? 아래 코드는 함수에서 바로 객체를 반환한다는 의미
                //? 화살표 함수에서 값을 바로 반환하고 싶다면 코드 블록{}을 생략하면 된다.
                //? onClick에서 두 번재로 this.setState함수를 사용할 때는 화살표 함수에서 바로 객체로 반환하도록 했기 때문에 prevState => ({}) 형태
                this.setState(prevState => ({
                    number: prevState.number +1
                }))
            }}
            >
                +1
            </button>
            </>
        )
    }
}

export default Counter;