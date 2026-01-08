import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Post() {

    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setPost(response.data);
            }catch(error) {
                console.log("Error fetching post:", error);
            }
        }
        fetchPost();
    }, [])

  return (
    <div className='dark:bg-zinc-800 dark:text-white h-full'>
        <div className='container mx-auto py-20'>
            {post ? (
                <div>
                    <Link className='bg-gray-300 px-5 py-2 rounded-full mb-5 inline-block dark:bg-white dark:text-black' to="/blog">Go Back</Link>
                    <h2 className='text-4xl font-bold'>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Loading post...</p>
            )}
        </div>
    </div>
  )
}

export default Post