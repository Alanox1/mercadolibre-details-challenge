import React from "react";
import {Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text, Stack, Link} from "@chakra-ui/react";
import {AiOutlineLike, AiOutlineDislike, AiFillDislike, AiFillLike} from "react-icons/ai";
import {useState} from "react";

const TabOpinions = () => {
  const [like1, setLike1] = useState(false);
  const [dislike1, setDisike1] = useState(false);
  const [like2, setLike2] = useState(false);
  const [dislike2, setDislike2] = useState(false);
  const [like3, setLike3] = useState(false);
  const [dislike3, setDislike3] = useState(false);
  const getRanking = (ranking) => {
    return "★".repeat(ranking).padEnd(5, "☆");
  };

  return (
    <Box width="100%">
      <Tabs colorScheme="#3483fa" opacity="1" width="100%">
        <TabList display="grid" gridTemplateColumns="1fr 1fr 1fr">
          <Tab
            _active={{
              backgroundColor: "rgba(65, 137, 230, 0.15)",
            }}
            _selected={{
              color: "#3483fa",
              borderBottom: "2px solid #3483fa",
            }}
            fontSize="16px"
            fontWeight="700"
          >
            Todas
          </Tab>
          <Tab
            _active={{
              backgroundColor: "rgba(65, 137, 230, 0.15)",
            }}
            _selected={{
              color: "#3483fa",
              borderBottom: "2px solid #3483fa",
            }}
            fontSize="16px"
            fontWeight="700"
          >
            Positivas
          </Tab>
          <Tab
            _active={{
              backgroundColor: "rgba(65, 137, 230, 0.15)",
            }}
            _selected={{
              color: "#3483fa",
              borderBottom: "2px solid #3483fa",
            }}
            fontSize="16px"
            fontWeight="700"
          >
            Negativas
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel display="flex" flexDir="column" fontSize="16px" gap={6}>
            <Box>
              <Text color="secondary.600" fontSize={25}>
                {getRanking(5)}
              </Text>
              <Text fontWeight={600}>Hermoso excelente</Text>
              <Text>
                Hermoso es para el cumple de mi hija excelente.{" "}
                <Text as="span" color="blackAlpha.500" fontWeight={300}>
                  Hace 6 meses
                </Text>
              </Text>
              <Stack alignItems="center" direction="row" gap={5} my={2}>
                <Box
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  gap={2}
                  onClick={() => setLike1(!like1)}
                >
                  {like1 ? (
                    <AiFillLike style={{fontSize: "18px"}} />
                  ) : (
                    <AiOutlineLike style={{fontSize: "18px"}} />
                  )}
                  <Text>{like1 ? 1 : 0}</Text>
                </Box>
                <Box
                  alignItems="center"
                  display="flex"
                  gap={2}
                  onClick={() => setDisike1(!dislike1)}
                >
                  {dislike1 ? (
                    <AiFillDislike style={{fontSize: "18px"}} />
                  ) : (
                    <AiOutlineDislike style={{fontSize: "18px"}} />
                  )}
                  <Text>{dislike1 ? 1 : 0}</Text>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Text color="secondary.600" fontSize={25}>
                {getRanking(5)}
              </Text>
              <Text fontWeight={600}>Hermoso excelente</Text>
              <Text>
                Hermoso es para el cumple de mi hija excelente.{" "}
                <Text as="span" color="blackAlpha.500" fontWeight={300}>
                  Hace 6 meses
                </Text>
              </Text>

              <Stack alignItems="center" cursor="pointer" direction="row" gap={5} my={2}>
                <Box alignItems="center" display="flex" gap={2} onClick={() => setLike2(!like2)}>
                  {like2 ? <AiFillLike fontSize="18px" /> : <AiOutlineLike fontSize="18px" />}

                  <Text>{like2 ? 1 : 0}</Text>
                </Box>
                <Box
                  alignItems="center"
                  display="flex"
                  gap={2}
                  onClick={() => setDislike2(!dislike2)}
                >
                  {dislike2 ? (
                    <AiFillDislike fontSize="18px" />
                  ) : (
                    <AiOutlineDislike fontSize="18px" />
                  )}

                  <Text>{dislike2 ? 1 : 0}</Text>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Text color="secondary.600" fontSize={25}>
                {getRanking(5)}
              </Text>
              <Text fontWeight={600}>Hermoso excelente</Text>
              <Text>
                Hermoso es para el cumple de mi hija excelente.{" "}
                <Text as="span" color="blackAlpha.500" fontWeight={300}>
                  Hace 6 meses
                </Text>
              </Text>
              <Stack alignItems="center" direction="row" gap={5} my={2}>
                <Box
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  gap={2}
                  onClick={() => setLike3(!like3)}
                >
                  {like3 ? <AiFillLike fontSize="18px" /> : <AiOutlineLike fontSize="18px" />}

                  <Text>{like3 ? 1 : 0}</Text>
                </Box>
                <Box
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  gap={2}
                  onClick={() => setDislike3(!dislike3)}
                >
                  {dislike3 ? (
                    <AiFillDislike fontSize="18px" />
                  ) : (
                    <AiOutlineDislike fontSize="18px" />
                  )}

                  <Text>{dislike3 ? 1 : 0}</Text>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Link fontSize="sm">Ver todas las opiniones</Link>
            </Box>
          </TabPanel>
          <TabPanel display="flex" flexDir="column" fontSize="16px" gap={6}>
            <Box>
              <Text color="secondary.600" fontSize={25}>
                {getRanking(5)}
              </Text>
              <Text fontWeight={600}>Hermoso excelente</Text>
              <Text>
                Hermoso es para el cumple de mi hija excelente.{" "}
                <Text as="span" color="blackAlpha.500" fontWeight={300}>
                  Hace 6 meses
                </Text>
              </Text>
              <Stack alignItems="center" direction="row" gap={5} my={2}>
                <Box
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  gap={2}
                  onClick={() => setLike1(!like1)}
                >
                  {like1 ? <AiFillLike fontSize="18px" /> : <AiOutlineLike fontSize="18px" />}

                  <Text>{like1 ? 1 : 0}</Text>
                </Box>
                <Box
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  gap={2}
                  onClick={() => setDisike1(!dislike1)}
                >
                  {dislike1 ? (
                    <AiFillDislike fontSize="18px" />
                  ) : (
                    <AiOutlineDislike fontSize="18px" />
                  )}

                  <Text>{dislike1 ? 1 : 0}</Text>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Text color="secondary.600" fontSize={25}>
                {getRanking(5)}
              </Text>
              <Text fontWeight={600}>Hermoso excelente</Text>
              <Text>
                Hermoso es para el cumple de mi hija excelente.{" "}
                <Text as="span" color="blackAlpha.500" fontWeight={300}>
                  Hace 6 meses
                </Text>
              </Text>

              <Stack alignItems="center" direction="row" gap={5} my={2}>
                <Box
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  gap={2}
                  onClick={() => setLike2(!like2)}
                >
                  {like2 ? <AiFillLike fontSize="18px" /> : <AiOutlineLike fontSize="18px" />}

                  <Text>{like2 ? 1 : 0}</Text>
                </Box>
                <Box
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  gap={2}
                  onClick={() => setDislike2(!dislike2)}
                >
                  {dislike2 ? (
                    <AiFillDislike fontSize="18px" />
                  ) : (
                    <AiOutlineDislike fontSize="18px" />
                  )}

                  <Text>{dislike2 ? 1 : 0}</Text>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Text color="secondary.600" fontSize={25}>
                {getRanking(5)}
              </Text>
              <Text fontWeight={600}>Hermoso excelente</Text>
              <Text>
                Hermoso es para el cumple de mi hija excelente.{" "}
                <Text as="span" color="blackAlpha.500" fontWeight={300}>
                  Hace 6 meses
                </Text>
              </Text>
              <Stack alignItems="center" direction="row" gap={5} my={2}>
                <Box
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  gap={2}
                  onClick={() => setLike3(!like3)}
                >
                  {like3 ? <AiFillLike fontSize="18px" /> : <AiOutlineLike fontSize="18px" />}

                  <Text>{like3 ? 1 : 0}</Text>
                </Box>
                <Box
                  alignItems="center"
                  cursor="pointer"
                  display="flex"
                  gap={2}
                  onClick={() => setDislike3(!dislike3)}
                >
                  {dislike3 ? (
                    <AiFillDislike fontSize="18px" />
                  ) : (
                    <AiOutlineDislike fontSize="18px" />
                  )}

                  <Text>{dislike3 ? 1 : 0}</Text>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Link fontSize="sm">Ver todas las opiniones</Link>
            </Box>
          </TabPanel>
          <TabPanel>
            <Stack alignItems="center" justifyContent="center" mt={14}>
              <Text>¡Nada por acá!</Text>
              <Text fontSize="15px" fontWeight={300}>
                Este producto no tiene
                <br />
                opiniones negativas.
              </Text>
            </Stack>
            <Box>
              <Link fontSize="sm">Ver todas las opiniones</Link>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TabOpinions;
