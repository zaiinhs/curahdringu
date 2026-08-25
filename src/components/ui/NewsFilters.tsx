"use client";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export interface FilterSelectConfig {
  /** Nama filter untuk aksesibilitas, mis. "Sumber". */
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
}

interface NewsFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  selects: FilterSelectConfig[];
  resultCount: number;
}

export const NewsFilters = ({
  search,
  onSearchChange,
  selects,
  resultCount,
}: NewsFiltersProps) => {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="ink.100"
      rounded="2xl"
      p={{ base: 4, md: 5 }}
      mb={8}
    >
      <Flex direction={{ base: "column", lg: "row" }} gap={3}>
        <InputGroup flex="1">
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder="Cari judul atau ringkasan…"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            bg="ink.50"
            border="none"
            _focus={{ bg: "white", boxShadow: "outline" }}
          />
        </InputGroup>
        {selects.map((select) => (
          <Select
            key={select.label}
            aria-label={`Filter ${select.label}`}
            value={select.value}
            onChange={(event) => select.onChange(event.target.value)}
            maxW={{ lg: "180px" }}
            bg="white"
          >
            {select.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        ))}
      </Flex>
      <Text mt={3} fontSize="xs" color="ink.400">
        {resultCount} hasil ditemukan
      </Text>
    </Box>
  );
};
