
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "./NavBar/NavBar";
import Galeria from "./pages/Galeria/Galeria"
import Estudio from "./pages/Estudio/Estudio";
import Formaciones from "./pages/Formaciones/Formaciones";

import InfoIcon from '@mui/icons-material/Info';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import DraftsIcon from "@mui/icons-material/Drafts";

const navegationLinks = [
  {
    title: "Galeria",
    path: "/galeria",
    icon: <InfoIcon />,
  },
  {
    title: "Estudio",
    path: "/estudio",
    icon: <DraftsIcon />,
  },
  {
    title: "Formaciones",
    path: "/formaciones",
    icon: <VolunteerActivismIcon />,
  },
];

export default function App() {
  return (
    <>

    <Navbar navegationLinks={navegationLinks} />
  <Container sx={{ mt: 5 }}>
    
          <Routes>
            <Route
              path="/estudio"
              element={<Estudio />}
            />
            <Route
              path="/formaciones"
              element={<Formaciones />}
            />
            <Route
              path="/galeria"
              element={<Galeria />}
            />
          </Routes>
        </Container>
  
    
   
    </>
  );
  }
  
