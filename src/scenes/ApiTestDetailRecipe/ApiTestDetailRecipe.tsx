import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeDetailProps } from "../../TypesFolder/ApiTypes";

//{ id }: RecipeDetailProps
const ApiTestDetailRecipe = () => {
  const [recipeDetail, setRecipeDetail] = useState<RecipeDetailProps | null>(
    null
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`http://localhost:5239/api/Recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipeDetail(data));
  }, [id]); // re-fetchar när id ändras

  if (!recipeDetail) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="apitestdetailrecipe"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      <div>
        <h2>{recipeDetail.id}</h2>
      </div>
    </section>
  );
};

export default ApiTestDetailRecipe;
