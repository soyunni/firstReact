import React, { useState } from 'react'
import './App.css';

function App() {
  let [title, titleFunc] = useState("Blog Title");
  let [contents, contentsFunc] = useState([{ "title": "게시물1", "contents" : "2022.01.03"}, { "title": "게시물2", "contents" : "2022.01.04"}, { "title": "게시물3", "contents" : "2022.01.05"}]);
  let [cnt, cntFunc] = useState([ 0, 0, 0]);
  let [show, showFunc] = useState(false);
  let [selectVal, selectValFunc] = useState({"title": "", "contents": "", "cnt": 0})
  let list = [ 1, 2, 3];
  function cntAdd(val, idx) {
    let copyCnt = [...cnt];
    copyCnt[idx] = val + 1;
    cntFunc(copyCnt);
  }

  function showModal(show, idx) {
    showFunc(show ? false:true);
    let sendVal = {"title": contents[idx].title, "contents": contents[idx].contents, "cnt": cnt[idx]}
    selectValFunc(sendVal);
  }
  function forList() {
    let test = [];
    for (let i = 0; i < 3; i++) {
      test.push(<div>TEST</div>);
    }
    return test;
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>{ title }</div>
      </div>
      {
        contents.map(function($data, idx) {
          return (
            <div className='list'>
              <h3>{ $data.title } <span onClick={ () => { cntAdd(cnt[idx], idx) } }>👍 { cnt[idx] }</span></h3>
              <p>{ $data.contents }</p>
              <button type={'button'} onClick={() => { showModal(show, idx) }}>열기</button>
              <hr/>
            </div>
          )
        })
      }
      {
        show 
        ? <Modal boards={selectVal}/> 
        : null
      }
    </div>
  );
}

function Modal(props) {
  let boards = props.boards;
  return (
    <div className='modal'>
      <h2>{ boards.title }</h2>
      <p>내용 : { boards.contents }</p>
      <p>👍 { boards.cnt } 개</p>
    </div>
  )
}

export default App;
