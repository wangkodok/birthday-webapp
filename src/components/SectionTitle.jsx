/* eslint-disable */
export default function SectionTitle({ children, ...props }) {
  return (
    <h2 className="sec-title" {...props}>
      {children}
    </h2>
  );
}
