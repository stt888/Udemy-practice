import React, { PureComponent } from "react";
import { DetailWrapper, Title, Content } from "./style";
import { connect } from "react-redux";
import {actionCreators} from './store';
// import {withRouter} from 'react-router-dom';

class Detail extends PureComponent {
  render() {
    // console.log(this.props.location.pathname);
    // const pathId = parseInt((this.props.location.pathname).replace(/[^0-9]/ig, ''));
    // console.log(pathId);

    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Title>{title}</Title>
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

// export default connect(
//     mapState,
//     mapDispatch
// )(withRouter(Detail));
export default connect(
    mapState,
    mapDispatch
)(Detail);
