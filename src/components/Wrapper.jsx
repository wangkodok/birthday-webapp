/* eslint-disable */
import Header from "./Header.jsx";

export default function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <Header />
      {children}
    </div>
  );
}
