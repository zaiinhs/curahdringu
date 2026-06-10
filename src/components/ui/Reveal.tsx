"use client";
import { Box, type BoxProps } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

interface RevealProps extends BoxProps {
  delay?: number;
}

export const Reveal = ({ children, delay = 0, ...rest }: RevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...(rest as any)}
    >
      {children}
    </MotionBox>
  );
};
