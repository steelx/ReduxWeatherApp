/**
 * React Component - posts_list.js created on 20/04/16.
 */
import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchPosts} from '../redux/actions/action_fetch_posts'

class PostsList extends Component {

  componentWillMount() {
    //componentWillMount es6 alternative for constructor
    //https://babeljs.io/blog/2015/06/07/react-on-es6-plus
    this.props.getPosts();
  }


  renderPostRow(post) {
    return (
      <div className="col-md-12 col-sm-10" key={post.id}>
        <h3>{post.title}</h3>
        <div className="row">
          <div className="col-xs-12">
            <h4>
              <Link to={`/posts/${post.id}`} className="text-muted">Read More</Link>
            </h4>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {_.map(this.props.posts, (post) => this.renderPostRow(post))}
      </div>
    );
  }
}

function mapStateToProps({posts}) {
  //Whatever gets returned from here
  //will show up as props inside BookList
  return {
    posts
  };
}

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called the result will be passed
  //to all reducers
  // return bindActionCreators({getPosts}, dispatch);
  let getPosts = () => {
    dispatch(fetchPosts())
  };
  return { getPosts };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
