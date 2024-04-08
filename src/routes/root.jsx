import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/constant";

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
            <Link to={`/mission/day13`}>Day13</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={`/project/counter`}>Counter App</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
