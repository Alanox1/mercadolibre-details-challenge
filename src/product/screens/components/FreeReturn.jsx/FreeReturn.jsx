import React from "react";
import {Stack, Text} from "@chakra-ui/react";

const FreeReturn = ({}) => {
  return (
    <Stack border="1px solid rgba(0, 0, 0, 0.08)" padding={4}>
      <Text margin="20px 0px">Devolución gratis</Text>
      <Stack fontSize={15}>
        <Text color="gray.500" marginBottom="20px">
          Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!
        </Text>
        <Stack>
          <Text color="secondary.500" marginBottom="20px">
            Conocer más sobre devoluciones
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FreeReturn;
