import React from "react";
import {Text, Stack, Box, Icon, ListItem, OrderedList, StackDivider, Image} from "@chakra-ui/react";
import {GoLocation} from "react-icons/go";
import {FaMedal} from "react-icons/fa";

import reloj from "../../assets/time-positive.svg";
import message from "../../assets/message.svg";
import product from "../../../mock";

const SellerInfo = () => {
  return (
    <Stack border="1px solid rgba(0, 0, 0, 0.08)" margin="30px 0px" padding={2}>
      <Text margin="20px">Información sobre el vendedor</Text>
      <Stack direction="row">
        <Box>
          <Icon as={GoLocation} />
        </Box>
        <Stack spacing="0">
          <Text fontWeight="black">Ubicación</Text>
          <Stack>
            <Text color="gray.500" fontSize={15}>
              {product.seller_address.state.name}, {product.seller_address.state.name}
            </Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row">
        <Box>
          <Icon as={FaMedal} color="rgb(93, 198, 144)" />
        </Box>
        <Stack spacing="0">
          <Text color="rgb(93, 198, 144)" fontWeight="bold">
            MercadoLíder Platinum
          </Text>
          <Text color="gray.500" fontSize={15}>
            ¡Es uno de los mejores del sitio!
          </Text>
        </Stack>
      </Stack>

      {/* <ul>
        <ListItem />
      </ul> */}
      <Stack>
        <OrderedList direction="row" display="flex" listStyleType="none" margin="15px 0px">
          <ListItem backgroundColor="rgb(255, 240, 240)" height="10px" width="58px" />

          <ListItem
            backgroundColor="rgb(255, 245, 232);"
            height="10px"
            marginLeft="5px"
            width="58px"
          />

          <ListItem
            backgroundColor="rgb(255, 252, 218);"
            height="10px"
            marginLeft="5px"
            width="58px"
          />
          <ListItem
            backgroundColor="rgb(241, 253, 215);"
            height="10px"
            marginLeft="5px"
            width="58px"
          />
          <ListItem
            backgroundColor="rgb(57, 181, 74);"
            height="10px"
            marginLeft="5px"
            width="58px"
          />
        </OrderedList>
      </Stack>

      <Stack direction="row" divider={<StackDivider />} padding={4}>
        <Stack flex={1}>
          <Text color="gray.500" fontSize={25} textAlign="center">
            5504
          </Text>
          <Text color="gray.500" fontSize={13}>
            Ventas en los últimos 60 días
          </Text>
        </Stack>

        <Stack flex={1} textAlign="center">
          <Image height="28px" margin="0px auto" src={message} width="28px" />
          <Text color="gray.500" fontSize={13}>
            Brinda buena atención
          </Text>
        </Stack>

        <Stack flex={1} textAlign="center">
          <Image height="30px" margin="0px auto" src={reloj} width="30px" />
          <Text color="gray.500" fontSize={13}>
            Despacha sus productos a tiempo
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text color="secondary.500" fontSize={15} margin="20px 10px">
          Ver más datos de este vendedor
        </Text>
      </Stack>
    </Stack>
  );
};

export default SellerInfo;
