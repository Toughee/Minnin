import React from 'react'
import PostCreateBar from './PostCreateBar'
import YourPost from './YourPost'

function Dashboard() {
    const [posts, setPosts] = React.useState([])

    const createPost = (text) => {
        const newPost = [...posts, { text }]
        setPosts(newPost)
    }

    const deletePost = (id) => {
        const newPost = [...posts]
        newPost.splice(id, 1)
        setPosts(newPost)
    }
    //
    //like post option
    //const LikeOption
    //
    //edit post option
    //const editPost
    //
    return (
        <div className="App">
            <h2 className="PageTitle">Dashboard section</h2>
            <PostCreateBar createPost={createPost} />
            <div>
                {posts.map((post, id) => (
                    <YourPost key={id} post={post} deletePost={deletePost} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard
