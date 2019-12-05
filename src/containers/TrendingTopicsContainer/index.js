import React, { Component } from 'react';
import TrendingTopics from '../../components/TrendingTopics'
import photo from '../../images/fake_avatar.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { getHashtags } from './actions';
import { bindActionCreators } from 'redux';


class TrendingTopicsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hashtags: []
    };
  }

  componentDidMount() {
    this.props.getHashtags();
  }

  render() {
    return (
      <div>
        <TrendingTopics hashtags={this.props.hashtags} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
   hashtags: state.trendings.hashtags
  }
};
 
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getHashtags }, dispatch)
}
 
 export default connect(mapStateToProps, mapDispatchToProps)(TrendingTopicsContainer)
