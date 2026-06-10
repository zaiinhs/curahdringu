import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

/**
 * Identitas visual Desa Curah Dringu — desa pesisir di tepi Selat Madura.
 * brand  = teal laut (pertumbuhan, air, ketenangan)
 * sand   = amber senja (kehangatan, keramahan warga)
 */
const theme = extendTheme({
  config,
  fonts: {
    heading: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`,
    body: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`,
  },
  colors: {
    brand: {
      50: "#e6fbf7",
      100: "#c2f3e9",
      200: "#8ee7d6",
      300: "#54d6c1",
      400: "#23bfa8",
      500: "#0aa48d",
      600: "#048272",
      700: "#06695c",
      800: "#0a534a",
      900: "#0a443d",
    },
    sand: {
      50: "#fff8ed",
      100: "#ffefd4",
      200: "#fddca8",
      300: "#fcc271",
      400: "#fa9e38",
      500: "#f88012",
      600: "#e96508",
      700: "#c14b09",
      800: "#993b0f",
      900: "#7c3310",
    },
    ink: {
      50: "#f5f7f8",
      100: "#e7ebee",
      200: "#d2dadf",
      300: "#aebac4",
      400: "#8494a2",
      500: "#647585",
      600: "#505f6e",
      700: "#424d59",
      800: "#3a434c",
      900: "#1f262d",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "white",
        color: "ink.900",
        scrollBehavior: "smooth",
      },
      "::selection": {
        bg: "brand.100",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: "full",
      },
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: "-0.02em",
        color: "ink.900",
      },
    },
  },
});

export default theme;
