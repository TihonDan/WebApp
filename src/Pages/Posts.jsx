import React, { Component, useEffect, useState } from 'react'
import { Card, Row, Col, Container, Pagination } from 'react-bootstrap'
import postService from '../Api/postService';
import Post from '../Components/Post'
import PostList from './PostList'
import P_agination from '../Components/P_agination'

export default function Posts(categry) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            const response = await postService.getAll();
            setPosts(response.data)
            setLoading(false);
        }

        fetchApi();
    }, []);

    const lastPostsIndex = currentPage * postPerPage;
    const firstPostsIndex = lastPostsIndex - postPerPage;
    const currentPost = posts.slice(firstPostsIndex, lastPostsIndex)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <PostList posts={currentPost} />
            <div className='d-flex justify-content-center'>
                <P_agination
                    postPerPage={postPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                />
            </div>
        </>
    )
}
