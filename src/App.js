import "./styles.css";
import { useEffect, useState } from 'react'
import Loader from './Loader'
import axios from 'axios'



export default function App() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('hj');
        setPosts(res.data)
        setLoading(false)
        setError(null)
      }
      catch (error) {
        setLoading(false)
        setError(error.message)
      }

    };
     setTimeout(() => {
      fetchPosts();
    }, 2000)

  }, []);
  
  return (
    <>
      {error && <h1 className="container">{error}</h1>}
      {loading && <Loader />}
      {posts.length>0 &&
      <></>}

    </>
  )
}