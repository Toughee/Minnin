import React from 'react'

function YourPost({ post }) {
    return (
        <div className="YourPostStyle row">
            <span className="col">
                <p className="PostStyle">{post.text}</p>
                <p>
                    <span className="personalIdStyle">🧔You </span>
                    <button className="LikeStyle">0 ❤️</button>
                </p>
            </span>
        </div>
    )
}

export default YourPost
