import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Header, Footer } from './components/partials';
import { ThemeContextProvider } from './hooks/ThemeContextProvider';
import { Home } from './pages';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> 
                  <ThemeContextProvider>
                    <Header/>
                    <Home />
                    <Footer />
                  </ThemeContextProvider> 
                </>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
