import Tentang from "@/components/tentang";
import Footer from "@/components/footer";

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Tentang />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
