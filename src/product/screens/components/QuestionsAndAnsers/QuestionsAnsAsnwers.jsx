import React, {useState} from "react";
import {OrderedList, Stack, Text, ListItem} from "@chakra-ui/react";

import Botones from "./Botones";
import Questions from "./Questions";

const initialState = [
  {
    question: "Hola, lo tenes en negro?",
    answer: "Si, lo tenemos disponible",
    date: new Date((2021, 4, 15)),
  },
  {
    question: "Hola, tenes stock?",
    answer: "Si, tenemos stock disponible",
    date: new Date(2021, 4, 15),
  },
  {
    question: "Hola buen día hacen envíos a Río cuarto Córdoba y que costó tiene",
    answer: "Hola hacemos envios y el mismo es sin costo. Saludos.",
    date: new Date(2021, 4, 8),
  },
];
const QuestionsAndAnswers = ({}) => {
  const [questions, setQuestions] = useState(initialState);

  return (
    <Stack padding="35px">
      <Stack spacing="40px">
        <Text fontSize={25}>Preguntas y respuestas</Text>
        <Text fontSize={18} fontWeight="bold">
          ¿Qué quieres saber?
        </Text>
        <Stack direction="row" justifyContent="flex-start" spacing="25px">
          <Botones titulo="Costo y tiempo de envío" />
          <Botones titulo="Devoluciones gratis" />
          <Botones titulo="Medios de pago" />
          <Botones titulo="Garantía" />
        </Stack>
        <Text fontSize={18} fontWeight="bold">
          Preguntale al vendedor
        </Text>
      </Stack>

      <Questions questions={questions} setQuestions={setQuestions} />
      <Text color="gray.500" fontSize={15}>
        Tiempo aproximado de respuesta: 51 minutos
      </Text>
      <Stack>
        <Text fontSize={18} fontWeight="bold" margin="40px 0px">
          Últimas realizadas
        </Text>
      </Stack>

      <Stack>
        <OrderedList listStyleType="none">
          {questions.map((el, index) => {
            return (
              <ListItem key={index}>
                <Text margin="5px 0px">{el.question}</Text>
                <Stack color="gray.500" direction="row">
                  {el.answer ? (
                    <svg
                      fill="currentColor"
                      height="1em"
                      stroke="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
                        fillRule="evenodd"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                  {el.answer ? (
                    <Text>
                      {el.answer || ""} {el.date.toLocaleDateString() || "5"}
                    </Text>
                  ) : (
                    ""
                  )}
                </Stack>
              </ListItem>
            );
          })}
        </OrderedList>
      </Stack>
    </Stack>
  );
};

export default QuestionsAndAnswers;
