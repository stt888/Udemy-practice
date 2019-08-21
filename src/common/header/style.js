import styled from 'styled-components';
import logoPic from '../../static/logo-coral.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;

export const Logo = styled.div`
    height: 32px;
    position: absolute;
    top: 10px;
    left: 26px;
    width: 86px;
    background: url(${logoPic});
    background-size: contain;
    vertical-align: middle;
    display: block;   
`;

export const Nav = styled.div`
    height: 100%;
    width: 77%;
    margin: 0 auto;
    padding-right: 150px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    cursor: pointer;
    &.left {float: left;}
    &.right {float: right; color: #969696;}
    &.active {color: #ea6f5a;}
`;

export const SearchWrap = styled.div `
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background-color: #999;
            color: white;
        }
    }
`;

export const SearchItem = styled.input.attrs({
    placeholder: 'search'
})`
    width: 160px;
    height: 38px;
    padding: 0 40px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {color: #999;}
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0, .2);
    background: #fff;
`;

export const SearchTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right:2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 2px;
    margin-right: 10px;
    margin-bottom: 10px;
    float: left;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
    
`;

export const Button = styled.button`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 18px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    cursor: pointer;
    box-sizing: border-box;
    &.reg {
        color: #ec6149;
        background-color: white;
    }
    &.teach {
        color: #fff;
        background-color: #ec6149;
    }
    .iconfont {
        margin-right:5px;
    }
`;

