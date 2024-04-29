import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function GetBoards() {
  const url = process.env.REACT_APP_URL;
  const [boards, setBoards] = useState([]);
  const nav = useNavigate();

  const receiveBoards = async() => {
    await axios.get(url + "boards")
    .then((res) => {
      const result = res.data;
      console.log(result);
      setBoards(result);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  useEffect(() => {
    receiveBoards();
  }, []);

  useEffect(() => {

  }, [boards]);


  const clickHandler = (board) => {
    console.log(board);
    const frontUrl = `/boards/${board.id}`;
    nav(frontUrl, {state: {"id": board.id}});
    window.location.href=frontUrl;
  };

  const addButtonClickHandler = () => {
    console.log("enter");
    window.location.href='http://localhost:3000/boards/create'
  }

  const addJoinClickHandler = (e) => {
    e.preventDefault();
    window.location.href='http://localhost:3000/join';
  }

  return (
    <>
      <button type='submit' onClick={(e) => addJoinClickHandler(e)}>회원가입</button>
      <table border={1}>
        <thead>
            <tr>
              <td><strong>타이틀</strong></td>
              <td><strong>설명</strong></td>
            </tr>
        </thead>

        <tbody>
          {
            boards.map((board) => (
              <tr onClick={() => clickHandler(board)}>
                <td>{board.title}</td>
                <td>{board.description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button onClick={() => addButtonClickHandler()}>추가</button>
    </>
  )
}


export default GetBoards
