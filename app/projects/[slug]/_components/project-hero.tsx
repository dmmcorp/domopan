"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ProjectHeroProps {
  image: StaticImageData | string;
  name: string;
}

export default function ProjectHero({ image, name }: ProjectHeroProps) {
  return (
    <motion.div
      className="relative w-full aspect-video overflow-hidden pointer-events-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
    >
      <Image src={image} alt={`${name} image`} fill className="object-cover" />
    </motion.div>
  );
}
