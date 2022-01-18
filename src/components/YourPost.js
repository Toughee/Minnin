import React from 'react'
import { FaHeart, FaTrash, FaEdit } from 'react-icons/fa'

function YourPost({ id, post, deletePost }) {
    return (
        <div className="YourPostStyle row">
            <span className="col">
                <p className="PostStyle">{post.text}</p>
                <p>
                    <span className="personalIdStyle">🧔You </span>
                    {/* option for liking content that shows up in the dashboard
                    <button
                    
                    
                    /onClick={() => LikeCount(LikeCount)} 
                    
                    className="LikeStyle">0 <FaHeart></FaHeart></button> */}

                    {/*// option for editing posts you create
                     <button 
                        onClick={() => editPost(id)}
                    className="LikeStyle">Edit <FaEdit></FaEdit></button> */}

                    <button
                        onClick={() => deletePost(id)}
                        className="LikeStyle"
                    >
                        <FaTrash></FaTrash>
                    </button>
                </p>
            </span>
        </div>
    )
}

export default YourPost
