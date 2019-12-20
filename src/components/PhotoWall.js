import React from 'react'
import Photo from './Photo';
import { Link } from 'react-router-dom';

function PhotoWall(props) {
    return (
        <div>
            <h1>PhotoWall</h1>
            <Link className="add-btn" to="/AddPhoto"></Link>
            <div className="photo-grid">
                {
                    props.posts.post.sort((x, y) => y.id - x.id).map((post, index) => <Photo key={index} post={post} {...props} index={index} />)
                }
            </div>
        </div>
    )
}



export default PhotoWall;
