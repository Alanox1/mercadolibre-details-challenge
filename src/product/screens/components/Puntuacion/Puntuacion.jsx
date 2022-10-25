import React from "react";
import {Box, Heading, Stack, Text, Progress, Grid} from "@chakra-ui/react";

import product from "../../../mock";
import TabOpinions from "../TabOpinions/TabOpinions";

const Puntuacion = () => {
  const getRanking = (ranking) => {
    return "★".repeat(ranking).padEnd(5, "☆");
  };

  return (
    <Box m={8}>
      <Heading flex={1} fontSize="24px" fontWeight={400} mt={20}>
        Opiniones sobre {product.title}
      </Heading>
      <Stack alignItems="center" direction="row" gap={20} justifyContent="space-around" my={10}>
        <Box>
          <Text fontSize="64px" fontWeight={300} mb="-24px" textAlign="right">
            5.0
          </Text>
          <Text color="secondary.500" fontSize={40}>
            {getRanking(5)}
          </Text>
          <Text fontSize="14px">Promedio entre 4 opiniones</Text>
        </Box>
        <Box
          color="blackAlpha.700"
          display="flex"
          flexDir="column"
          fontWeight={200}
          gap={1}
          margin="0px 200px"
        >
          <Grid alignItems="center" templateColumns="1fr 2fr 1fr">
            <Text>5 estrellas</Text>
            <Progress bgColor="#E5E5E5" height="4px" value={100} width="173px" />
            <Text ml={2}>4</Text>
          </Grid>
          <Grid alignItems="center" templateColumns="1fr 2fr 1fr">
            <Text>4 estrellas</Text>
            <Progress bgColor="#E5E5E5" height="4px" value={0} width="173px" />
            <Text ml={2}>0</Text>
          </Grid>
          <Grid alignItems="center" templateColumns="1fr 2fr 1fr">
            <Text>3 estrellas</Text>
            <Progress bgColor="#E5E5E5" height="4px" value={0} width="173px" />
            <Text ml={2}>0</Text>
          </Grid>
          <Grid alignItems="center" templateColumns="1fr 2fr 1fr">
            <Text>2 estrellas</Text>
            <Progress bgColor="#E5E5E5" height="4px" value={0} width="173px" />
            <Text ml={2}>0</Text>
          </Grid>
          <Grid alignItems="center" templateColumns="1fr 2fr 1fr">
            <Text>1 estrellas</Text>
            <Progress bgColor="#E5E5E5" height="4px" value={0} width="173px" />
            <Text ml={2}>0</Text>
          </Grid>
        </Box>
      </Stack>
      <TabOpinions />
    </Box>
  );
};

export default Puntuacion;
