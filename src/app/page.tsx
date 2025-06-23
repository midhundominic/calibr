import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import Integration from "@/components/Integration";
import Testimonial from "@/components/Testimonial";

export default function Home(){
  return(
    <>
    
    <main className="flex-grow">
    <Header/>
    <Content/>
    <Feature/>
    <Integration/>
    <Testimonial/>


    </main>
    <Footer/>
    </>
  )
}