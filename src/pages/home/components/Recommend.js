import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper, RecommendItem} from '../style';


class Recommend extends PureComponent{
    render(){
        const {recList} = this.props;
        return (
            <RecommendWrapper>
                {recList.map((item) => (
                    <RecommendItem key={item.get('id')}>
                        <img className='recpic' src = {item.get('imgUrl')} alt=''/>
                    </RecommendItem>
                ))}           
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recList: state.getIn(['home','recList'])
    }
}

export default connect(mapStateToProps, null)(Recommend);