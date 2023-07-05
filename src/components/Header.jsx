import { Heading, Button, Flex, Stack, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      h={{ xsm: "60vh", md: "40vh" }}
      bgImage={`url("https://i.pinimg.com/originals/55/78/bb/5578bb70d5a0b6177f84ae68aa5fd458.jpg")`}
      backgroundPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="100%"
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
          direction={{ xsm: "column", md: "row" }}
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
