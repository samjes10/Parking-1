import '../../../styles/global/Paginator.css'

const Paginator = ({ pageInfo, getData }) => {
  let { page, totalPages } = pageInfo;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
console.log(pageNumbers)
console.log(page)
  return (
    <div className="paginator">
      {page > 1 && (
        <button className="page-link" onClick={() => getData(page - 1)}>
          &#8249;
        </button>
      )}

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={page === number ? 'page-link active' : 'page-link'}
          onClick={() => getData(number)}
        >
          {number}
        </button>
      ))}

      {page < totalPages && (
        <button className="page-link" onClick={() => getData(page + 1)}>
          &#8250;
        </button>
      )}
    </div>
  );
};

export default Paginator;
