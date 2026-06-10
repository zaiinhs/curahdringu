"use client";
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { POTENSI } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const PotensiSection = () => {
  return (
    <Box bg="white" py={{ base: 14, md: 20 }}>
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Potensi Desa"
          title="Kekayaan Pesisir & Karya Warga"
          subtitle="Dari hasil laut hingga destinasi senja — inilah yang membuat Curah Dringu istimewa."
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {POTENSI.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} h="full">
              <Box
                position="relative"
                rounded="2xl"
                overflow="hidden"
                h={{ base: "260px", md: "360px" }}
                role="group"
                cursor="pointer"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  objectFit="cover"
                  w="full"
                  h="full"
                  transition="transform 0.5s"
                  _groupHover={{ transform: "scale(1.08)" }}
                  fallbackSrc="/content.jpeg"
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-t, blackAlpha.800, blackAlpha.300, transparent)"
                />
                <Stack
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={6}
                  spacing={2}
                >
                  <Tag
                    w="fit-content"
                    colorScheme="sand"
                    rounded="full"
                    fontWeight={700}
                  >
                    {p.tag}
                  </Tag>
                  <Heading size="md" color="white">
                    {p.title}
                  </Heading>
                  <Text
                    color="whiteAlpha.900"
                    fontSize="sm"
                    opacity={0.9}
                    noOfLines={2}
                  >
                    {p.desc}
                  </Text>
                </Stack>
              </Box>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
