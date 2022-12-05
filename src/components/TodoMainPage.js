import React, { useState } from "react";
import DateTime from "./DateTime";
import "../App.css";

function TodoMainPage() {
  const [inputList, setInputList] = useState("");
  const [addedItem, setAddedItems] = useState([]);
  const [date, setDate] = useState(new Date());

  const inputItem = (event) => {
    setInputList(event.target.value);
  };

  const ListofItems = () => {
    setAddedItems((items) => {
      return [...items, inputList];
    });
  };

  const handleDelete = (inx) => {
    const newArr = [...addedItem];
    newArr.splice(inx, 1);
    setAddedItems(newArr);
  };

  return (
    <>
      <section className="vh-100" key={null}>
        <div className="container py-5 h-100" key={null}>
          <div
            className="row d-flex justify-content-center align-items-center h-100"
            key={null}
          >
            <div className="col" key={null}>
              <div
                key={null}
                className="card"
                id="list1"
                style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
              >
                <div className="card-body py-4 px-4 px-md-5" key={null}>
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="fas fa-check-square me-1"></i>
                    <u>My Todo-s</u>
                  </p>

                  <div className="pb-2">
                    <div className="card">
                      <div className="card-body ">
                        <div className="d-flex flex-row align-items-center">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="exampleFormControlInput1"
                            placeholder="Add new..."
                            onChange={inputItem}
                          />

                          <div>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={ListofItems}
                            >
                              Add
                            </button>
                          </div>
                        </div>
                        <DateTime setDate={setDate} />
                      </div>
                    </div>
                  </div>

                  <ul>
                    {addedItem.map((val, inx) => {
                      return (
                        <div>
                          <li
                            className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent "
                            key={inx}
                          >
                            <div className="form-check">
                              <input
                                className="form-check-input me-0"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked3"
                                aria-label="..."
                              />
                              {val}{" "}
                            </div>
                          </li>
                          <li
                            className="list-group-item  rounded-0 border-0 bg-transparent"
                            key={val.id}
                          >
                            <div className="d-flex flex-row justify-content-end mb-1">
                              <a
                                href="#!"
                                className="text-info"
                                data-mdb-toggle="tooltip"
                                title="Edit todo"
                              >
                                <i className="fas fa-pencil-alt me-3"></i>
                              </a>
                              <a
                                href="#!"
                                className="text-danger"
                                data-mdb-toggle="tooltip"
                                title="Delete todo"
                                onClick={() => {
                                  handleDelete(inx);
                                }}
                              >
                                <i className="fas fa-trash-alt"></i>
                              </a>
                            </div>
                            <div className="text-end text-muted">
                              <a
                                href="#!"
                                className="text-muted"
                                data-mdb-toggle="tooltip"
                                title="Created date"
                              >
                                <p className="small mb-0">
                                  <i className="fas fa-info-circle me-2"></i>
                                  {date}
                                </p>
                              </a>
                            </div>
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TodoMainPage;
