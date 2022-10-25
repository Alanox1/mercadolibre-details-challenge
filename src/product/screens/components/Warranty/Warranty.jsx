import React from "react";
import {Stack, Text} from "@chakra-ui/react";

const Warranty = ({}) => {
  return (
    <Stack border="1px solid rgba(0, 0, 0, 0.08)" padding={4}>
      <Stack fontSize={18}>
        <Text margin="20px 0px">Garantía</Text>
        <Text>Compra Protegida con Mercado Pago</Text>
      </Stack>

      <Text color="gray.500" fontSize={14}>
        Recibí el producto que esperabas o te devolvemos tu dinero
      </Text>
      <Stack>
        <Text marginTop="10px">Garantía del vendedor</Text>
      </Stack>

      <Stack fontSize={14}>
        <Stack>
          <Text color="gray.500" marginBottom="20px">
            Garantía del vendedor: 1 mes
          </Text>
        </Stack>
        <Stack>
          <Text color="secondary.500" marginBottom="30px">
            Conocer más sobre garantía
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Warranty;
