import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function HeroComponent() {
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
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Show me more
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
