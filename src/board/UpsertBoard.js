import React, { useState } from 'react'
import axios from 'axios'

function AddBoard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const url = process.env.REACT_APP_URL;

  const inputHandler = (e, setter) => {
    setter(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post(url + "boards",{
      "title": `${title}`,
      "description": `${description}`
    })
    .then(res => {
      console.log(title + " " + description);
      window.location.href='http://localhost:3000';
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <>
      <table border={1}>
        <tr>
          <th>제목</th>
          <input type='text' 
          onChange={(e) => inputHandler(e, setTitle)}></input>
        </tr>

        <tr>
          <th>작성자</th>
          <input type='text' value="anonymous" readOnly></input>
        </tr>

        <tr>
          <th>설명</th>
          <input type='text' 
          onChange={(e) => inputHandler(e, setDescription)}></input>
        </tr>
      </table>

      <button type='submit' onClick={(e) => submitHandler(e)}>작성</button>
    </>
  )
}

export default AddBoard
