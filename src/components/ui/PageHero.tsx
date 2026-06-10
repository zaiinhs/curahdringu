"use client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  current: string;
}

export const PageHero = ({ title, subtitle, current }: PageHeroProps) => {
  return (
    <Box
      bgGradient="linear(to-br, brand.700, brand.900)"
      color="white"
      pt={{ base: 28, md: 36 }}
      pb={{ base: 12, md: 16 }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-60px"
        right="-40px"
        w="260px"
        h="260px"
        rounded="full"
        bg="whiteAlpha.100"
      />
      <Container maxW="7xl" position="relative">
        <Breadcrumb
          fontSize="sm"
          color="whiteAlpha.800"
          separator="/"
          mb={4}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href="/">
              Beranda
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Text color="sand.300" fontWeight={600}>
              {current}
            </Text>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading fontSize={{ base: "3xl", md: "5xl" }} maxW="3xl">
          {title}
        </Heading>
        {subtitle && (
          <Text
            mt={4}
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.900"
            maxW="2xl"
          >
            {subtitle}
          </Text>
        )}
      </Container>
    </Box>
  );
};
