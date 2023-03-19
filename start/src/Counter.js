import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        //! state의 초기값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0
        }
    }
    //? 컴포넌트의 생성자 메서드, 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해주어야 한다.
    //? 컴포넌트의 State는 객체 형식이어야 한다.

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
                this.setState({number: number+1});
            }}
            >
                +1
            </button>
            </>
        )
    }
}

export default Counter;