/**
 * React Component - created on 27/04/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {githubSendCode} from '../../redux/actions/action_github_signin';

class GithubToken extends Component {

  componentWillMount(){
    this.props.sendGithubCode(this.props.code);
  }

  render() {
    return (
      <div>
        token: {this.props.token} <br/>
        auth: {this.props.authenticated ? 'true' : 'false'}
      </div>
    );
  }
}


function mapStateToProps(state) {
  //Whatever gets returned from here
  //will show up as props inside BookList
  return {
    token: state.auth.token,
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called the result will be passed
  //to all reducers, since we are using redux-thunk
  //no need of bindActionCreators
  //import {fetchPosts} from '../actions/action'
  let sendGithubCode = (code) => {
    dispatch(githubSendCode(code))
  };
  return {sendGithubCode};
}

//Pramote BookList from a component to a container - as it needs to know
// dispatch and state methods available as props
export default connect(mapStateToProps, mapDispatchToProps)(GithubToken);
