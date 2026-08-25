"use client";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { IS_ANNOUNCEMENTS_MOCK, type AnnouncementItem } from "@/data/site";

export const AnnouncementCard = ({ item }: { item: AnnouncementItem }) => {
  return (
    <Stack
      spacing={3}
      bg="white"
      border="1px solid"
      borderColor="ink.100"
      borderLeft="4px solid"
      borderLeftColor={IS_ANNOUNCEMENTS_MOCK ? "gray.300" : "brand.400"}
      rounded="2xl"
      p={5}
      h="full"
    >
      <Flex justify="space-between" align="center" gap={2}>
        <Flex align="center" gap={2}>
          <Badge colorScheme="orange" rounded="full" px={3} py={1}>
            {item.category}
          </Badge>
          {IS_ANNOUNCEMENTS_MOCK && (
            <Badge colorScheme="gray" rounded="full" px={3} py={1}>
              Contoh
            </Badge>
          )}
        </Flex>
        <Flex align="center" gap={1} color="ink.400" fontSize="xs" flexShrink={0}>
          <Icon as={FiCalendar} /> {item.date}
        </Flex>
      </Flex>
      <Heading size="sm" lineHeight={1.35}>
        {item.title}
      </Heading>
      <Text color="ink.500" fontSize="sm" flex="1">
        {item.excerpt}
      </Text>
      <Flex align="center" gap={1} color="ink.400" fontSize="xs">
        <Icon as={FiMapPin} /> {item.location}
      </Flex>
    </Stack>
  );
};
