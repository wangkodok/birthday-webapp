/* eslint-disable */
import profileImg from "../assets/profile.png";

export default function Profile({ uploadedImage, onHandleChange }) {
  return (
    <>
      <label htmlFor="profile" className="profile">
        <input
          id="profile"
          type="file"
          name="profile"
          onChange={onHandleChange}
        />
        {uploadedImage ? (
          <img src={uploadedImage} alt="프로필 이미지" />
        ) : (
          <img src={profileImg} alt="" />
        )}
      </label>
    </>
  );
}
