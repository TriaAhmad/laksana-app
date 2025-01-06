import Tentang from "@/components/tentang";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Tentang />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
