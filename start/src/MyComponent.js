import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name : '기본 이름'
    };
    static propTypes = {
        name : PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }
    render(){
        const {name, favoriteNumber, Children} = this.props;
        return (
            <>
            안녕하세요, 제 이름은 {name}입니다. <br/>
            children 값은 {Children}입니다. <br/>
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </>
        )
    }
}

export default MyComponent;
