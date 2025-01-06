import Form from "@/components/form";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Form />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default AboutPage;
