import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const TRANSFERS_SLIDER_IMAGES = [
  "/images/car/1.webp",
  "/images/car/2.webp",
  "/images/car/3.webp",
  "/images/car/4.webp",
  "/images/car/5.webp",
];

const Card = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.card};
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  margin: 16px 0;
`;

const SliderTrack = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;
  overflow: hidden;
`;

const SlideStrip = styled.div<{ $index: number }>`
  display: flex;
  transform: translateX(-${(p) => p.$index * 100}%);
  transition: transform 0.4s ease;
  height: 100%;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
  background: ${(p) => p.theme.colors.border};
  cursor: pointer;
`;

const NavBtn = styled.button<{ $side: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  ${(p) => (p.$side === "prev" ? "left: 16px;" : "right: 16px;")}
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
    ${(p) => (p.$side === "prev" ? "left: 8px;" : "right: 8px;")}
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
`;

const Dot = styled.button<{ $active: boolean }>`
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

const Modal = styled.div<{ $isOpen: boolean }>`
  display: ${(p) => (p.$isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  pointer-events: auto;

  @media (max-width: 768px) {
    width: auto;
    height: auto;
    max-width: 90vw;
    max-height: 90vh;
  }
`;

const ModalImage = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;

  @media (max-width: 768px) {
    width: 90vw;
    height: 90vh;
    max-width: 90vw;
    max-height: 90vh;
  }
`;

const ModalImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: auto;
  max-width: 100%;
  max-height: 100%;

  img {
    object-fit: contain;
    pointer-events: auto;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  font-size: 24px;
  color: ${(p) => p.theme.colors.text};
  transition: all 0.2s ease;
  pointer-events: auto;

  &:hover {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 20px;
    top: 10px;
    right: 10px;
  }
`;

const ModalNavButton = styled.button<{ $direction: "prev" | "next" }>`
  position: absolute;
  top: 50%;
  ${(p) => (p.$direction === "prev" ? "left: 20px;" : "right: 20px;")}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  font-size: 24px;
  color: ${(p) => p.theme.colors.text};
  transition: all 0.2s ease;
  pointer-events: auto;

  &:hover {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
    ${(p) => (p.$direction === "prev" ? "left: 10px;" : "right: 10px;")}
  }
`;

const Body = styled.div`
  padding: 24px;

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: ${(p) => p.theme.colors.muted};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

type Props = { subtitle?: string };

export default function TransfersSlider({ subtitle }: Props) {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const total = TRANSFERS_SLIDER_IMAGES.length;
  const images = TRANSFERS_SLIDER_IMAGES;

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(t);
  }, [total]);

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total);

  const openModal = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      (e as React.MouseEvent).stopPropagation?.();
    }
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleModalBackdropClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const currentTarget = e.currentTarget as HTMLElement;
    if (target === currentTarget) {
      closeModal(e);
    }
  };

  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const currentTarget = e.currentTarget as HTMLElement;
    if (target === currentTarget) {
      closeModal(e);
      return;
    }
    const isImage = target.tagName === "IMG" || target.closest("img") || target.closest(".modal-image-wrapper");
    const isButton = target.tagName === "BUTTON" || target.closest("button");
    if (!isImage && !isButton) {
      closeModal(e);
    } else if (isImage) {
      (e as React.MouseEvent).stopPropagation?.();
    }
  };

  const handleModalImageClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const isImage = target.tagName === "IMG" || target.closest("img") || target.closest(".modal-image-wrapper");
    if (!isImage) {
      closeModal(e);
    } else {
      (e as React.MouseEvent).stopPropagation?.();
    }
  };

  const prevModalImage = () => setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextModalImage = () => setModalImageIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") closeModal();
      else if (ev.key === "ArrowLeft") setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
      else if (ev.key === "ArrowRight") setModalImageIndex((prev) => (prev + 1) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, images.length]);

  return (
    <>
      <Card>
        <SliderTrack>
          <SlideStrip $index={index}>
            {images.map((src, i) => (
              <Slide key={src} onClick={() => openModal(i)}>
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                  priority={i === 0}
                />
              </Slide>
            ))}
          </SlideStrip>
          <NavBtn
            type="button"
            $side="prev"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous"
          >
            ‹
          </NavBtn>
          <NavBtn
            type="button"
            $side="next"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next"
          >
            ›
          </NavBtn>
          <Dots>
            {images.map((_, i) => (
              <Dot
                key={i}
                type="button"
                $active={i === index}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </Dots>
        </SliderTrack>
        {subtitle && (
          <Body>
            <Subtitle>{subtitle}</Subtitle>
          </Body>
        )}
      </Card>

      <Modal $isOpen={isModalOpen} onClick={handleModalBackdropClick} onTouchEnd={handleModalBackdropClick}>
        <ModalContent
          onClick={handleModalContentClick}
          onTouchEnd={handleModalContentClick}
        >
          <CloseButton
            type="button"
            onClick={(e) => { e.stopPropagation(); closeModal(e); }}
            onTouchEnd={(e) => { e.stopPropagation(); (e as React.TouchEvent).preventDefault?.(); closeModal(e); }}
            aria-label="Close"
          >
            ×
          </CloseButton>
          <ModalNavButton
            $direction="prev"
            type="button"
            onClick={(e) => { e.stopPropagation(); prevModalImage(); }}
            aria-label="Previous image"
          >
            ‹
          </ModalNavButton>
          <ModalNavButton
            $direction="next"
            type="button"
            onClick={(e) => { e.stopPropagation(); nextModalImage(); }}
            aria-label="Next image"
          >
            ›
          </ModalNavButton>
          <ModalImage
            onClick={handleModalImageClick}
            onTouchEnd={handleModalImageClick}
          >
            <ModalImageWrapper className="modal-image-wrapper">
              <Image
                src={images[modalImageIndex]}
                alt=""
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
              />
            </ModalImageWrapper>
          </ModalImage>
        </ModalContent>
      </Modal>
    </>
  );
}
