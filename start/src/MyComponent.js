import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <>
        지금은 {name}을 공부중입니다.<br/>
        children 값은 {children}입니다.
        <br/>
        좋아하는 숫자는 {favoriteNumber}이다.
        </>
    )
}

MyComponent.defaultProps = {
    name : '삶'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
}
export default MyComponent;
