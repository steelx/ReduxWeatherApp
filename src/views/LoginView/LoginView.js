/* @flow */
import React from 'react';
// bootstrap theme
import { OAuthSignInButton } from "redux-auth/bootstrap-theme";

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class LoginView extends React.Component {

  render() {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-6'>
            <h3>Login</h3>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <OAuthSignInButton provider='github' />
          </div>
        </div>

      </div>
    )
  }
}

export default LoginView;
