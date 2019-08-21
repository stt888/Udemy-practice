import React, { PureComponent } from "react";
import { DetailWrapper, Title, Content } from "./style";
import { connect } from "react-redux";
import {actionCreators} from './store';
import {withRouter} from 'react-router-dom';

class Detail extends PureComponent {
  render() {
    // console.log(this.props.location.pathname);
    // const pathId = parseInt((this.props.location.pathname).replace(/[^0-9]/ig, ''));
    // console.log(pathId);

    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Title>{title}</Title>
        {/* <video style={{'overflow': 'hidden'}} tabindex="-1" src="https://a2.udemycdn.com/2018-03-08_20-09-30-1365492dea1831a772c3ed1dd9cf3b66/WebHD_720p.mp4?nva=20190820193717&amp;token=0d2b001d832d5c4b415b1"></video> */}

        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWrapper>
    );
  }

  componentDidMount = () => {
      const pathId = parseInt((this.props.location.pathname).replace(/[^0-9]/ig, ''));
      this.props.getDetail(pathId);
  }
}


const mapState = state => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
  };
};

const mapDispatch = (dispatch) => ({
    getDetail(pathId){
        dispatch(actionCreators.getDetail(pathId));
    }
});

export default connect(
    mapState,
    mapDispatch
)(withRouter(Detail));
