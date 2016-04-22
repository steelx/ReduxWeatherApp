/**
 * React Component - created on 21/04/16.
 */
import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPosts} from '../redux/actions/action_create_posts';
import {Link} from 'react-router';

class PostsAdd extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    const p = new Promise((resolve, reject) => {
      resolve(this.props.addPosts(props));
    });
    p.then(() => {
      this.context.router.push('/posts');
    });
  }

  render() {
    const {fields: {title, content, categories}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className={`form-control ${title.touched && title.invalid ? 'has-error' : '' }`}
                 placeholder="Title" {...title}/>

          <span className="text-help">
            {title.touched ? title.error : ''}
          </span>
        </div>
        <div className="form-group">
          <label>Post content</label>
          <textarea className={`form-control ${content.touched && content.invalid ? 'has-error' : '' }`} {...content} />

          <span className="text-help">
            {content.touched ? content.error : ''}
          </span>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className={`form-control ${categories.touched && categories.invalid ? 'has-error' : '' }`}
                 placeholder="categories" {...categories}/>

          <span className="text-help">
            {categories.touched ? categories.error : ''}
          </span>
        </div>
        <button type="submit" className='btn btn-primary'>Submit</button>
        <Link to="/posts" className='btn btn-danger'>Cancel</Link>
      </form>
    );
  }
}

function validation(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }

  return errors;
}

function mapDispatchToProps(dispatch) {
  let addPosts = (props) => {
    dispatch(createPosts(props))
  };
  return {addPosts};
}

PostsAdd = reduxForm({
  form: 'PostsAddForm',
  fields: ['title', 'content', 'categories'],
  validate: validation
}, null, mapDispatchToProps)(PostsAdd);

export default PostsAdd;
