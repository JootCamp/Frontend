import axios from 'axios';
import React, { useState } from 'react'

const Join = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [nickname, setNickname] = useState('');

  const url = process.env.REACT_APP_URL;

  const submitHandler = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      alert("비밀번호를 다시 입력해주세요");
      return;
    }

    await axios.post(url + "join", {
      "name": name,
      "email": email,
      "password": password,
      "nickname": nickname
    }).then(res => {
      window.location.href='http://localhost:3000';
    }).catch(e => {
      console.log(e);
    })
  }

  const inputHandler = (e, setter) => {
    setter(e.target.value); 
  }

  return (
    <>
      <label for='name'>이름</label>
      <input type='text' id='name' onChange={(e) => inputHandler(e, setName)} value={name}></input><br/>
      <label for='email'>이메일</label>
      <input type='email' id='email' onChange={(e) => inputHandler(e, setEmail)} value={email}></input><br/>
      <label for='password'>비밀번호</label>
      <input type='password' id='password' onChange={(e) => inputHandler(e, setPassword)} value={password}></input><br/>
      <label for='confirmPassword'>비밀번호 확인</label>
      <input type='password' id='confirmPassword' onChange={(e) => inputHandler(e, setConfirmPassword)} value={confirmPassword}></input><br/>
      {
        password.length == 0 ?
        "" : password !== confirmPassword  && password.length > 0? 
        <p style={{color: "red"}}><strong>입력한 비밀번호와 다릅니다.</strong></p> :
        <p style={{color: "green"}}><strong>입력한 비밀번호와 일치합니다.</strong></p>
      }
      <label for='nickname'>닉네임</label>
      <input type='text' id='nickname' onChange={(e) => inputHandler(e, setNickname)} value={nickname}></input><br/>

      <button type='submit' onClick={(e) => submitHandler(e)}>회원가입</button>
    </>
    
  )
}

export default Join
