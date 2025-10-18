function TodoItem2() {
  let Titlee = "Buy Milk";
  let TodoDate = "04/10/2025";
  return (
    <>
      <div className="container">
        <div className="row NsRow">
          <div className="col-6">{Titlee}</div>
          <div className="col-4">{TodoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger mm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem2;
