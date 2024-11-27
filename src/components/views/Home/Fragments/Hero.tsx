"use client";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function HeroComponent() {
  const router = useRouter();

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://1.bp.blogspot.com/-fLCRyiKOEow/XloBPPmZzbI/AAAAAAAAR7U/r8gF89GCJPUPjO7TV1euLIm9vUVd_PSlwCLcBGAsYHQ/w1200-h630-p-k-no-nu/WhatsApp%2BImage%2B2020-02-29%2Bat%2B12.38.24%2BPM%25281%2529.jpeg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          maxW={"2xl"}
          align={{ base: "flex-start", md: "center" }}
          spacing={6}
        >
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "4xl", md: "7xl" })}
            textAlign={"center"}
            textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
            letterSpacing={"wide"}
            // textTransform={"uppercase"}
          >
            Selamat Datang di Website Resmi Desa Curah Dringu
          </Text>
          <Text
            color={"white"}
            fontSize={useBreakpointValue({ base: "md", md: "xl" })}
          >
            Kecamatan Tongas, Kabupaten Probolinggo.
          </Text>

          <Stack direction={"row"} w="100%" justifyContent={"center"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              onClick={() => router.push("/about")}
            >
              Selengkapnya
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
