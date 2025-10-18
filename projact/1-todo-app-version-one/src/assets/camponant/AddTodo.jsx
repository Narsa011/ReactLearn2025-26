// Componanat -1 for AppTodo.
function AddTodo() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
// Componanat -2 for AppItems.
function AppTodo2() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">04/10/2025</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
// Componanat -3 for AppName.
function AppName() {
  return (
    <div>
      <center>
        {" "}
        <h1>Toto APP</h1>{" "}
      </center>
    </div>
  );
}

export default AddTodo;
export { AppTodo2, AppName };
