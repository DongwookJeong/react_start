const MyComponent = props => {
    const {name, children} = props;
    return (
    <div>
        지금은 {name}을 공부중입니다. <br/>
        children 값은 {children}입니다.
    </div>
    );
};

MyComponent.defaultProps = {
    name : '삶'
};

export default MyComponent;