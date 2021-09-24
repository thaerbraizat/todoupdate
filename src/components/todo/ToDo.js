import React, { useEffect, useState, useContext } from "react";
import { settingContext } from "../../context/settings";
import { v4 as uuid } from "uuid";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Form from "../form/Form";
import List from "../list/List";
import Pagination from "../pagination/pagination";
import Settings from "../settings/settings";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ToDo = () => {
  const context = useContext(settingContext);

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(4);
  const [filteredList, setFilteredList] = useState([]);

  function addItem(item) {
    console.log("items:", item);
    let details = {
      id: uuid(),
      complete: false,
      difficulty: item.difficulty,
      assignee: item.assign,
      text: item.item,
    };
    setList([...list, details]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  useEffect(() => {
    setTodosPerPage(context.elementsPerPage);
  });

  useEffect(() => {
    if (context.showCompleted === true) {
      let InCompletedTasks = list.filter((item) =>
        item.complete === false ? item : null
      );
      console.log(InCompletedTasks);
      setFilteredList(InCompletedTasks);
    }
  }, [context.detectStorage]);

  let indexOfLastTodo = parseInt(currentPage) * parseInt(todosPerPage);

  let indexOfFirstTodo = indexOfLastTodo - parseInt(todosPerPage);

  let currentTodos = list.slice(indexOfFirstTodo, indexOfLastTodo);

  let paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <Container>
              <Row>
                {list.length > 0 && (
                  <h3> - To Do List: {incomplete} items pending</h3>
                )}
              </Row>
              <Row>
                <Col xs={3}>
                  <Form addItem={addItem} />
                </Col>
                <Col xs={9}>
                  {context.showCompleted === false ? (
                    <List
                      list={currentTodos ? currentTodos : list}
                      toggleComplete={toggleComplete}
                      deleteItem={deleteItem}
                    />
                  ) : (
                    <List
                      list={filteredList}
                      toggleComplete={toggleComplete}
                      deleteItem={deleteItem}
                    />
                  )}
                </Col>
              </Row>
              <Row>
                <Col xs={3}></Col>
                <Col xs={9}>
                  <Pagination
                    todosPerPage={todosPerPage}
                    totalTodos={list.length}
                    paginate={paginate}
                  />
                </Col>
              </Row>
            </Container>
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default ToDo;
