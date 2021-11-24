/*esLint-diable*/
import React, {useState} from "react";
import axios from "axios";
import "./App.css";

function App(){
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [글날짜, 글날짜변경] = useState(['1972년', '11월', '21일'])
  let posts = '강남 고기 맛집'
  let [따봉, 따봉변경] = useState(0)
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');



  //중괄호에 넣을때는 소제목 빼자
  function 제목바꾸기(){
    var newArray = [...글제목];  // 딥카피 ... 중괄호 제거하고 다시 새로 담는 행위
    newArray[0] = '여자코트 추천' 
    글제목변경(newArray);
  }



  return(
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <button onClick={ ()=> {modal변경(!modal)   }}>열고닫기</button>

      {/* <div className="list">
        <h3>{글제목[0]} <span onClick={()=> {따봉변경(따봉 +1)}}>따봉</span>{따봉} </h3>
        <p> 2월 17일 발행 </p>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p> 2월 17일 발행 </p>
      </div>
      <div className="list">
        <h3 onClick={ ()=> {modal변경(!modal)   }}>{글제목[2]}</h3>
        <p> 2월 17일 발행 </p>
      </div> */}

    {
      글제목.map(function(글,i){
        return(
          <div className="list" key = {i}>
            <h3 onClick={ ()=> {누른제목변경(i)}} >{글}</h3>
            <p> 2월 18일 발행</p>
            <hr/>
          </div>
        )
      }
      )
    }
      <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button>

      {/* {입력값}
      <input onChange={ (e)=>{입력값변경(e.target.value)}}/>  */}


      <div className="publish">
        <input onChange={ (e)=>{입력값변경(e.target.value) }}  />
        <button onClick={ ()=> {
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목.unshift(입력값);  // 옆에 사용자가 입력한 값을 넣어주세요 
          글제목변경(arrayCopy);
        } }>저장</button>
      </div>
    


    {
      modal ===true
      ? <Modal 글제목={글제목} 글날짜={글날짜} 누른제목={누른제목}></Modal>
      : null
    }

    <Profile/>

      
    </div>

    


  );

}

function Modal(props){
  return(
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>{props.글날짜[0]}</p>
      <p>상세내용</p>
    </div>
  )
}

class Profile extends React.Component {
  constructor(){
    super();
    this.state = { name : 'Kim', age : 30 }
  }

  changeName = () => {
    this.setState( {name : 'Park'} )
  }

  render(){
    return (
      <div>
        <h3> 저는 { this.state.name } 입니다 </h3>
        <button onClick={ this.changeName }> 버튼 </button>
      </div>
    )
  }
}

export default App;
