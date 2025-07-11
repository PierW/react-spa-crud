import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

function App() {

  const saveJob = async (job) => {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addNewJob={saveJob} />} />
        <Route path="/jobs/:id" element={<JobPage/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
 
  return (
    <RouterProvider router={router} />
  );
}

export default App
