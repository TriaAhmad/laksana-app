import Footer from "@/components/footer";
import Hubungi from "@/components/hubungi";

const ServicePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hubungi />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
