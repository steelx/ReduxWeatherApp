/**
 * React Component - created on 22/04/16.
 */
import React, {Component} from 'react';
import _ from 'lodash';

class PostSingle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if( _.isEmpty(this.props.post) ){
      return (
        <div>
          Loading..
        </div>
      );
    }
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
}

export default PostSingle;
