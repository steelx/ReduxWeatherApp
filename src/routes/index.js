import React from 'react';
import {Route, IndexRoute} from 'react-router';

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import HomeView from 'views/HomeView/HomeView';
import BlogView from 'views/BlogView/BlogView';
import PostsAddView from 'views/PostsAddView/PostsAddView';
import PostsSingleView from 'views/PostsSingleView/PostsSingleView';
import LoginView from 'views/LoginView/LoginView';

export default (store) => {

  return (
    <Route path='/' component={CoreLayout}>
      <IndexRoute component={HomeView}/>
      <Route path='signin' component={LoginView} />
      <Route path='posts' component={BlogView} />
      <Route path='posts/add' component={PostsAddView}/>
      <Route path='posts/:id' component={PostsSingleView}/>
    </Route>
  );
}
