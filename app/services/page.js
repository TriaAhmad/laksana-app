
import Footer from "@/components/footer";
import Hubungi from "@/components/hubungi";
import Chatbot from "@/components/chatbot";

const ServicePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hubungi />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default ServicePage;
