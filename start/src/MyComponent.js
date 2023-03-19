const MyComponent = props => {
    return (
    <div>
        지금은 {props.name}을 공부중입니다. <br/>
        children 값은 {props.children}입니다.
    </div>
    );
};

MyComponent.defaultProps = {
    name : '삶'
};

export default MyComponent;