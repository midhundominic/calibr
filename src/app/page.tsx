import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";
import Feature from "@/components/Feature";

export default function Home(){
  return(
    <>
    
    <main className="flex-grow">
    <Header/>
    <Content/>
    <Feature/>


    </main>
    <Footer/>
    </>
  )
}