import Logo from "@/public/images/logo.svg";

import Header from "@/src/components/header";

import VehicleOwnerDetailsForm from "./components/vehicleOwnerDetailsForm";
import InsurancePolicyDetails from "./components/insurancePolicyDetails";

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <main>
        <section>
          <Header title="مشخصات بیمه نامه" src={Logo} />
          <InsurancePolicyDetails />
        </section>

        <section className="mt-8">
          <Header title="مشخصات مالک خودرو" src={Logo} />
          <VehicleOwnerDetailsForm>{children}</VehicleOwnerDetailsForm>
        </section>
      </main>
    </div>
  );
};

export default Home;
