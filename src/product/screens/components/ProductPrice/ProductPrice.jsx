import React, {useState} from "react";
import {Text, Box, Stack, Divider, Icon, Button, Select} from "@chakra-ui/react";
import {FiHeart} from "react-icons/fi";
import {HiOutlineTruck} from "react-icons/hi";
import {AiOutlineTrophy} from "react-icons/ai";
import {HiOutlineShieldCheck} from "react-icons/hi";

import product from "../../../mock";

const ProductPrice = () => {
  const formattedPrice = new Intl.NumberFormat("es-AR").format(product.price);
  const paymentTwelveMonths = Math.trunc(product.price / 6);
  const [heart, setHeart] = useState(false);
  const getRanking = (ranking) => {
    return "★".repeat(ranking).padEnd(5, "☆");
  };

  const colorHeart = heart ? "secondary.500" : "secondary.900";

  return (
    <Stack border="1px solid rgba(0, 0, 0, 0.08)" flex={0.3} padding={4}>
      <Stack color="gray.400" direction="row" fontSize={14} justifyContent="start">
        <Text>Nuevo</Text>
        <Divider color="red" orientation="vertical" />
        <Text>50 vendidos</Text>
      </Stack>
      <Stack alignItems="start" direction="row">
        <Text flex={90} fontSize="20px" fontWeight="bold">
          {product.title}
        </Text>

        <Icon
          as={FiHeart}
          color={colorHeart}
          cursor="pointer"
          flex={10}
          height="21px"
          width="21px"
          onClick={() => setHeart(!heart)}
        />
      </Stack>
      <Stack alignItems="center" direction="row">
        <Text color="secondary.500" fontSize={25}>
          {getRanking(3)}
        </Text>
        <Text>6 opiniones</Text>
      </Stack>

      <Stack alignItems="center" direction="row">
        <Text backgroundColor="rgb(255, 119, 51)" color="white" fontSize={12}>
          MÁS VENDIDO
        </Text>
        <Text color="secondary.500" fontSize={13}>
          9 en peluches
        </Text>
      </Stack>

      <Stack>
        <Text fontSize={35} fontWeight="light" margin="0px" padding={0}>
          $ {formattedPrice}
        </Text>
        <Text marginTop="0px" padding={0}>
          en 6x {paymentTwelveMonths}
        </Text>
        <Text color="secondary.500" fontSize={15}>
          Ver los medios de pago
        </Text>
      </Stack>
      <Stack direction="row">
        <Box>
          <Icon as={HiOutlineTruck} color="#00a650" height="24px" width="24px" />
        </Box>
        <Stack>
          <Text color="#00a650">Llega gratis el lunes</Text>
          <Text color="secondary.400" fontSize={15}>
            Ver más formas de pago
          </Text>
        </Stack>
      </Stack>

      <Stack direction="row">
        <Box>
          <Icon as={HiOutlineTruck} color="#00a650" height="24px" width="24px" />
        </Box>
        <Stack>
          <Text color="#00a650">Devolución gratis</Text>
          <Stack fontSize={15}>
            <Text color="gray.500">Tenés 30 días desde que lo recibís</Text>
            <Text color="secondary.400">Conocer más</Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Text fontSize={17} fontWeight="bold" marginTop="25px">
          Stock disponible
        </Text>
      </Stack>

      <Stack alignItems="center" direction="row">
        <Text margin="16px 0px">Cantidad:</Text>
        <Select border="none" placeholder="1" size="xs">
          <option value="option1">2</option>
          <option value="option2">3</option>
          <option value="option3">4</option>
          <option value="option3">5</option>
          <option value="option3">6</option>
        </Select>
        <span style={{fontSize: "15px", color: "gray"}}>13 disponibles</span>
      </Stack>
      <Stack>
        <Button backgroundColor="secondary.400" color="white" padding={6} spacing={40}>
          Comprar Ahora
        </Button>
        <Button backgroundColor="rgba(65,137,230,.15)" color="secondary.400" padding={6}>
          Agregar al carrito
        </Button>
      </Stack>

      <Stack color="gray.500" direction="column" fontSize={14}>
        <Stack direction="row" marginTop="15px">
          <Box>
            <Icon as={HiOutlineShieldCheck} height="20px" width="20px" />
          </Box>
          <Stack>
            <Text>
              <Text as="span" color="secondary.400">
                Compra Protegida,
              </Text>{" "}
              recibí tu producto que esperabas o te devolvemos tu dinero.
            </Text>
          </Stack>
        </Stack>
        <Stack color="gray.500" direction="row">
          <Box>
            <Icon as={AiOutlineTrophy} height="20px" width="20px" />
          </Box>
          <Stack>
            <Text>
              <Text as="span" color="secondary.400">
                Mercado Puntos.
              </Text>{" "}
              Sumás 135 puntos.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductPrice;
