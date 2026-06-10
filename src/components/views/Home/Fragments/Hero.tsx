"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { QUICK_ACTIONS, VILLAGE } from "@/data/site";

export default function HeroComponent() {
  return (
    <Box
      position="relative"
      minH={{ base: "92vh", md: "100vh" }}
      display="flex"
      alignItems="center"
      backgroundImage="linear-gradient(to bottom, rgba(10,68,61,0.55), rgba(10,68,61,0.85)), url('/content.jpeg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment={{ base: "scroll", md: "fixed" }}
    >
      <Container maxW="7xl" pt={{ base: 28, md: 24 }} pb={{ base: 12, md: 16 }}>
        <Stack spacing={{ base: 6, md: 8 }} maxW="3xl">
          <HStack
            spacing={2}
            bg="whiteAlpha.200"
            backdropFilter="blur(8px)"
            border="1px solid"
            borderColor="whiteAlpha.300"
            rounded="full"
            px={4}
            py={2}
            w="fit-content"
          >
            <Box w={2} h={2} rounded="full" bg="sand.400" />
            <Text color="white" fontSize="sm" fontWeight={600}>
              Desa Pesisir • {VILLAGE.district}, {VILLAGE.regency}
            </Text>
          </HStack>

          <Heading
            color="white"
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={1.1}
            textShadow="0 2px 24px rgba(0,0,0,0.35)"
          >
            Selamat Datang di{" "}
            <Text as="span" color="sand.300">
              {VILLAGE.name}
            </Text>
          </Heading>

          <Text
            color="whiteAlpha.900"
            fontSize={{ base: "md", md: "xl" }}
            maxW="2xl"
            textShadow="0 1px 12px rgba(0,0,0,0.4)"
          >
            {VILLAGE.tagline}. Akses layanan administrasi, informasi terkini, dan
            potensi desa kami — semua dalam satu genggaman.
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
            <Button
              as={NextLink}
              href="/layanan"
              size="lg"
              colorScheme="sand"
              rightIcon={<FiArrowRight />}
              boxShadow="0 10px 30px rgba(248,128,18,0.4)"
            >
              Mulai Layanan
            </Button>
            <Button
              as={NextLink}
              href="/profil"
              size="lg"
              variant="outline"
              color="white"
              borderColor="whiteAlpha.700"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Tentang Desa
            </Button>
          </Stack>

          {/* Quick actions */}
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={3}
            pt={{ base: 4, md: 8 }}
            maxW="2xl"
          >
            {QUICK_ACTIONS.map((qa) => (
              <Flex
                key={qa.label}
                as={NextLink}
                href={qa.href}
                direction="column"
                align="center"
                gap={2}
                bg="whiteAlpha.200"
                backdropFilter="blur(8px)"
                border="1px solid"
                borderColor="whiteAlpha.300"
                rounded="xl"
                p={4}
                transition="all 0.2s"
                _hover={{ bg: "whiteAlpha.400", transform: "translateY(-3px)" }}
              >
                <Icon as={qa.icon} boxSize={6} color="sand.300" />
                <Text color="white" fontSize="sm" fontWeight={600} textAlign="center">
                  {qa.label}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
