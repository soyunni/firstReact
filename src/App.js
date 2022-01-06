import React, { useState } from 'react'
import './App.css';

function App() {
  let blogName = "React Title";
  let templateBoard = { "title": "", "date": "", "contents": "", "cnt": 0 };
  let [contents, contentsFunc] = useState([{ "title": "게시물1", "date": "2022.01.03", "contents" : "게시물1의 내용", "cnt": 0 }, { "title": "게시물2", "date": "2022.01.03", "contents" : "게시물2의 내용", "cnt": 0 }]);
  let [isShowModal, isShowModalState] = useState(false);
  let [selectVal, selectValFunc] = useState(templateBoard);
  let [inputText, inputTextFunc] = useState('');
  let [board, boardFuction] = useState(templateBoard);


  function cntAdd(idx) {
    let copyObjs = [...contents];
    copyObjs[idx].cnt = contents[idx].cnt + 1;
    contentsFunc(copyObjs);
  }

  function showModal(show, idx) {
    isShowModalState(show ? false:true);
    let $obj = contents[idx];
    let sendVal = {"title": $obj.title, "date": $obj.date, "contents": $obj.contents, "cnt": $obj.cnt}
    selectValFunc(sendVal);
  }

  function saveBoard() {
    let copy = [...contents];
    copy.unshift(board);
    contentsFunc(copy);
    boardFuction(templateBoard);
  }

  function writeBoard(e, param) {
    let copyBoard = {...board};
    copyBoard[param] = e.target.value;
    boardFuction(copyBoard);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>{ blogName }</div>
      </div>
      {
        contents.map(function($data, idx) {
          return (
            <div className='list' key={idx}>
              <h3>{ $data.title } <span onClick={ () => { cntAdd(idx) } }>👍 { $data.cnt }</span></h3>
              <p>{ $data.contents }</p>
              <p>{ $data.date }</p>
              <button type={'button'} onClick={() => { showModal(isShowModal, idx) }}>열기</button>
              <hr/>
            </div>
          )
        })
      }
      <div className="publish">
        제목 : <input onChange={ (e)=>{ writeBoard(e, "title") } } value={board.title} /><br/>
        내용 : <input onChange={ (e)=>{ writeBoard(e, "contents") } } value={board.contents}/><br/>
        날짜 : <input onChange={ (e)=>{ writeBoard(e, "date") } } value={board.date}/><br/>
        <button onClick={saveBoard}>저장</button>
      </div>
      {
        isShowModal 
        ? <BoardModal board={selectVal}/> 
        : null
      }
    </div>
  );
}

function BoardModal(props) {
  let board = props.board;
  return (
    <div className='modal'>
      <h2>{ board.title }</h2>
      <p>내용 : { board.contents }</p>
      <p>{ board.date }</p>
      <p>👍 { board.cnt } 개</p>
    </div>
  )
}
    /* {<div className="publish">
        <input onChange={ (e)=>{ inputTextFunc(e.target.value) } } />
        <button onClick={ writeInfo(inputText) } >저장</button>
      </div> }*/

  /* function forList() {
    let test = [];
    for (let i = 0; i < 3; i++) {
      test.push(<div>TEST</div>);
    }
    return test;
  }
 */

export default App;
