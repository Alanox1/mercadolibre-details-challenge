import React from "react";
import {Container, Stack, Box, Image, Text, Input, Icon, StackDivider} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {FiPrinter} from "react-icons/fi";
import {GoLocation} from "react-icons/go";
import {AiOutlineShoppingCart} from "react-icons/ai";

import logo from "../assets/logo.png";

import Routes from "./routes";

const App = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={2}>
        <Container maxWidth="container.xl">
          <Stack spacing={3}>
            <Stack direction="row" flex={1} justifyContent="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Image objectFit="contain" src={logo} />
                <Stack
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="sm"
                  boxShadow="sm"
                  direction="row"
                  divider={<StackDivider />}
                  maxWidth={600}
                  padding={2}
                  width="100%"
                >
                  <Input
                    paddingX={2}
                    placeholder="Buscar productos, marcas y más..."
                    variant="unstyled"
                  />
                  <Icon as={AiOutlineSearch} color="gray.400" height={5} width={5} />
                </Stack>
              </Stack>
              <Stack alignItems="center" color="blackAlpha.700" direction="row" spacing={3}>
                <Icon as={FiPrinter} height={8} width={8} />
                <Text _hover={{color: "blue"}} fontSize="lg" fontWeight="500" transition=".2s">
                  Compra tu Point y QR a $189
                </Text>
              </Stack>
            </Stack>
            <Stack alignItems="baseline" direction="row" justifyContent="space-between">
              <Stack alignItems="baseline" direction="row" spacing="12">
                <Stack alignItems="center" direction="row" flex={1} spacing={1}>
                  <Icon as={GoLocation} height={6} width={6} />
                  <Stack spacing={0}>
                    <Text color="blackAlpha.700" fontSize="xs" lineHeight="normal">
                      Enviar a
                    </Text>
                    <Text fontSize="sm" lineHeight="normal">
                      Capital Federal
                    </Text>
                  </Stack>
                </Stack>
                <Stack color="blackAlpha.700" direction="row" fontSize="sm" spacing={5}>
                  <Text>Categorias</Text>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
              </Stack>
              <Stack direction="row" fontSize="sm" spacing={6}>
                <Text>Creá tu cuenta</Text>
                <Text>Ingresá</Text>
                <Text>Mis Compras</Text>
                <Icon as={AiOutlineShoppingCart} height={6} width={6} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;
