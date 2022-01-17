import React from 'react'
import PostCreateBar from './PostCreateBar'
import YourPost from './YourPost'

function Dashboard() {
    const [posts, setPosts] = React.useState([])

    const createPost = (text) => {
        const newPost = [...posts, { text }]
        setPosts(newPost)
    }

    // delete your post
    // const deletePost

    //like post
    // const LikeOption
    //
    //
    //

    return (
        <div className="App">
            <h2 classname="PageTitle">Dashboard section</h2>
            <PostCreateBar createPost={createPost} />
            <div>
                {posts.map((post, id) => (
                    <YourPost key={id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard
