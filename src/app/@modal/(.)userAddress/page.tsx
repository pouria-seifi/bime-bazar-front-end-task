"use client";
import Modal from "@/src/components/modal";
import { useRouter } from "next/navigation";
import React from "react";

export default function UserAddressModalInterceptedPage() {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  return (
    <Modal title="آدرس" isOpen={true} onClose={onClose}>
      <div className="flex flex-col px-5 py-6">vdsvsvdsv</div>
    </Modal>
  );
}
