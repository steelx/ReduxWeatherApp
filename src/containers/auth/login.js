/**
 * React Component - created on 27/04/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {githubGeturi} from '../../redux/actions/action_github_signin';

class Login extends Component {
  componentWillMount(){
    this.props.getUrl();
  }

  runOnClick() {
    window.location.href(this.props.url);
  }

  render() {
    console.log(this.props.url);
    return (
      <a href={this.props.url} target="_parent">Github Login</a>
    );
  }
}

function mapStateToProps(state) {
  return {
    url: state.auth.url
  };
}

function mapDispatchToProps(dispatch) {
  let getUrl = () => {
    dispatch(githubGeturi())
  };
  return { getUrl };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
