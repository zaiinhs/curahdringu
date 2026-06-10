"use client";
import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { STATS } from "@/data/site";
import { CountUp } from "@/components/ui/CountUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const StatsComponent = () => {
  return (
    <Box bg="brand.900" color="white" py={{ base: 14, md: 20 }}>
      <Container maxW="7xl">
        <SectionHeading
          eyebrow="Desa dalam Angka"
          title="Potret Curah Dringu Hari Ini"
        />
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 4, md: 8 }}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <Stack
                spacing={1}
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                rounded="2xl"
                p={{ base: 5, md: 7 }}
                textAlign="center"
                h="full"
                transition="all 0.3s"
                _hover={{ bg: "whiteAlpha.200", transform: "translateY(-4px)" }}
              >
                <CountUp
                  end={s.value}
                  suffix={s.suffix}
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight={800}
                  color="sand.300"
                  lineHeight={1}
                />
                <Text fontWeight={700} fontSize={{ base: "sm", md: "md" }}>
                  {s.label}
                </Text>
                <Text fontSize="xs" color="whiteAlpha.700">
                  {s.helper}
                </Text>
              </Stack>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
