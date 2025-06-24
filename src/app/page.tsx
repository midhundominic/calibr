import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import Integration from "@/components/Integration";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Explore from "@/components/Explore";

export default function Home(){
  return(
    <>
    
    <main className="flex-grow">
    <Header/>
    <Content/>
    <Feature/>
    <Integration/>
    <Testimonial/>
    <Blog/>
    <Explore/>

    </main>
    <Footer/>
    </>
  )
}