import Dice from './Dice.js';
import HandButton from './HandButton.js';//핸드버튼 가져오고

function App() {
  const handleClick = (event) => console.log(event); // 파라미터를 콘솔로그로 뿌리는 함수 하나 선언
  return ( // 핸드버튼 컴포넌트에 value 프롭, 온클릭 프롭 속성을 각각 추가
    <div> 
      <HandButton value="rock" onClick={handleClick} /> {/* 콘솔뿌리는 함수 자체를 넣음 */}
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </div>
  )
}

export default App;