import React from "react";
import {Stack, Text} from "@chakra-ui/react";

import ProductPromotedCard from "../ProducrPromotedCard";
import producto1 from "../../assets/producto1.webp";
import producto2 from "../../assets/producto2.webp";
import producto3 from "../../assets/producto3.webp";
import producto4 from "../../assets/producto4.webp";
const ProductPromoted = ({}) => {
  return (
    <Stack border="1px solid rgba(0, 0, 0, 0.08)" margin="20px 0px" padding={2}>
      <Stack alignItems="center" direction="row" fontSize={18} margin="30px 0px">
        <Text>Productos promocionados</Text>
        <Text color="secondary.600" fontSize={15}>
          Anuncia aquí
        </Text>
      </Stack>

      <Stack>
        <ProductPromotedCard
          descripcion="Peluche Oso Gigante Sentado Phi Phi Toys 1.90mts Parado"
          precio="24.800"
          src={producto1}
        />
        <ProductPromotedCard
          descripcion="Peluche Gigante Cienpies Didactico 1.5mts"
          precio="15.832"
          src={producto2}
        />
        <ProductPromotedCard
          descripcion="Peluches Squishmallows Mini Playset House"
          precio="13.350"
          src={producto3}
        />
        <ProductPromotedCard
          descripcion="Peluches Almohada Animalitos 46cm Perro Chancho X"
          precio="3.369"
          src={producto4}
        />
      </Stack>
    </Stack>
  );
};

export default ProductPromoted;
