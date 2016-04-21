/**
 * React Component - created on 21/04/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class PostsAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>Add new</div>
        );
    }
}


function mapStateToProps(state) {
    //Whatever gets returned from here
    //will show up as props inside BookList
    return {
        books: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called the result will be passed
    //to all reducers
    return bindActionCreators({actionName: ACTION_NAME}, dispatch);//import action first
}

//Pramote BookList from a component to a container - as it needs to know
// dispatch and state methods available as props
export default connect(null, null)(PostsAdd);
