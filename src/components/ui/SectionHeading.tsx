"use client";
import { Badge, Heading, Stack, Text } from "@chakra-ui/react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
}

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <Stack
      spacing={3}
      textAlign={align === "center" ? "center" : "left"}
      align={align === "center" ? "center" : "flex-start"}
      maxW={align === "center" ? "2xl" : "full"}
      mx={align === "center" ? "auto" : 0}
      mb={{ base: 8, md: 12 }}
    >
      {eyebrow && (
        <Badge
          colorScheme="brand"
          variant="subtle"
          rounded="full"
          px={3}
          py={1}
          textTransform="uppercase"
          letterSpacing="wide"
          fontSize="xs"
        >
          {eyebrow}
        </Badge>
      )}
      <Heading fontSize={{ base: "2xl", md: "4xl" }} lineHeight={1.15}>
        {title}
      </Heading>
      {subtitle && (
        <Text color="ink.500" fontSize={{ base: "md", md: "lg" }}>
          {subtitle}
        </Text>
      )}
    </Stack>
  );
};
