import React, { Component } from 'react'

export default class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const imgLink = event.target.elements.link.value;
        const des = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: des,
            imageLink: imgLink
        }

        if (des && imgLink) {
            this.props.startAddingPost(post);
            this.props.onHistory.push('/');
        }
    }
    render() {
        return (
            <div>
                <h1>PhotoWall</h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}
