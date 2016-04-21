/**
 * React Component - created on 21/04/16.
 */
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPosts} from '../redux/actions/action_create_posts';

class PostsAdd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {fields: {title, content, categories}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.addPosts)}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder="Title" {...title}/>
        </div>
        <div className="form-group">
          <label>Post content</label>
          <textarea className="form-control" {...content} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" placeholder="categories" {...categories}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  let addPosts = (props) => {
    dispatch(createPosts(props))
  };
  return { addPosts };
}

PostsAdd = reduxForm({
  form: 'PostsAddForm',
  fields: ['title', 'content', 'categories']
}, null, mapDispatchToProps)(PostsAdd);

export default PostsAdd;
