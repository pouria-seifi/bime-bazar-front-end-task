import React, { Suspense } from "react";

import UserAddressModalInterceptedPage from "@/src/routes/userAddress";
import Modal from "@/src/components/modal";
import Loading from "@/src/components/lodaing";

export default function UserAddress() {
  return (
    <Suspense
      fallback={
        // for better user experience i added loading moadl as fallback
        <Modal title="انتخاب آدرس" isOpen={true}>
          <div className="flex items-center justify-center p-8">
            <Loading />
          </div>
        </Modal>
      }
    >
      <UserAddressModalInterceptedPage />
    </Suspense>
  );
}
