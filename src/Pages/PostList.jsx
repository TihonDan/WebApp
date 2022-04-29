import React from 'react'
import Post from '../Components/Post'

export default function PostList({ posts }) {

    return (
        <>
            {posts.map(post =>
                <Post key={post.id} post={post} />
            )}
        </>
    )
}



