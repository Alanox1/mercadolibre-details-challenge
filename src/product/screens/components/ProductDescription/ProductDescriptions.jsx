import React from "react";
import {Text, Stack, OrderedList, ListItem} from "@chakra-ui/react";

const ProductDescription = () => {
  return (
    <Stack padding="35px">
      <Text fontSize={25}>Descripción</Text>
      <Text color="gray.500" fontSize={20}>
        STITCH DE PELUCHE - TAMAÑO MEDIANO - SOLO COLOR AZUL
      </Text>
      <OrderedList color="gray.500" fontSize={20} listStyleType="none">
        <ListItem marginTop="0.5rem">* Peluche super suave</ListItem>
        <ListItem marginTop="0.5rem">
          * Mide 20 cm. de alto total sentado contando orejitas.
        </ListItem>
        <ListItem marginTop="0.5rem">* Realizado en plush.</ListItem>
        <ListItem marginTop="0.5rem">* Su consulta no molesta.</ListItem>
      </OrderedList>

      <Stack color="gray.500" fontSize={20}>
        <Text>Horarios de Atención:</Text>
        <Text>- Lunes a Viernes: 12hs a 20hs.</Text>
        <Text>- Sábados Domingos y Feriados: 12hs a 18hs.</Text>
      </Stack>

      <Text color="gray.500" fontSize={20}>
        Tu consulta no molesta, preguntar ante cualquier duda. Recorda que tu oferta es un
        compromiso de compra y deberás comunicarte dentro de los 2-3 dias luego de la misma.
      </Text>
      <Text color="gray.500" fontSize={20}>
        Visita nuestros otros artículos publicados. ¡Muchas gracias!
      </Text>
    </Stack>
  );
};

export default ProductDescription;
