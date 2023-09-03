import { useEffect, useState } from "react";
import Home from "./scenes/home";
import { SelectedPage } from "./shared/alltypes";
import Navbar from "./scenes/navbar";
import CreateRecipePage from "./scenes/CreateRecipePage";
import CreateIngredientPage from "./scenes/CreateIngredientPage";
import UpdateRecipePage from "./scenes/UpdateRecipePage";
import Recipes from "./scenes/recipes";
import SelectedRecipe from "./scenes/selectedrecipe";
import Footer from "./scenes/CreateRecipePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApiTestDetailRecipe from "./scenes/ApiTestDetailRecipe";
import RecipeDetail from "./scenes/RecipeDetail";
import UserProfile from "./scenes/UserLogin";
import AllRecipesList from "./scenes/AllRecipesList";
import UserLogin from "./scenes/UserLogin";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [selectedID, setSelectedID] = useState<number | null>(null);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Router>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Routes>
          <Route
            path="/"
            element={
              <UserLogin
                setSelectedPage={setSelectedPage}
                setSelectedUserID={setSelectedID}
              />
            }
          />
          <Route
            path="/recipes"
            element={
              <UserProfile
                setSelectedPage={setSelectedPage}
                setSelectedUserID={setSelectedID}
              />
            }
          />
          <Route
            path="/user/:id"
            element={
              <AllRecipesList
                setSelectedPage={setSelectedPage}
                setSelectedID={setSelectedID}
              />
            }
          />
          <Route
            path="/recipes/:id"
            element={
              <RecipeDetail
                setSelectedPage={setSelectedPage}
                selectedID={selectedID}
              />
            }
          />
          <Route
            path="/api/Recipes/:recipeID"
            element={<ApiTestDetailRecipe />}
          />
          <Route
            path="/api/ApiTestDetail/:id"
            element={<ApiTestDetailRecipe />}
          />
        </Routes>
        <CreateRecipePage setSelectedPage={setSelectedPage} />
        <CreateIngredientPage setSelectedPage={setSelectedPage} />
        <UpdateRecipePage setSelectedPage={setSelectedPage} />
        <Recipes setSelectedPage={setSelectedPage} />
        <SelectedRecipe setSelectedPage={setSelectedPage} />
        {/*<ContactMe setSelectedPage={setSelectedPage} /> */}
        <Footer setSelectedPage={setSelectedPage} />
      </Router>
    </div>
  );
}

export default App;
