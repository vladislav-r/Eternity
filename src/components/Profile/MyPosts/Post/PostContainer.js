
import {deletePost} from "../../../../redux/profileReducer";
import Post from "./Post";
import {Component, useState} from "react";
import {connect} from "react-redux";

class PostContainer extends Component {
    onDeletePost = (postId) => {
        this.props.deletePost(postId)
    }
    render() {
        return <Post onDeletePost={this.onDeletePost} {...this.props} deletePost={this.props.deletePost}/>

    }
}

export default connect(null, {deletePost})(PostContainer);