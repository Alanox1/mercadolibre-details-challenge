import React, {useState} from "react";
import {Image, Stack, Divider} from "@chakra-ui/react";

import product from "../../../mock";
//
const Gallery = () => {
  const thumbnailElements = product.pictures.map((picture) => (
    <Image
      key={picture.id}
      alt="Imagen miniatura del producto"
      border="1px solid rgba(0, 0, 0, 0.25);"
      borderRadius="4px;"
      box-sizing="border-box;"
      cursor="pointer;"
      height="100%;"
      marginBottom="10px;"
      padding="2px;"
      src={picture.url}
      width="100%;"
      onClick={() => cambiarFoto(picture.id)}
    />
  ));
  const [foto, setFoto] = useState(product.pictures[0].url);
  const cambiarFoto = (id) => {
    product.pictures.map((el) => {
      if (id === el.id) {
        setFoto(el.url);
      }
    });
  };

  return (
    <section>
      <Stack direction="row" display="flex" height="550px">
        <Stack display="flex" flex-direction="column" height="50px" width="50px">
          {thumbnailElements}
        </Stack>
        <Stack justifyContent="center" width="100%">
          <Image margin="0px auto" src={foto} width="100% auto" />
        </Stack>
      </Stack>
      <Divider color="gray.500" orientation="horizontal" />
    </section>
  );
};

export default Gallery;
