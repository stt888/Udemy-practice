import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrap,
    SearchInfo,
    SearchTitle,
    SearchSwitch,
    SearchInfoList,
    SearchInfoItem,
    SearchItem,
    Addition,
    Button
} from './style';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';


class Header extends Component {
        getListArea = () => {
            const {focused, mouseEnter, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleNextPage} = this.props;
            const newList = list.toJS();
            const pageList = [];
            if(newList.length){
                for(let i=(page-1)*10; i<page*10; i++){
                    // console.log(newList[i]);
                    pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
                }
            }

            if(focused||mouseEnter){
                return(
                    <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <SearchTitle>
                                    popular search
                                    <SearchSwitch onClick={()=>handleNextPage(page, totalPage, this.spinIcon)}>
                                        <i ref={(icon)=>{this.spinIcon=icon}} className="icon iconfont spin">&#xe851;</i>
                                        switch others</SearchSwitch>
                                </SearchTitle>
                                <SearchInfoList>
                                    {/* {list.map((item)=>
                                        <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                    )} */}
                                    {pageList}
                                </SearchInfoList>
                            </SearchInfo>
                )
            }else{
                return null;
            }
        }
    render(){
        const {focused, handleFocus, handleBlur, list, loginStatus, changeLogin} = this.props;
        // console.log(loginStatus);
        return (
            <HeaderWrapper>

                <Link to="/">
                    <Logo />
                </Link>

                <Nav>
                    <Link to="/"><NavItem className='left active' > Home</NavItem></Link>
                    <a href='https://www.udemy.com/mobile/'><NavItem className='left' > Download-App</NavItem></a>

                    {loginStatus? <NavItem className='right' onClick={()=>changeLogin(loginStatus)}> Logout</NavItem>:
                    <Link to="/login">
                        <NavItem className='right' > Login</NavItem>
                    </Link>
                    }
                    
                    {/* <NavItem className='right'> 
                        <span className="iconfont">&#xe636;</span>
                    </NavItem> */}
                    <SearchWrap>
                        <CSSTransition in={focused} timeout={200} classNames="slide">
                            <SearchItem 
                            className={focused?'focused':''}
                            onFocus = {()=>{handleFocus(list)}}
                            onBlur = {handleBlur}
                            ></SearchItem>
                        </CSSTransition>
                        <span className={focused?"iconfont zoom focused":'iconfont zoom'}>&#xe62d;</span>
                        {this.getListArea(focused)}
                    </SearchWrap>
                </Nav>

                <Addition>
                    <a href='https://www.udemy.com/teaching/?ref=teach_header'>
                        <Button className='teach'>
                            <span className="iconfont">&#xe642;</span>
                            Teach on Udemy
                        </Button>
                    </a>
                    {loginStatus? <Button className='reg' onClick={()=>changeLogin(loginStatus)}>Register</Button>:
                    <Link to="/register">
                        <Button className='reg'>Register</Button>
                    </Link>
                    }                    
                </Addition>

            </HeaderWrapper>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
        // focused: state.get('header').get('focused'),
        focused: state.getIn(['header','focused']),
        list : state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseEnter: state.getIn(['header', 'mouseEnter']),
        loginStatus: state.getIn(['login', 'loginStatus'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleFocus(list){
            if(list.size===0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleBlur () {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleNextPage(page, totalPage, spin){
            let spinAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(spinAngle){
                spinAngle = parseInt(spinAngle, 10);
            }else{
                spinAngle = 0;
            }
            spin.style.transform = "rotate("+(spinAngle+360)+"deg)";
           
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        changeLogin(loginStatus){
            dispatch(loginActionCreators.changeLogin(loginStatus))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);