import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import { toast } from "react-toastify";

function App() {

  // CREATE JOB
const saveJob = async (job) => {
  try {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    if (!res.ok) throw new Error('Errore nella creazione del job');
    toast.success('Lavoro aggiunto con successo!');
  } catch (error) {
    toast.error('Errore durante l\'aggiunta del lavoro');
    console.error(error);
  }
};

  // DELETE JOB
  const deleteJob = async (jobId) => {
    try {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Errore nell\'eliminazione del job');
      toast.success('Toast eliminato con successo');
    } catch (error) {
      toast.error('Errore durante l\'eliminazione del lavoro');
      console.error(error);
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addNewJob={saveJob} />} />
        <Route path="/jobs/:id" element={<JobPage emitDeleteJob={deleteJob}/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
 
  return (
    <RouterProvider router={router} />
  );
}

export default App
