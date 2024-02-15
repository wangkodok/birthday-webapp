/* eslint-disable */
export default function Phone({ onHandleChange }) {
  return (
    <label htmlFor="phone">
      <input
        id="phone"
        type="text"
        placeholder="전화번호"
        onChange={onHandleChange}
        name="phone"
      />
    </label>
  );
}
