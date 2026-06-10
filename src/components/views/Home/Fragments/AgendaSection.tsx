"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiClock, FiMapPin } from "react-icons/fi";
import { AGENDA } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const AgendaSection = () => {
  return (
    <Box bg="ink.50" py={{ base: 14, md: 20 }}>
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Agenda"
          title="Kegiatan Terdekat di Desa"
          subtitle="Catat tanggalnya dan ikut berpartisipasi membangun desa bersama."
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          {AGENDA.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1} h="full">
              <Flex
                bg="white"
                border="1px solid"
                borderColor="ink.100"
                rounded="2xl"
                p={5}
                gap={4}
                h="full"
                align="start"
                transition="all 0.25s"
                _hover={{
                  borderColor: "brand.300",
                  boxShadow: "0 14px 36px rgba(10,68,61,0.10)",
                }}
              >
                <Stack
                  spacing={0}
                  bg="brand.500"
                  color="white"
                  rounded="xl"
                  px={4}
                  py={3}
                  align="center"
                  minW="64px"
                >
                  <Text fontSize="2xl" fontWeight={800} lineHeight={1}>
                    {a.day}
                  </Text>
                  <Text fontSize="sm" fontWeight={600} textTransform="uppercase">
                    {a.month}
                  </Text>
                </Stack>
                <Stack spacing={2} flex="1">
                  <Heading size="sm" lineHeight={1.3}>
                    {a.title}
                  </Heading>
                  <HStack spacing={2} color="ink.500" fontSize="sm">
                    <Icon as={FiClock} color="brand.500" />
                    <Text>{a.time}</Text>
                  </HStack>
                  <HStack spacing={2} color="ink.500" fontSize="sm">
                    <Icon as={FiMapPin} color="brand.500" />
                    <Text>{a.place}</Text>
                  </HStack>
                </Stack>
              </Flex>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
