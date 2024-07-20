import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EducationInfo from "./components/EducationInfo";
import Header from "./components/Header";
import PersonalDetails from "./components/PersonalDetails";
import "./App.css";
import LandingText from "./components/LandingText";
import InternshipDetails from "./components/InternshipDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingText />
    },
    {
      path: "/personalDetails",
      element: <PersonalDetails />,
    },
    {
      path: "/educationInformation",
      element: <EducationInfo />,
    },
    {
      path: "/internshipDetails",
      element: <InternshipDetails />,
    },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
