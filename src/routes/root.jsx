import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>Challenge Mission List</h1>
      <nav>
        <ul>
          <li>
            <Link to={`/mission/day10`}>Day10</Link>
          </li>
          <li>
            <Link to={`/mission/day11`}>Day11 - 배달 음식 주문 페이지</Link>
          </li>
          <li>
            <Link to={`/mission/day13`}>Day13 - 환율 변환기</Link>
          </li>
          <li>
            <Link to={`/mission/day15`}>Day15 - 연락처</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={`/project/counter`}>Counter App</Link>
          </li>
          <li>
            <Link to={`/project/todolist`}>Todo List</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
