import React, { useState } from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button} from 'antd';

const Signup = () => {
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (pw !== pwCheck){
      return setPwError(true);
    }
    if (!term){
      return setTermError(true);
    }
    console.log({
      id,
      nick,
      pw,
      pwCheck,
      term,
    })
  }

  const onChangePw = (e) => {
    setPw(e.target.value);
  }
  const onChangePwCheck = (e) => {
    setPwError(e.target.value !== pw);
    setPwCheck(e.target.value);
  }
  const onChangeTerm = (e) => {
    // setTermError(false)
    setTerm(e.target.checked);
  }

  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = (e) => {
      setter(e.target.value);
    };
    return [value, handler];
  };

  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');

  return <>
    <Head>
      <title>NodeBird</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
    </Head>
    <AppLayout>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="user-pw">비밀번호</label>
          <br />
          <Input name="user-pw" type="password" required onChange={onChangePw} />
        </div>
        <div>
          <label htmlFor="user-pw-check">비밀번호확인</label>
          <br />
          <Input name="user-pw-check" type="password" value={pwCheck} required onChange={onChangePwCheck} />
          {pwError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>샘슬로우의 말 잘들을거임?</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
    </AppLayout>
  </>
};

export default Signup;