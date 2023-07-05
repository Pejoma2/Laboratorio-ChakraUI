import { Heading, Button, Flex, Stack, Box } from "@chakra-ui/react";
//import bgImage from "../images/image.png";

export default function Header() {
  return (
    <Box
      h="40vh"
      //bgImage={`url(${bgImage})`}
      bgImage={`url("https://i.pinimg.com/originals/55/78/bb/5578bb70d5a0b6177f84ae68aa5fd458.jpg")`}
      //bgImage={`url("https://img.freepik.com/foto-gratis/grupo-silueta-hombres-montando-bicicleta-al-atardecer_36326-382.jpg?size=626&ext=jpg")`}
      backgroundPosition="center"
      //bgPositionY="500px"
      bgRepeat="no-repeat"
      bgSize="cover"
      //bgAttachment="fixed"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="100%"
        //bg="rgb (0 0 0/ 50%)"
        p={["0 10%", null, "0 20%"]}
      >
        <Heading
          color="white"
          textAlign="center"
          fontWeight="light"
          letterSpacing="5px"
        >
          DOMINA EL TERRENO
        </Heading>

        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing="40px"
          mt="30px"
          w={["100%", null, "auto"]}
        >
          <Button
            variant="outline"
            size="lg"
            fontWeight="light"
            borderRadius="0px"
            color="white"
            letterSpacing="2px"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            VER DETALLES
          </Button>

          <Button
            variant="outline"
            size="lg"
            fontWeight="light"
            borderRadius="0px"
            color="white"
            letterSpacing="2px"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            VER VIDEO
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
