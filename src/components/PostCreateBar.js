import React from 'react'

function PostCreateBar({ createPost }) {
    const [value, setValue] = React.useState('')

    const handleSubmit = (e) => {
        // Prevents submit form from resetting
        e.preventDefault()
        if (!value) return
        createPost(value)
        setValue('')
        // local storage option to be added soon
        // in order to save all posts after page refresh
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                placeholder="Share a new post"
                onChange={(e) => setValue(e.target.value)}
                aria-label="New post section"
            />
            <button className="SendOpt" type="submit">
                Send
            </button>
        </form>
    )
}

export default PostCreateBar
