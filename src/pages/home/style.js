import styled from 'styled-components';


export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 20px;
    .banner-img {
        display: block;
        width:625px;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    font-size: 14px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    cursor: pointer;
    .topic-pic {
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
       
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 145px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;
export const ListInfo = styled.div`
    width: 465px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        cursor: pointer;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const RecommendWrapper = styled.div`
    margin: 20px 0;
    width: 280px;
`;
export const RecommendItem = styled.div`
    .recpic {
        width: 280px;
        height: 50px;  
    }  
    cursor: pointer;  
`;

export const WriterWrapper = styled.div`
    background: #f7f7f7;
    padding: 8px 8px;
    position: relative;
`;


export const Instructors = styled.div`
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;

`;

export const WriterItem = styled.div`
    margin-top: 20px;
    .insPic {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        display: block;
        cursor: pointer;
        border-radius: 50%;
    }
    .follow {
        float: right;
        margin-left: 15px;
        font-size: 13px;
        color: #42c02e;
        cursor: pointer;
    }
    overflow: hidden;
`;

export const WriterInfo = styled.div`
    width: 230px;
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
    }
    .content {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
    cursor: pointer;
`;

export const CheckAll = styled.a`
    position: absolute;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    text-align: center;
    line-height: 1.6;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    display: block;
    margin-top: 20px;
    box-sizing: border-box;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    background: #f7f7f7;
`;