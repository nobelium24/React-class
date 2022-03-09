import Navbar from "./components/Navbar"
import "./App.css"
import Footer from "./components/Footer";
import Card from "./components/Card";



function App(){

  


  return (
    <>
      <Navbar  />
       
       <main className="p-5">
            <h1>Welcome to our site</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Totam voluptatem molestiae, iusto odit in voluptate nemo id cum blanditiis. 
              Eveniet, in tempora sit sint aliquid aut provident dolorum porro ipsum?
            </p>

          <div className="d-flex flex-wrap">
            <Card name={"Samuel Henshaw"} />
          </div>


       </main>


       <Footer />
    </>
  );
}


export default App