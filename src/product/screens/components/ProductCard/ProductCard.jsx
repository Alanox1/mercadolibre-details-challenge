import React from "react";
import {Text, Stack, Image} from "@chakra-ui/react";

const ProductCard = ({src, precio, texto}) => {
  return (
    <Stack border="1px solid rgba(0, 0, 0, 0.08)" justifyContent="row" margin="10px">
      <Stack>
        <Image src={src} />
      </Stack>

      <Stack>
        <Text fontSize={22} fontWeight="bold">
          ${precio}
        </Text>
        <Text color="#00a650">Envío gratis</Text>
        <Text color="gray.400" fontSize={14}>
          {texto}
        </Text>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
