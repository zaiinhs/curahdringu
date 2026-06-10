"use client";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Image,
  Heading,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { NAV_LINKS, SERVICES, VILLAGE } from "@/data/site";

const socials = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
];

export const FooterComponent = () => {
  return (
    <Box as="footer" bg="ink.900" color="whiteAlpha.800" mt={0}>
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 8, md: 10 }}>
          {/* Brand */}
          <Stack spacing={4}>
            <Flex align="center" gap={2.5}>
              <Image
                src="/logo.png"
                alt="Logo Desa"
                h="42px"
                w="auto"
                bg="white"
                rounded="full"
                p={1}
              />
              <Box lineHeight={1.2}>
                <Text fontWeight={800} color="white">
                  {VILLAGE.name}
                </Text>
                <Text fontSize="xs" color="brand.200">
                  {VILLAGE.regency}
                </Text>
              </Box>
            </Flex>
            <Text fontSize="sm" color="whiteAlpha.700">
              {VILLAGE.tagline}. Hadir untuk melayani warga dengan transparan dan
              ramah.
            </Text>
            <HStack spacing={3} pt={1}>
              {socials.map((s) => (
                <Box
                  key={s.label}
                  as="a"
                  href={s.href}
                  aria-label={s.label}
                  w={9}
                  h={9}
                  rounded="full"
                  bg="whiteAlpha.100"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.2s"
                  _hover={{ bg: "brand.500", color: "white", transform: "translateY(-2px)" }}
                >
                  <Icon as={s.icon} />
                </Box>
              ))}
            </HStack>
          </Stack>

          {/* Navigasi */}
          <Stack spacing={3}>
            <Heading size="sm" color="white">
              Navigasi
            </Heading>
            {NAV_LINKS.map((link) => (
              <Box
                key={link.href}
                as={NextLink}
                href={link.href}
                fontSize="sm"
                color="whiteAlpha.700"
                _hover={{ color: "brand.200", pl: 1 }}
                transition="all 0.2s"
              >
                {link.label}
              </Box>
            ))}
          </Stack>

          {/* Layanan */}
          <Stack spacing={3}>
            <Heading size="sm" color="white">
              Layanan
            </Heading>
            {SERVICES.slice(0, 5).map((s) => (
              <Box
                key={s.title}
                as={NextLink}
                href="/layanan"
                fontSize="sm"
                color="whiteAlpha.700"
                _hover={{ color: "brand.200", pl: 1 }}
                transition="all 0.2s"
              >
                {s.title}
              </Box>
            ))}
          </Stack>

          {/* Kontak */}
          <Stack spacing={3}>
            <Heading size="sm" color="white">
              Kontak
            </Heading>
            <HStack align="start" spacing={3} fontSize="sm">
              <Icon as={FiMapPin} color="brand.300" mt={1} />
              <Text color="whiteAlpha.700">{VILLAGE.address}</Text>
            </HStack>
            <HStack spacing={3} fontSize="sm">
              <Icon as={FiPhone} color="brand.300" />
              <Text color="whiteAlpha.700">{VILLAGE.phone}</Text>
            </HStack>
            <HStack spacing={3} fontSize="sm">
              <Icon as={FiMail} color="brand.300" />
              <Text color="whiteAlpha.700">{VILLAGE.email}</Text>
            </HStack>
            <HStack align="start" spacing={3} fontSize="sm">
              <Icon as={FiClock} color="brand.300" mt={1} />
              <Text color="whiteAlpha.700">{VILLAGE.hours}</Text>
            </HStack>
          </Stack>
        </SimpleGrid>

        <Divider my={8} borderColor="whiteAlpha.200" />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={3}
        >
          <Text fontSize="sm" color="whiteAlpha.600">
            © {new Date().getFullYear()} {VILLAGE.name}. Seluruh hak cipta
            dilindungi.
          </Text>
          <Text fontSize="sm" color="whiteAlpha.600">
            Dibuat dengan 💙 untuk warga {VILLAGE.shortName}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
