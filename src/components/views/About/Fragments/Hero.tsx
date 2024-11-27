import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export const AboutHeroComponent = () => {
  const scrollToProfile = () => {
    const element = document.getElementById("profil-desa");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container maxW={"100%"} p={0} h="100vh">
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        position="relative"
        spacing={0}
        m={0}
      >
        <Image
          alt={"Foto Desa"}
          objectFit={"cover"}
          src={"/content.jpeg"}
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          zIndex={-1}
          filter="brightness(0.7)"
        />
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                color="white"
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "green.400",
                  zIndex: -1,
                }}
              >
                Desa Sejahtera
              </Text>
              <br />{" "}
              <Text color={"green.400"} as={"span"}>
                Membangun Bersama Rakyat
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
              Desa kami berkomitmen untuk memberikan pelayanan terbaik kepada
              masyarakat dengan mengedepankan transparansi, akuntabilitas, dan
              partisipasi aktif warga dalam pembangunan desa.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                onClick={scrollToProfile}
              >
                Profil Desa
              </Button>
              <Button rounded={"full"}>Visi & Misi</Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  );
};
