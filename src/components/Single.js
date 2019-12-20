import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        const { match, posts } = this.props;
        const id = Number(match.params.id);
        const post = posts.post.find((post) => post.id === id);
        const comments = this.props.comments[match.params.id] || [];
        const index = this.props.posts.post.findIndex((post) => post.id === id);
        if (this.props.loading === true) {
            return <div className="loader"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>
        } else if(post) {
            return (
                <div className='single-photo'>
                    <Photo post={post} {...this.props} index={index} />
                    <Comments addComment={this.props.startAddingComment} comments={comments} id={id} />
                </div>

            )
        } else{
            return <h2>Oop Wrong page :`( </h2>
        }
    }
}

export default Single;