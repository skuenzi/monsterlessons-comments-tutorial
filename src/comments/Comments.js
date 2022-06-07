import { useEffect, useState } from "react";
import {getComments as getCommentsApi} from '../api'
import Comment from './Comment'

const Comments = () => {
  const [backendComments, setBackendComments] = useState([])
  const rootComments = backendComments.filter((backendComment) => backendComment.parentId === null)
  const getReplies = commentId => {
    return backendComments
      .filter(backendComment => backendComment.parentId === commentId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime)
  }
  
  
  useEffect(() => {
    getCommentsApi()
      .then((data) => {
        setBackendComments(data);
      })
      .catch((err) => {console.log(err)})
  }, [])


    return (
      <div className='comments'>
        <h3 className="comments-title">Comments</h3>
        <div className="comments-container">
          {rootComments.map(rootComment => (
            <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)}/>
          ))}


        </div>
      </div>
    );
  }
  
  export default Comments;