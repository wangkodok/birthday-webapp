import { Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import BirthDayList from "./components/BirthDayList";
import SectionTitle from "./components/SectionTitle";

export default function App() {
  return (
    <Wrapper>
      <main className="main-container">
        <section className="sec-birthday">
          <div className="use-area">
            <Link to="/add-birthday" className="birthday-add" />
          </div>
          <SectionTitle>생일</SectionTitle>
          <BirthDayList />
        </section>
      </main>
      <footer></footer>
    </Wrapper>
  );
}
