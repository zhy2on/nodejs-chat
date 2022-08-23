import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import styled from 'styled-components';
import reportWebVitals from './reportWebVitals';

const WindowWrapper = styled.div`
  background: #fff;
  width: 780px;
  margin: 30px auto; //좌우여백 30px 가로 중앙에 배치
  border-radius: 6px;
  box-shadow: 0 0 6px rgb(0 0 0 / 30%);
  min-height: 530px;
  position: relative;
`;

const WindowTitle = styled.div`
  position: relative;
  padding: 15px;
  border: solid rgb(255 0 0);
`;

const WindowArea = styled.div`
  position: absolute; //상위 중 가장 가까이 relative가 있는 WindowWrapper 안에서 자유롭게 배치
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  padding-left: 176px;
  border: solid rgb(0 0 255);
`;

const ChatArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 175px;
  bottom: 0;
  box-shadow: inset 0 1px 3px rgb(207 218 225 / 42%);
  border-top: 1px solid #cfdae1;
  border: solid rgb(100 255 100);
`;

const UserList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  // border-left: 1px solid #cfdae1;
  // border-top: 1px solid #cfdae1;
  border: solid orange;
  width: 175px;
`;

const MyAccount = styled.div `
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 29px;
  padding: 8px;
  // background: #445166;
  border: solid magenta;
`;

const ChatTitle = styled.div`
  position: relative;
  padding: 15px;
  overflow: hidden;
  line-height: 15px;
  border: solid black;
`

const ChatList = styled.div`
  // border-top: 1px solid #cfdae1;
  // border-bottom: 1px solid #cfdae1;
  position: relative;
  height: 375px;
  overflow-y: auto;
  outline: none;
  border: solid grey;
`;

const InputArea = styled.div`
  // background: #e4eaee;
  padding: 6px;
  overflow: hidden;
  position: relative;
  height: 45px;
  border-top: 1px solid #cfdae1;
  border: solid yellow;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WindowWrapper>
      <WindowTitle>
      </WindowTitle>
      <WindowArea>
        <ChatArea>
          <ChatTitle />
          <ChatList />
          <InputArea />
        </ChatArea>
        <UserList>
          <MyAccount />
        </UserList>
      </WindowArea>
    </WindowWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
