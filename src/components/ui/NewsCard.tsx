"use client";
import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi";
import type { NewsItem } from "@/data/site";

export const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <Stack
      spacing={0}
      bg="white"
      border="1px solid"
      borderColor="ink.100"
      rounded="2xl"
      overflow="hidden"
      h="full"
      transition="all 0.25s"
      cursor="pointer"
      role="group"
      _hover={{
        boxShadow: "0 18px 44px rgba(10,68,61,0.12)",
        transform: "translateY(-4px)",
      }}
    >
      <AspectRatio ratio={16 / 10}>
        <Box overflow="hidden">
          <Image
            src={item.image}
            alt={item.title}
            objectFit="cover"
            w="full"
            h="full"
            transition="transform 0.4s"
            _groupHover={{ transform: "scale(1.06)" }}
            fallbackSrc="/content.jpeg"
          />
        </Box>
      </AspectRatio>
      <Stack spacing={3} p={5} flex="1">
        <Flex justify="space-between" align="center">
          <Badge colorScheme="brand" rounded="full" px={3} py={1}>
            {item.category}
          </Badge>
          <Flex align="center" gap={1} color="ink.400" fontSize="xs">
            <FiCalendar /> {item.date}
          </Flex>
        </Flex>
        <Heading size="md" lineHeight={1.25} noOfLines={2}>
          {item.title}
        </Heading>
        <Text color="ink.500" fontSize="sm" noOfLines={3}>
          {item.excerpt}
        </Text>
      </Stack>
    </Stack>
  );
};
