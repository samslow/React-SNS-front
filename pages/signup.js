import React, { useState, useCallback } from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button} from 'antd';

const Signup = () => {
  const [pwCheck, setPwCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (pw !== pwCheck){
      return setPwError(true);
    }
    if (!term){
      return setTermError(true);
    }
  }, [pw, pwCheck, term]);

  const onChangePwCheck = useCallback((e) => {
    setPwError(e.target.value !== pw);
    setPwCheck(e.target.value);
  },[pw]);
  const onChangeTerm = useCallback((e) => {
    // setTermError(false)
    setTerm(e.target.checked);
  }, []);

  // custom hook
  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
      setter(e.target.value);
    }, []);
    return [value, handler];
  };

  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [pw, onChangePw] = useInput('');

  return <>
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
  </>
};

export default Signup;