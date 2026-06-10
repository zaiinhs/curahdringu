"use client";
import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  Image,
  Text,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FiMessageSquare } from "react-icons/fi";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { NAV_LINKS, VILLAGE } from "@/data/site";

export const NavbarComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      w="100%"
      zIndex={1000}
      transition="all 0.3s ease"
      bg={scrolled ? "whiteAlpha.900" : "transparent"}
      backdropFilter={scrolled ? "saturate(180%) blur(12px)" : "none"}
      boxShadow={scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none"}
      borderBottom={scrolled ? "1px solid" : "none"}
      borderColor="blackAlpha.100"
    >
      <Container maxW="7xl">
        <Flex h={{ base: "64px", md: "72px" }} align="center" justify="space-between">
          {/* Brand */}
          <Flex
            as={NextLink}
            href="/"
            align="center"
            gap={2.5}
            _hover={{ opacity: 0.9 }}
          >
            <Image
              src="/logo.png"
              alt="Logo Desa Curah Dringu"
              h={{ base: "34px", md: "40px" }}
              w="auto"
              objectFit="contain"
            />
            <Box lineHeight={1.1}>
              <Text
                fontWeight={800}
                fontSize={{ base: "sm", md: "md" }}
                color={scrolled ? "ink.900" : "white"}
                textShadow={scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.4)"}
              >
                {VILLAGE.name}
              </Text>
              <Text
                fontSize="xs"
                color={scrolled ? "brand.600" : "whiteAlpha.900"}
                fontWeight={600}
                textShadow={scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.4)"}
              >
                {VILLAGE.district}
              </Text>
            </Box>
          </Flex>

          {/* Desktop nav */}
          <HStack spacing={1} display={{ base: "none", lg: "flex" }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.href}
                as={NextLink}
                href={link.href}
                variant="ghost"
                size="sm"
                fontWeight={isActive(link.href) ? 700 : 500}
                color={
                  scrolled
                    ? isActive(link.href)
                      ? "brand.600"
                      : "ink.700"
                    : "white"
                }
                textShadow={scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.4)"}
                _hover={{
                  bg: scrolled ? "brand.50" : "whiteAlpha.300",
                }}
              >
                {link.label}
              </Button>
            ))}
          </HStack>

          {/* CTA + mobile toggle */}
          <HStack spacing={2}>
            <Button
              as={NextLink}
              href="/kontak"
              leftIcon={<FiMessageSquare />}
              size="sm"
              colorScheme="sand"
              display={{ base: "none", sm: "inline-flex" }}
              boxShadow="0 6px 18px rgba(248,128,18,0.35)"
            >
              Lapor / Aspirasi
            </Button>
            <IconButton
              aria-label="Buka menu"
              icon={<HamburgerIcon w={5} h={5} />}
              variant="ghost"
              color={scrolled ? "ink.800" : "white"}
              display={{ base: "inline-flex", lg: "none" }}
              onClick={onOpen}
            />
          </HStack>
        </Flex>
      </Container>

      {/* Mobile drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={2} />
          <DrawerHeader borderBottomWidth="1px">
            <Flex align="center" gap={2}>
              <Image src="/logo.png" alt="Logo" h="32px" w="auto" />
              <Text fontWeight={800} fontSize="sm">
                {VILLAGE.name}
              </Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody py={4}>
            <Stack spacing={1}>
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.href}
                  as={NextLink}
                  href={link.href}
                  onClick={onClose}
                  variant={isActive(link.href) ? "solid" : "ghost"}
                  colorScheme="brand"
                  justifyContent="flex-start"
                  size="lg"
                  fontWeight={600}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                as={NextLink}
                href="/kontak"
                onClick={onClose}
                leftIcon={<FiMessageSquare />}
                colorScheme="sand"
                size="lg"
                mt={3}
              >
                Lapor / Aspirasi
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
