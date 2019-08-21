import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {WriterWrapper, Instructors, WriterItem, WriterInfo, CheckAll} from '../style';


class Writer extends PureComponent{
    render(){
        const {insList} = this.props;
        return (
            <WriterWrapper>
                <Instructors>Popular Instructors</Instructors>
                {
                    insList.map((item) => (
                        <WriterItem key={item.get('id')}>
                            <img className='insPic' src={item.get('imgUrl')} alt=''/>
                            <WriterInfo>
                                <div className='name'>{item.get('name')}</div>
                                <div className='content'>{item.get('content')}</div>
                            </WriterInfo>
                            <div className='follow'>Follow</div>
                        </WriterItem>
                    ))
                }
                <CheckAll>Find more Instructors</CheckAll>
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        insList: state.getIn(['home', 'instructorList'])
    }
}

export default connect(mapStateToProps, null)(Writer);