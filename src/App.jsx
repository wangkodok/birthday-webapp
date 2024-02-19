import { Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import BirthDayList from "./components/BirthDayList";

export default function App() {
  return (
    <Wrapper>
      <main className="main-container">
        <section className="sec-birthday">
          <div className="use-area">
            <Link to="/add-birthday" className="birthday-add" />
          </div>
          <h2>생일</h2>
          <BirthDayList />
        </section>
      </main>
      <footer></footer>
    </Wrapper>
  );
}
