import React from "react";
import {Stack, Text, Divider, Icon, Box} from "@chakra-ui/react";
import {MdKeyboardArrowRight} from "react-icons/md";
import {AiFillLinkedin} from "react-icons/ai";
import {useEffect} from "react";
import {AiFillGithub} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";

import Gallery from "./components/Gallery/Gallery";
import MoreProduct from "./components/MoreProduct/More.Product";
import ProductPrice from "./components/ProductPrice/ProductPrice";
import SellerInfo from "./components/SellerInfo/SellerInfo";
import ProductFeature from "./components/ProductFeature/ProductFeature";
import ProductDescription from "./components/ProductDescription/ProductDescriptions";
import FreeReturn from "./components/FreeReturn.jsx/FreeReturn";
import Warranty from "./components/Warranty/Warranty";
import ProductPromoted from "./components/ProductPromoted/ProductPromoted";
import QuestionsAndAnswers from "./components/QuestionsAndAnsers/QuestionsAnsAsnwers";
import Puntuacion from "./components/Puntuacion/Puntuacion";

const DetailsScreen = () => {
  const mostrar = () => {
    swal({
      title: "¡Atención!",
      text: "Este sitio web es un clon utilizado para la práctica de front-end, no debe ser tomado como la página real de mercado libre, abajo encontrarán mis redes",
      icon: "warning",
    });
  };

  useEffect(mostrar, []);

  return (
    <Stack>
      <Stack>
        <Text color="blackAlpha.900" fontSize="sm" padding={2}>
          <b>Tambien puede interesarte:</b> peluches gigantes - mikecrack - disney - peluches
        </Text>
      </Stack>
      <Stack direction="row" fontSize={15} justifyContent="space-between">
        <Stack direction="row">
          <Stack direction="row">
            <Text>Volver al listado</Text>
            <Divider color="gray.500" orientation="vertical" />
          </Stack>
          <Stack alignItems="center" color="secondary.500" direction="row">
            <Text>Juegos y jugetes</Text>
            <Icon as={MdKeyboardArrowRight} color="gray.500" />
            <Text>Peluches</Text>
          </Stack>
        </Stack>
        <Stack color="secondary.500" direction="row">
          <Text>Compartir</Text>
          <Divider orientation="vertical" />
          <Text>Vender uno igual</Text>
        </Stack>
      </Stack>
      <Stack backgroundColor="white" direction="row" padding={2}>
        <Box backgroundColor="white" flex={70}>
          <Gallery />
          <MoreProduct />
          <ProductFeature />
          <ProductDescription />
          <QuestionsAndAnswers />
          <Puntuacion />
        </Box>

        <Box flex={30}>
          <ProductPrice />
          <SellerInfo />
          <FreeReturn />
          <Warranty />
          <ProductPromoted />
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="center">
        <a
          href="https://www.linkedin.com/in/alan-magliolini-598522232/"
          rel="noreferrer"
          style={{fontSize: "50px"}}
          target="_blank"
        >
          <Icon as={AiFillLinkedin} />
        </a>
        <a
          href="https://github.com/Alanox1"
          rel="noreferrer"
          style={{fontSize: "50px"}}
          target="_blank"
        >
          <Icon as={AiFillGithub} />
        </a>
        <a
          href="https://twitter.com/BosteroBJ_"
          rel="noreferrer"
          style={{fontSize: "50px"}}
          target="_blank"
        >
          <Icon as={AiOutlineTwitter} />
        </a>
      </Stack>
    </Stack>
  );
};

export default DetailsScreen;
