import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/index";

function App() {
  return (
    <Layout>
      <Header />
      {/* Routes should go here */}
      <Home />
      <Footer />
    </Layout>
  );
}

export default App;
