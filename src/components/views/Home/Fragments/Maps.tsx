import { Box, Text } from "@chakra-ui/react";

export const MapsComponent = () => {
  return (
    <Box p={10} bg={"gray.100"} borderRadius={"lg"}>
      <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"} mb={5}>
        Lokasi Desa Curah Dringu
      </Text>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7907.074474567588!2d113.10910336348222!3d-7.732694337705844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7b3e227a123b5%3A0xe550fa8829b59f97!2sCurahdringu%2C%20Kec.%20Tongas%2C%20Kabupaten%20Probolinggo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1732621614076!5m2!1sid!2sid"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};
