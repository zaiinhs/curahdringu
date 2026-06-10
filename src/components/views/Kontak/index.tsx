"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { VILLAGE } from "@/data/site";

const infos = [
  { icon: FiMapPin, label: "Alamat", value: VILLAGE.address },
  { icon: FiPhone, label: "Telepon", value: VILLAGE.phone },
  { icon: FiMail, label: "Email", value: VILLAGE.email },
  { icon: FiClock, label: "Jam Layanan", value: VILLAGE.hours },
];

const CATEGORIES = ["Pengaduan", "Aspirasi / Saran", "Pertanyaan Layanan", "Lainnya"];

export const KontakView = () => {
  const toast = useToast();
  const [form, setForm] = useState({
    name: "",
    contact: "",
    category: CATEGORIES[0],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      toast({
        title: "Lengkapi data dulu ya",
        description: "Nama dan pesan wajib diisi.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    setSubmitting(true);
    // Simulasi pengiriman (belum terhubung backend).
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Terima kasih! 🙏",
        description:
          "Pesanmu sudah kami terima. Pemerintah desa akan menindaklanjuti secepatnya.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setForm({ name: "", contact: "", category: CATEGORIES[0], message: "" });
    }, 900);
  };

  return (
    <Layout
      title="Kontak & Pengaduan"
      description="Sampaikan pengaduan, aspirasi, atau pertanyaan kepada Pemerintah Desa Curah Dringu."
    >
      <PageHero
        current="Kontak"
        title="Hubungi & Sampaikan Aspirasimu"
        subtitle="Kami terbuka untuk setiap masukan. Suaramu membantu desa menjadi lebih baik."
      />

      <Box bg="white" py={{ base: 14, md: 20 }}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 14 }}>
            {/* Info */}
            <Stack spacing={6}>
              <Heading size="lg">Informasi Kontak</Heading>
              <Text color="ink.600">
                Datang langsung ke kantor desa atau hubungi kami melalui kanal di
                bawah ini pada jam pelayanan.
              </Text>
              <Stack spacing={4}>
                {infos.map((info) => (
                  <HStack key={info.label} align="start" spacing={4}>
                    <Flex
                      w={11}
                      h={11}
                      rounded="lg"
                      bg="brand.50"
                      color="brand.600"
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      <Icon as={info.icon} boxSize={5} />
                    </Flex>
                    <Box>
                      <Text fontWeight={700} fontSize="sm">
                        {info.label}
                      </Text>
                      <Text color="ink.500" fontSize="sm">
                        {info.value}
                      </Text>
                    </Box>
                  </HStack>
                ))}
              </Stack>
              <Box
                rounded="2xl"
                overflow="hidden"
                border="1px solid"
                borderColor="ink.100"
                h="240px"
              >
                <iframe
                  src={VILLAGE.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Desa Curah Dringu"
                />
              </Box>
            </Stack>

            {/* Form */}
            <Box
              as="form"
              onSubmit={handleSubmit}
              bg="ink.50"
              rounded="3xl"
              p={{ base: 6, md: 8 }}
              border="1px solid"
              borderColor="ink.100"
            >
              <Heading size="lg" mb={2}>
                Kirim Pesan
              </Heading>
              <Text color="ink.500" fontSize="sm" mb={6}>
                Isi formulir berikut. Kolom bertanda * wajib diisi.
              </Text>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel fontSize="sm">Nama Lengkap</FormLabel>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nama kamu"
                    bg="white"
                    rounded="xl"
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">No. HP / Email</FormLabel>
                  <Input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="Agar kami bisa membalas (opsional)"
                    bg="white"
                    rounded="xl"
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Kategori</FormLabel>
                  <Select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    bg="white"
                    rounded="xl"
                    focusBorderColor="brand.500"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontSize="sm">Pesan</FormLabel>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pengaduan atau aspirasimu di sini..."
                    rows={5}
                    bg="white"
                    rounded="xl"
                    focusBorderColor="brand.500"
                  />
                </FormControl>
                <Button
                  type="submit"
                  size="lg"
                  colorScheme="brand"
                  rightIcon={<FiSend />}
                  isLoading={submitting}
                  loadingText="Mengirim..."
                >
                  Kirim Pesan
                </Button>
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};
