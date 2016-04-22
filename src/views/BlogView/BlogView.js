/* @flow */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classes from './BlogView.scss';

import PostsList from '../../containers/posts_list'

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class BlogView extends React.Component {

  render() {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-6'>
            <h3 className={classes.counter}>BlogView</h3>
          </div>
          <div className='col-md-2'>
            <Link to="/posts/add" className={classes.PostsAddBtn + ' btn btn-primary'}>Add New Post</Link>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <PostsList />
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});
export default connect(mapStateToProps)(BlogView)
