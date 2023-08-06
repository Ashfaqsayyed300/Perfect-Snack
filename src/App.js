import { Navigate, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import PageNotFound from "./pages/NoFound";
import CheckoutPage from "./pages/Checkout";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const generateToken = async () => {
      await fetch("https://devcore02.cimet.io/v1/generate-token", {
        method: "POST",
        credentials: "true",
        headers: {
          Authorization: "Bearer 4NKQ3-815C2-8T5Q2-16318-55301",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((err) => console.log(err.message));
    };
    generateToken();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/homepage" exact element={<Homepage />} />
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/cart" exact element={<CartPage />} />
        <Route path="/checkout" exact element={<CheckoutPage />} />
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
      <footer class="footer text-center text-lg-start bg-primary ">
        <div
          class="text-center text-light p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a
            class="text-reset fw-bold"
            href="https://github.com/ashfaqsayyed300"
            target="_blank"
            rel="noreferrer"
          >
            Ashfaq Sayyed
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
