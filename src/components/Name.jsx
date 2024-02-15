/* eslint-disable */
export default function Name({ onHandleChange }) {
  return (
    <label htmlFor="name">
      <input
        id="name"
        type="text"
        placeholder="이름"
        onChange={onHandleChange}
        name="name"
      />
    </label>
  );
}
