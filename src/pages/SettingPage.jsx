import SectionTitle from "../components/SectionTitle";
import Wrapper from "../components/Wrapper";

export default function SettingPage() {
  return (
    <Wrapper>
      <main className="main-container">
        <section className="sec-setting">
          <SectionTitle>설정</SectionTitle>
          <div>
            <p>음력 표시</p>
            <ul>
              <li>
                <button>전체</button>
              </li>
              <li>
                <button>1일, 15일만</button>
              </li>
              <li>
                <button>안함</button>
              </li>
            </ul>
          </div>
          <div>
            <p>테마</p>
            <ul>
              <li>
                <button>다크테마</button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Wrapper>
  );
}
