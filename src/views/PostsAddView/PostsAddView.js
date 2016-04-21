/* @flow */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PostsAdd from '../../containers/posts_add';
import classes from './PostsAddView.scss';

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
class PostsAddView extends React.Component {

  render() {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-2'>
            <h3 className={classes.counter}>PostsAddView</h3>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 col-md-offset-2'>
            <PostsAdd />
          </div>
        </div>

      </div>
    )
  }
}

export default PostsAddView;
