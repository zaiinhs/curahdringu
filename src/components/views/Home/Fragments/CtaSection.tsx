"use client";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiMessageSquare, FiPhone } from "react-icons/fi";
import { VILLAGE } from "@/data/site";

export const CtaSection = () => {
  return (
    <Box py={{ base: 12, md: 16 }} bg="white">
      <Container maxW="7xl">
        <Box
          position="relative"
          overflow="hidden"
          rounded="3xl"
          bgGradient="linear(to-br, brand.600, brand.800)"
          px={{ base: 6, md: 14 }}
          py={{ base: 10, md: 16 }}
        >
          <Box
            position="absolute"
            top="-40px"
            right="-40px"
            w="220px"
            h="220px"
            rounded="full"
            bg="sand.400"
            opacity={0.2}
          />
          <Box
            position="absolute"
            bottom="-60px"
            left="-30px"
            w="200px"
            h="200px"
            rounded="full"
            bg="brand.300"
            opacity={0.2}
          />
          <Stack spacing={5} maxW="2xl" position="relative">
            <Heading color="white" fontSize={{ base: "2xl", md: "4xl" }}>
              Punya keluhan, ide, atau aspirasi untuk desa?
            </Heading>
            <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }}>
              Suaramu penting. Sampaikan langsung ke pemerintah desa — kami
              dengarkan dan tindak lanjuti dengan terbuka.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Button
                as={NextLink}
                href="/kontak"
                size="lg"
                colorScheme="sand"
                leftIcon={<FiMessageSquare />}
                boxShadow="0 10px 30px rgba(248,128,18,0.4)"
              >
                Kirim Aspirasi
              </Button>
              <Button
                as="a"
                href={`tel:${VILLAGE.phone}`}
                size="lg"
                variant="outline"
                color="white"
                borderColor="whiteAlpha.700"
                leftIcon={<FiPhone />}
                _hover={{ bg: "whiteAlpha.200" }}
              >
                {VILLAGE.phone}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
