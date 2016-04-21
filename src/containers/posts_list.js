/**
 * React Component - posts_list.js created on 20/04/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPosts} from '../redux/actions/action_posts'

class PostsList extends Component {

  componentWillMount() {
    //componentWillMount es6 alternative for constructor
    //https://babeljs.io/blog/2015/06/07/react-on-es6-plus
    this.props.getPosts();
  }

  render() {
    return (
      <div className="col-md-12 col-sm-10">
        <h3>TrendPaper - What's Trending in the World</h3>
        <div className="row">
          <div className="col-xs-12">
            <h4>
              <a href="#" className="text-muted">Read More</a>
            </h4>
          </div>
        </div>
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
  return bindActionCreators({getPosts}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsList);
