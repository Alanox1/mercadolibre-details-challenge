import React, {useState} from "react";
import {Input, Button, FormControl} from "@chakra-ui/react";

const Questions = ({setQuestions, questions}) => {
  const [value, setValue] = useState("");

  const newQuestion = (e) => {
    e.preventDefault();
    setQuestions([{question: e.target[0].value, date: new Date((2021, 4, 15))}, ...questions]);
    setValue("");
  };

  return (
    <FormControl as="form" direction="row" display="flex" spacing="20px" onSubmit={newQuestion}>
      <Input
        borderRadius="10px"
        flex={0.8}
        padding="25px"
        placeholder="Escribe tu pregunta"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button backgroundColor="secondary.500" color="white" flex={0.2} padding="25px" type="submit">
        Preguntar
      </Button>
    </FormControl>
  );
};

export default Questions;
