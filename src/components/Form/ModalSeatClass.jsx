import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "../../assets/css/Banner.css";
import Select from "react-select";
import axios from "axios";
const ModalSeatClass = (props) => {
  const [dataClass, setDataClass] = useState([]);
  const URL = "http://localhost:8080/seat_class";

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        // `${process.env.REACT_APP_API}/seat_classs`
        URL
      );
      setDataClass(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [inputValue, setInputValue] = useState();
  const inputHandleChange = (selectedOption) => {
    setInputValue(selectedOption);
    props.setDataClass(selectedOption);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.dataSelect(inputValue);
  };

  useEffect(() => {
    fetchApi();
  }, [URL]);

  const selectOptions = dataClass
    ? dataClass.map((classes) => ({
        value: classes.id,
        label: classes.name,
      }))
    : [];

  return (
    <Form.Group>
      <Form onSubmit={handleClick}>
        <Select
          options={selectOptions}
          onChange={inputHandleChange}
          isClearable={true}
        />
      </Form>
    </Form.Group>
  );
};

export default ModalSeatClass;
