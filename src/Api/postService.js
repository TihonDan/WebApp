import React, { Component } from 'react'
import axios from "axios";

export default class postService {
    static URL = "https://localhost:44386/api/Posts";

    static async getAll() {
        const response = await axios.get(postService.URL);
        return response;
    }
    
    static async getPostById(id) {
        const response = await axios.get(postService.URL + `/${id}`);
        return response;
    }
}





