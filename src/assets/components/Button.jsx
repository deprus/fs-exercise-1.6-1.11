export default function Button({ buttonType, children }) {
  return (
    <>
      <button onClick={buttonType}>{children}</button>
    </>
  );
}
