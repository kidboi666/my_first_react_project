import { useState } from 'react';
import Board from './Board';
import Button from './Button';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [otherNum, setOtherNum] = useState(1);
  const [otherSum, setOtherSum] = useState(0);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  function handleRollClick() {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]); // spread구문으로 클릭 할때 마다 새 배열을 가리키는 참조값을 만들어 state가 값의 변동을 인지하게끔 한다.
    // 그럼 기존의 만들어진 배열들은 모두 가비지 컬렉션으로 폐기되는건가?
    setOtherNum(nextOtherNum);
    setOtherSum(otherSum + nextOtherNum);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  }

  function handleClearClick() {
    setNum(1);
    setSum(0);
    setGameHistory([]);
    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory}/>
        <Board name="상대" color="red" num={otherNum} sum={otherSum} gameHistory={otherGameHistory}/>
      </div>
    </div>
  );
}

export default App;