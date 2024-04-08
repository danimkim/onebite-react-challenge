import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/constant";

export default function Root() {
  return (
    <>
      <h1>Challenge Mission List</h1>
      <nav>
        <ul>
          <li>
            <Link to={`/${BASE_URL}/mission/day10`}>Day10</Link>
          </li>
          <li>
            <Link to={`/${BASE_URL}/mission/day13`}>Day13</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={`/${BASE_URL}/project/counter`}>Counter App</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
