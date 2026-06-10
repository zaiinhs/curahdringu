"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SERVICES } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const ServicesPreview = () => {
  return (
    <Box bg="white" py={{ base: 14, md: 20 }}>
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Pelayanan Warga"
          title="Urus Administrasi Jadi Lebih Mudah"
          subtitle="Pilih layanan yang kamu butuhkan. Lihat persyaratan, lalu kunjungi kantor desa tanpa bingung."
        />
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08} h="full">
              <Stack
                as={NextLink}
                href="/layanan"
                spacing={4}
                bg="white"
                border="1px solid"
                borderColor="ink.100"
                rounded="2xl"
                p={6}
                h="full"
                transition="all 0.25s"
                _hover={{
                  borderColor: "brand.300",
                  boxShadow: "0 16px 40px rgba(10,68,61,0.10)",
                  transform: "translateY(-4px)",
                }}
                role="group"
              >
                <Flex
                  w={12}
                  h={12}
                  rounded="xl"
                  bg="brand.50"
                  color="brand.600"
                  align="center"
                  justify="center"
                  transition="all 0.25s"
                  _groupHover={{ bg: "brand.500", color: "white" }}
                >
                  <Icon as={s.icon} boxSize={6} />
                </Flex>
                <Box>
                  <Heading size="md" mb={1}>
                    {s.title}
                  </Heading>
                  <Text color="ink.500" fontSize="sm">
                    {s.desc}
                  </Text>
                </Box>
                <Flex
                  align="center"
                  gap={1}
                  color="brand.600"
                  fontWeight={600}
                  fontSize="sm"
                  mt="auto"
                >
                  Lihat syarat <Icon as={FiArrowRight} />
                </Flex>
              </Stack>
            </Reveal>
          ))}
        </SimpleGrid>
        <Flex justify="center" mt={10}>
          <Button
            as={NextLink}
            href="/layanan"
            size="lg"
            variant="outline"
            colorScheme="brand"
            rightIcon={<FiArrowRight />}
          >
            Lihat Semua Layanan
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
