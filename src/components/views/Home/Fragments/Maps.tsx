"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { VILLAGE } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const infos = [
  { icon: FiMapPin, label: "Alamat", value: VILLAGE.address },
  { icon: FiPhone, label: "Telepon", value: VILLAGE.phone },
  { icon: FiMail, label: "Email", value: VILLAGE.email },
  { icon: FiClock, label: "Jam Layanan", value: VILLAGE.hours },
];

export const MapsComponent = () => {
  return (
    <Box id="lokasi" bg="white" py={{ base: 14, md: 20 }} scrollMarginTop="80px">
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Lokasi"
          title="Temukan Kantor Desa Kami"
          subtitle="Berada di tepi pantai Selat Madura, mudah dijangkau dari pusat Kecamatan Tongas."
        />
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={6}
          align="stretch"
        >
          <Stack spacing={4} flex={{ lg: "0 0 360px" }}>
            {infos.map((info) => (
              <HStack
                key={info.label}
                align="start"
                spacing={4}
                bg="ink.50"
                rounded="xl"
                p={5}
              >
                <Flex
                  w={11}
                  h={11}
                  rounded="lg"
                  bg="brand.500"
                  color="white"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={info.icon} boxSize={5} />
                </Flex>
                <Box>
                  <Text fontWeight={700} fontSize="sm">
                    {info.label}
                  </Text>
                  <Text color="ink.500" fontSize="sm">
                    {info.value}
                  </Text>
                </Box>
              </HStack>
            ))}
          </Stack>
          <Box
            flex="1"
            rounded="2xl"
            overflow="hidden"
            border="1px solid"
            borderColor="ink.100"
            minH={{ base: "320px", lg: "auto" }}
          >
            <iframe
              src={VILLAGE.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Desa Curah Dringu"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
