const MyComponent = ({name, children}) => {
    return (
        <>
        지금은 {name}을 공부중입니다.<br/>
        children 값은 {children}입니다.
        </>
    )
}

MyComponent.defaultProps = {
    name : '삶'
};

export default MyComponent;