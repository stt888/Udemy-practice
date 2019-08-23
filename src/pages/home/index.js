import React, {PureComponent} from 'react';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style';
import banner from '../../static/banner.jpg'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {actionCreator} from './store';

class Home extends PureComponent{
    backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    render(){
        const {showScroll} = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img 
                    className = 'banner-img'
                    src={banner} alt="banner"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {showScroll ? <BackTop onClick={this.backToTop}>Top</BackTop> : null}                
            </HomeWrapper>
        )
    }

    componentDidMount=()=>{
        this.props.changeHomeData();
        this.bindEvent();
    }

    componentWillUnmount=()=>{
        window.removeEventListener('scroll', this.props.changeScrollTop);
    }

    bindEvent=()=>{
        window.addEventListener('scroll', this.props.changeScrollTop);
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({    
    changeHomeData(){
        dispatch(actionCreator.getHomeInfo())
    },
    changeScrollTop(){
        // console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreator.changeScrollTop(true))
        }else{
            dispatch(actionCreator.changeScrollTop(false))
        }
        
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);