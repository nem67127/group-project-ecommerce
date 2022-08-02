import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import HomePage from "./HomePage";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";
import Category from "./Category";
import FilterHeader from "./FilterHeader";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <FilterHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:item" element={<ItemPage />} />
        <Route path="/items/category/:category" element={<Category />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
