"use client";

import { Fragment } from "react";
import { Typography } from "../typography";
import { FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  title?: string;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  ariaLabel = "Bottom sheet modal",
  title,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className="fixed inset-0 z-50 flex items-end justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 transition-opacity z-10"
        onClick={onClose}
      />

      <div className="relative w-full bg-white max-h-[90vh] overflow-y-auto animate-slide-up transition-all z-20">
        {title ? (
          <div className="flex flex-row items-center justify-between px-3 py-4">
            <Typography.Text
              weight={FONT_WEIGHT.medium}
              size={FONT_SIZE.base}
              className="leading-6"
            >
              {title}
            </Typography.Text>
          </div>
        ) : (
          <Fragment />
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
