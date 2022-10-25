import React from "react";
import {Stack, Text, Image} from "@chakra-ui/react";

const ProductPromotedCard = ({src, precio, descripcion}) => {
  return (
    <Stack direction="row">
      <Stack>
        <Image border="1px solid rgba(0, 0, 0, 0.08)" height="70px" src={src} width="100px" />
      </Stack>
      <Stack spacing="2px">
        <Text fontSize={20}>$ {precio}</Text>
        <Text color="rgb(0, 166, 80);">Envío gratis</Text>
        <Text fontSize={14}>{descripcion}</Text>
      </Stack>
    </Stack>
  );
};

export default ProductPromotedCard;
