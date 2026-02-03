"use client";

import {
  motion,
  useMotionValue,
  useDragControls,
  useMotionValueEvent,
} from "framer-motion";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useRef, useState } from "react";
import { HomeCarousel } from "./_components/home-carousel";
import Navigation from "@/components/navigation";

export default function Home() {
  const constraintsRef = useRef(null);
  const controls = useDragControls();
  const [isOpen, setIsOpen] = useState(false);

  const y = useMotionValue(0);
  const dragY = useMotionValue(0);

  useMotionValueEvent(y, "change", (latest) => console.log(latest));
  const handleDragEnd = () => {
    const value = dragY.get();

    if (value > 20) setIsOpen(true);

    dragY.set(0); // reset handle
  };

  return (
    <motion.div
      ref={constraintsRef}
      className="h-screen w-full overflow-hidden bg-(--warm-stone) relative "
    >
      {/* HEADER */}
      <motion.div
        // animate={{ translateY: isOpen ? headerY : "0%" }}
        animate={{ translateY: isOpen ? "-40%" : 0 }}
        transition={{
          type: "tween",
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 translate-y-[40%] w-full h-screen border-b-2 border-muted-foreground"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className="absolute flex flex-col  w-full z-50"
        >
          <Header />
          <div className="">
            <Navigation />
          </div>

          <HomeCarousel />
        </motion.div>
      </motion.div>

      {/* FOOTER (draggable) */}
      <motion.div
        animate={{ y: isOpen ? "40%" : 0 }}
        transition={{
          type: "tween",
          duration: 1,

          ease: "easeInOut",
        }}
        className="absolute bottom-0 translate-y-1/2 w-full h-full z-40 bg-(--warm-stone)"
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className="z-40 pointer-events-none"
        >
          <Footer />
        </motion.div>
        {!isOpen && (
          <motion.div
            onPointerDown={(e) => controls.start(e)}
            className="cursor-grab active:cursor-grabbing h-[50vh] flex items-center justify-center"
            drag="y"
            style={{ y: dragY }}
            dragControls={controls}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 1,
                ease: "backInOut",
                delay: 1.3,
              }}
              className="text-2xl text-center font-bold animate-bounce"
            >
              ( Drag Down )
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
