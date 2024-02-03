import HandIcon from './HandIcon.js'

function HandButton({ value, onClickFunction }) {
  const handClick = () => onClickFunction(value); // 받은 value를 콘솔뿌리는 함수의 파라미터로 넣고 결과값 변수로 할당
  return (
    <button onClick={handClick}> {/* 버튼 누를 시 콘솔 출력해주는 콜백 이벤트 생성해줌 */}
      <HandIcon value={value} />  {/* 버튼 출력 컴포넌트 */}
    </button>
  )
}

export default HandButton;