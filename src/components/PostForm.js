import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createPost, showAlert} from '../redux/actions/postActions'
import {Alert} from './Alert'

const PostForm = () => {
  const [title, setTitle] = useState('')
  const alert = useSelector((state) => state.app.alert)
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()

    if (!title.trim()) {
      return dispatch(showAlert('Назваение поста не может быть пустым!'))
    }
    const newPost = {
      title, id: new Date().getTime(),
    }

    dispatch(createPost(newPost))
    setTitle('')
  }

  const changeInputHandler = (event) => {
    event.persist()

    setTitle(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>

      {alert && <Alert text={alert}/>}

      <div className="form-group">
        <label htmlFor="title">Заголовок поста</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          name="title"
          onChange={changeInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-success">Добавить</button>
    </form>
  )
}

export default PostForm
