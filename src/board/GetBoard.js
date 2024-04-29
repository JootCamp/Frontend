import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function GetBoard() {
  const url = process.env.REACT_APP_URL;
  const location = useLocation();
  const [board, setBoard] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const nav = useNavigate();

  const getBoardAxios = async () => {
    await axios.get(url + `boards/${location.state.id}`)
    .then(res => {
      const boardResponse = res.data;
      setBoard(boardResponse);
      setTitle(boardResponse.title);
      setDescription(boardResponse.description);
    }).catch(e => {
      console.log(e);
    })
  }

  useEffect(() => {
    getBoardAxios();
  }, [])
  
  useEffect(() => {
  }, [isUpdate, board])

  const changeInputValueHandler = (e, setter) => {
    if(!isUpdate)return;
    setter(e.target.value);
  }
  
  const updateClickHandler = () => {
    if(isUpdate){
      setTitle(board.title);
      setDescription(board.description);
    }

    setIsUpdate(!isUpdate);
    document.getElementById('title').readOnly = isUpdate;
    document.getElementById('description').readOnly = isUpdate;
  }

  const deleteClickHandler = async () => {
    const sureDelete = window.confirm("정말로 삭제하겠습니까?");
    if(!sureDelete)return;

    await axios.delete(url+`boards/${board.id}`)
    .then(res => {
      window.alert("삭제되었습니다.");
      nav('/');
    }).catch(e => {
      console.log(e);
    })
  }

  const updateSubmitHandler = async () => {
    const sureUpdate = window.confirm("수정하시겠습니까?");
    if(!sureUpdate)return;

    await axios.put(url + `boards/${board.id}`, {
      'title': title,
      'description': description
    })
    .then(async (res) => {
      getBoardAxios();
      setIsUpdate(false);
    }).catch(e => {
      console.log(e);
    })
  }

  return (
    <>
      <table border={1}>
        <tr>
          <th>제목</th>
          <input type='text' id='title' 
          onChange={(e) => changeInputValueHandler(e, setTitle)}
           value={title}></input>
        </tr>

        <tr>
          <th>작성자</th>
          <input type='text' value="anonymous" readOnly></input>
        </tr>

        <tr>
          <th>설명</th>
          <input type='text' id='description' 
          onChange={(e) => changeInputValueHandler(e, setDescription)}
          value={description}></input>
        </tr>
      </table>

      <button type='submit' onClick={() => window.location.href='http://localhost:3000'}>목록</button>
      {
        !isUpdate ?
      <button type='submit' onClick={() => updateClickHandler()}>수정</button>
      :
      <button type='submit' onClick={() => updateClickHandler()}>이전</button>
    }
      {
        !isUpdate ?
        <button type='submit' onClick={() => deleteClickHandler()}>삭제</button>
        :
        <button type='submit' onClick={() => updateSubmitHandler()}>제출</button>
      }
    </>
  )
}

export default GetBoard
