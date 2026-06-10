"use client";
import { Text, type TextProps } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface CountUpProps extends TextProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export const CountUp = ({
  end,
  duration = 1500,
  suffix = "",
  ...rest
}: CountUpProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  const isDecimal = !Number.isInteger(end);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(end * eased);
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  const display = isDecimal
    ? value.toFixed(1)
    : Math.round(value).toLocaleString("id-ID");

  return (
    <Text ref={ref} {...rest}>
      {display}
      {suffix}
    </Text>
  );
};
