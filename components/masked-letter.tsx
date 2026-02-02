"use client";

interface MaskedLetterProps {
  imageSrc: string; // URL of the letter image
  currentPath: string;
}

const MaskedLetter = ({ imageSrc, currentPath }: MaskedLetterProps) => {
  const bgColor = currentPath.startsWith("/projects/")
    ? "var(--warm-stone)"
    : "var(--foreground)";
  return (
    <div className={`relative size-10`}>
      <div
        className="w-full h-full"
        style={{
          backgroundColor: bgColor,
          maskImage: `url(${imageSrc})`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
          WebkitMaskImage: `url(${imageSrc})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
        }}
      />
    </div>
  );
};

export default MaskedLetter;
