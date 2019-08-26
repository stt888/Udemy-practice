import React, {PureComponent} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreator} from '../store';
import {Link} from 'react-router-dom';


 class List extends PureComponent{
    render(){
        const {list, getMoreList, page} = this.props;
        return (
            <div>
                {list.map((item, index)=>(
                    // {`${process.env.PUBLIC_URL}/register`}
                    <Link to={`${process.env.PUBLIC_URL}/detail/${item.get('id')}`} key={index}>
                        <ListItem>
                            <img 
                            className='pic'
                            src={item.get('imgUrl')} alt='AAA' />
                            <ListInfo>
                                <h1 className='title'>{item.get('title')}</h1>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                ))}
                <LoadMore onClick={()=>getMoreList(page)}>Load More</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'list']),
        page: state.getIn(['home', 'listPage'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreator.getMoreList(page));
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(List)