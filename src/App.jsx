import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobLisings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
 
  return (
    <>

      <Navbar />
      <Hero title="Questo non è un titolo di default"/>
      <HomeCards />
      <JobLisings />
      <ViewAllJobs />


    </>
  );
}

export default App
