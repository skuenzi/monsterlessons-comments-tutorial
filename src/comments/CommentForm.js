import { useState } from "react"

const CommentForm = ({handleSubmit, submitLabel}) => {
    const [text, setText] = useState('')
    const isTextAreaDisabled = text.length === 0

    const onSubmit = event => {
      event.preventDefault()
      handleSubmit(text)
      setText('')
    }

    return (
      <form onSubmit={onSubmit}>
        <textarea 
          className="comment-form-textarea" 
          value={text} 
          onChange={(e) => {setText(e.target.value)}}
        >
        </textarea>
        <button className="comment-form-button" disabled={isTextAreaDisabled}>{submitLabel}</button>
      </form>
    );
  }
  
  export default CommentForm;