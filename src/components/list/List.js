import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import superagent from "superagent";
import "./list.css";
import cookie from "react-cookies";

function List(props) {
  const [finalArray, setFinalArray] = useState([]);

  useEffect(async () => {
    const token = cookie.load("token");
    let response = await superagent
      .get("https://ibrahem-todo-server.herokuapp.com/todo")
      .set("authorization", `Bearer ${token}`);
    setFinalArray(response.body.todo);
  },[finalArray]);

  async function handledelete(index) {
    const token = cookie.load("token");
    let response = await superagent
      .delete(`https://ibrahem-todo-server.herokuapp.com/todo?index=${index}`)
      .set("authorization", `Bearer ${token}`);
    setFinalArray(response.body.todo);
  }


  return (
    <div className="list-container">
      {finalArray.map((item, idx) => (
        <>
          <div key={item.id}>
            <h6>Todo Item: {item.item}</h6>
            <p>
              <small>Assigned to: {item.assign}</small>
            </p>
            <p>
              <small>Difficulty: {item.difficulty ? item.difficulty : 3}</small>
            </p>

            <br />
            <Button
              className="delete-btn"
              variant="danger"
              onClick={() => handledelete(idx)}
            >
              Delete
            </Button>

            <Button
              onClick={() => props.toggleComplete(item.id)}
              variant="warning"
            >
              Complete: {item.complete ? "done" : "pending"}
            </Button>
            <hr />
          </div>
        </>
      ))}
    </div>
  );
}

export default List;
