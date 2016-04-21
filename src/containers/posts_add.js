/**
 * React Component - created on 21/04/16.
 */
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class PostsAdd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {fields: {title, content, categories}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
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


PostsAdd = reduxForm({
  form: 'PostsAddForm',
  fields: ['title', 'content', 'categories']
})(PostsAdd);

export default PostsAdd;
