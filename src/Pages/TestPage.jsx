import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Card, Row, Col, Container, Pagination } from 'react-bootstrap'
import postService from '../Api/postService';
import CategoryPage from './CategoryPage';

export default function TestPage({categry}) {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        }

        fetchApi();
    }, []);

    return (
        <>
        <CategoryPage _posts={posts} category={categry}/>
        </>
    )
}

