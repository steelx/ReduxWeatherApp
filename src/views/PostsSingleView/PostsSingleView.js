/* @flow */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PostSingle from '../../components/post_single';
import classes from './PostsSingleView.scss';
import {fetchPost} from '../../redux/actions/action_fetch_post';

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
class PostsSingleView extends Component {

  componentWillMount() {
    //componentWillMount es6 alternative for constructor
    //https://babeljs.io/blog/2015/06/07/react-on-es6-plus
    this.props.getPost(this.props.params.id);
  }

  render() {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-6'>
            <h3>PostsAddView {this.props.params.id}</h3>
          </div>
          <div className='col-md-2'>
            <Link to="/posts" className='btn btn-primary'>back</Link>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <PostSingle post={this.props.post} />
          </div>
        </div>

      </div>
    )
  }
}


function mapStateToProps({post}) {
  //Whatever gets returned from here
  //will show up as props inside BookList
  return {
    post
  };
}

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called the result will be passed
  //to all reducers
  // return bindActionCreators({getPosts}, dispatch);
  let getPost = (id) => {
    dispatch(fetchPost(id))
  };
  return { getPost };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsSingleView);
