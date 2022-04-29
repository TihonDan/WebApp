import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';

export default function PageHosts() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get('https://localhost:44386/api/Posts');
            console.log(response.data);
        }

        fetchApi();
    }, []);

  return (
    <div>PageHosts</div>
  )
}
