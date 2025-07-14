import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import useNetworkInfo from "../hooks/NetworkApi";
import { cld } from "../utils/cloudinary";
import Button from "./Button";

// Hook to detect if an element is in view
const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only observe once
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

type Article = {
  id?: string;
  title: string;
  description: string;
  image?: string; // Cloudinary public ID
  tag?: string;
  metadata?: string;
};

type NewsCardProps = {
  article: Article;
};

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const { id, title, description, image, tag, metadata } = article;
  const [, setLocation] = useLocation();
  const { effectiveType, saveData } = useNetworkInfo();

  const [cldImage, setCldImage] = useState<any | null>(null);
  const [isBroken, setIsBroken] = useState(false);

  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isInView || !image) {
      setCldImage(null);
      return;
    }

    const isVerySlow = effectiveType === "2g" || effectiveType === "slow-2g";
    const isMedium = effectiveType === "3g";

    if (isVerySlow || saveData) {
      setCldImage(null);
    } else {
      const img = cld
        .image(image)
        .format("auto")
        .resize(fill().width(600).height(300));

      if (isMedium) {
        img.quality("auto:eco");
      } else {
        img.quality("auto");
      }

      setCldImage(img);
      setIsBroken(false);
    }
  }, [image, effectiveType, saveData, isInView]);

  const canShowImage = Boolean(cldImage) && !isBroken;

  return (
    <div
      ref={ref}
      className="rounded-2xl shadow-soft overflow-hidden bg-lightbg flex flex-col transition hover:shadow-md h-[400px]"
    >
      {/* Image or fallback */}
      {canShowImage ? (
        <div className="w-full h-48">
          <AdvancedImage
            cldImg={cldImage}
            className="w-full h-full object-cover"
            onError={() => {
              console.warn("Broken Cloudinary image:", image);
              setIsBroken(true);
            }}
          />
        </div>
      ) : (
        <div className="p-10 h-[190px] bg-gradient-to-br from-watermelon to-[#f58080]">
          {tag && (
            <span className="text-xs uppercase text-white font-semibold tracking-wider">
              {tag}
            </span>
          )}
          <h2 className="text-xl font-bold text-white mt-2">{title}</h2>
          {metadata && <p className="text-sm text-white/80 mt-1">{metadata}</p>}
        </div>
      )}

      {/* Text Section */}
      <div className="p-4 flex flex-col justify-between flex-1 bg-lightbg">
        {canShowImage && (
          <h3 className="text-lg font-bold text-watermelon mb-1">{title}</h3>
        )}
        <p className="text-sm text-muted line-clamp-3 flex-1">{description}</p>
        <div className="mt-4">
          <Button variant="outline" onClick={() => setLocation(`/posts/${id}`)}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
