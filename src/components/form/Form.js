import React from "react";
import useForm from "../../hooks/form";
import { Button, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import "./form.css";

function Form(props) {
  const { handleSubmit, handleChange } = useForm(props.addItem);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Add ToDo Item</h1>
        <FormGroup label={"Todo Item"} labelFor="text-input">
          <InputGroup
            id="text-input"
            placeholder="Item Details"
            onChange={handleChange}
            name="item"
            type="text"
            intent={Intent.PRIMARY}
            required
          />
        </FormGroup>
        <FormGroup label={"Assigned To"} labelFor="assign-input">
          <InputGroup
            id="assign-input"
            placeholder="Assignee Name"
            onChange={handleChange}
            name="assign"
            type="text"
            intent={Intent.PRIMARY}
            required
          />
        </FormGroup>
        <FormGroup label={"Difficulty( 1 --> 5 )"} labelFor="difficulty-input">
          <InputGroup
            id="difficulty-input"
            onChange={handleChange}
            defaultValue={3}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </FormGroup>
        <br />
        <Button type="submit">Add Item</Button>
      </form>
    </div>
  );
}

export default Form;
