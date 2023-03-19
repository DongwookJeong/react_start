const MyComponent = props => {
    return <div>지금은 {props.name}을 공부중입니다.</div>
};

MyComponent.defaultProps = {
    name : '삶'
};

export default MyComponent;