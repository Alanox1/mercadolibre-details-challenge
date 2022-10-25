import React from "react";
import {Text, Stack} from "@chakra-ui/react";
import Carousel from "react-elastic-carousel";

import producto1 from "../../assets/producto1.webp";
import producto2 from "../../assets/producto2.webp";
import producto3 from "../../assets/producto3.webp";
import producto4 from "../../assets/producto4.webp";
import producto5 from "../../assets/producto5.webp";
import producto6 from "../../assets/producto6.webp";
import producto7 from "../../assets/producto7.webp";
import ProductCard from "../ProductCard/ProductCard";

const MoreProduct = () => {
  const breakPoints = [
    {
      width: 100,
      itemsToShow: 3,
      itemsToScroll: 3,
      disableArrowsOnEnd: true,
      pagination: false,
    },
  ];

  return (
    <Stack>
      <Text fontSize={25} margin="40px">
        Publicaciones del vendedor
      </Text>

      <Carousel breakPoints={breakPoints}>
        <ProductCard
          precio={13.205}
          src={producto1}
          texto="Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos"
        />
        <ProductCard
          precio={8.819}
          src={producto2}
          texto="Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos"
        />
        <ProductCard
          precio={26.459}
          src={producto3}
          texto="Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos"
        />
        <ProductCard
          precio={24.8}
          src={producto4}
          texto="Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos"
        />
        <ProductCard
          precio={15.6}
          src={producto5}
          texto="Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos"
        />
        <ProductCard
          precio={26.459}
          src={producto3}
          texto="Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos"
        />
        <ProductCard
          precio={13.853}
          src={producto6}
          texto="Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos"
        />
        <ProductCard
          precio={3.145}
          src={producto7}
          texto="Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos"
        />
      </Carousel>

      <Text color="secondary.400">Ver más publicaciones del vendedor</Text>
    </Stack>
  );
};

export default MoreProduct;
