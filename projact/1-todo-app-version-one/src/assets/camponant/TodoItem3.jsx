function TodoItem3() {
  let Titlee = "Go to Collage";
  let TodoDate = "07/10/2025";
  return (
    <>
      <div className="container ">
        <div className="row NsRow">
          <div className="col-6">{Titlee}</div>
          <div className="col-4">{TodoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger  mm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem3;
