/* eslint-disable */
export default function Profile({ uploadedImage, setUploadedImage }) {
  return (
    <label htmlFor="profile" className="profile">
      <input
        id="profile"
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          const imageUrl = URL.createObjectURL(file);
          setUploadedImage(imageUrl);
        }}
      />
      {uploadedImage ? <img src={uploadedImage} alt="프로필 이미지" /> : null}
    </label>
  );
}
