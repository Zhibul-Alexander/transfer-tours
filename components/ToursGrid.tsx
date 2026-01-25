import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { FeaturedTour } from "../content/types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Card = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.card};
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
`;

const ImageSlider = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ImageWrapper = styled.div<{ $currentImgIndex: number }>`
  display: flex;
  transform: translateX(-${(p) => p.$currentImgIndex * 100}%);
  transition: transform 0.4s ease;
  height: 100%;
`;

const ImageSlide = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
`;

const Body = styled.div`
  padding: 24px;
  
  @media (max-width: 768px) {
    padding: 18px;
  }
`;

const Title = styled.h3`
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: ${(p) => p.theme.colors.muted};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const NavButton = styled.button<{ $direction: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  ${(p) => (p.$direction === "prev" ? "left: 16px;" : "right: 16px;")}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: 20px;
  color: ${(p) => p.theme.colors.text};
  transition: all 0.2s ease;

  &:hover {
    background: white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
    ${(p) => (p.$direction === "prev" ? "left: 8px;" : "right: 8px;")}
  }
`;

const ImageDots = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
`;

const ImageDot = styled.button<{ $active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background: ${(p) => (p.$active ? "white" : "rgba(255,255,255,0.5)")};
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;

  &:hover {
    background: ${(p) => (p.$active ? "white" : "rgba(255,255,255,0.8)")};
  }
`;

type Props = { items: FeaturedTour[] };

function TourSlider({ tour, tourIndex }: { tour: FeaturedTour; tourIndex: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = tour.images || [tour.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Card>
      <ImageSlider>
        <ImageWrapper $currentImgIndex={currentImageIndex}>
          {images.map((img, imgIndex) => (
            <ImageSlide key={imgIndex}>
              <Image
                src={img}
                alt={`${tour.title} - ${imgIndex + 1}`}
                fill
                unoptimized
                style={{ objectFit: "cover" }}
              />
            </ImageSlide>
          ))}
        </ImageWrapper>
        {images.length > 1 && (
          <>
            <NavButton
              $direction="prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              ‹
            </NavButton>
            <NavButton
              $direction="next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              ›
            </NavButton>
            <ImageDots>
              {images.map((_, imgIndex) => (
                <ImageDot
                  key={imgIndex}
                  $active={imgIndex === currentImageIndex}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToImage(imgIndex);
                  }}
                  aria-label={`Go to image ${imgIndex + 1}`}
                />
              ))}
            </ImageDots>
          </>
        )}
      </ImageSlider>
      <Body>
        <Title>{tour.title}</Title>
        <Text>{tour.highlight}</Text>
      </Body>
    </Card>
  );
}

export default function ToursGrid({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <Grid>
      {items.map((tour, index) => (
        <TourSlider key={tour.id} tour={tour} tourIndex={index} />
      ))}
    </Grid>
  );
}
