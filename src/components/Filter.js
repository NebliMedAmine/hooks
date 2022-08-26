
const Look = ({ setNameSearch }) => {
  return (
    <div className="search">
      <input placeholder="Search for a movie" type="text" onChange={(el) => setNameSearch(el.target.value)} />
    </div>
  );
};
export default Look;

