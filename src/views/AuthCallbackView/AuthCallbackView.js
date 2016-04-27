/* @flow */
import React from 'react';

import GithubToken from '../../containers/auth/github_token'

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class LoginView extends React.Component {

  locationParams(url) {
    var regex = /[?&]([^=#]+)=([^&#]*)/g,
      url = url,
      params = {},
      match;
    while(match = regex.exec(url)) {
      params[match[1]] = match[2];
    }
    return params;
  }

  render() {
    const params = this.locationParams(window.location.href);
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-6'>
            <h3>Do not reload</h3>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <GithubToken code={params.code} />
          </div>
        </div>

      </div>
    )
  }
}

export default LoginView;
