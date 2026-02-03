"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner"; // Optional: use your loader component

interface ProjectImageDialogProps {
  src: StaticImageData | string;
  alt: string;
}

export default function ProjectImageDialog({
  src,
  alt,
}: ProjectImageDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Trigger button (click image) */}
      <DialogTrigger asChild>
        <button className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onLoadingComplete={() => setLoading(false)}
          />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Spinner />
            </div>
          )}
        </button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="min-w-3/4 w-full p-5 pb-10 bg-black/70 border-black/70">
        <DialogHeader>
          <DialogTitle className="text-white text-lg text-center">
            {alt}
          </DialogTitle>
          <DialogClose className="text-white absolute top-3 right-3">
            ✕
          </DialogClose>
        </DialogHeader>

        <div className="relative w-full aspect-video">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Spinner />
            </div>
          )}
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
