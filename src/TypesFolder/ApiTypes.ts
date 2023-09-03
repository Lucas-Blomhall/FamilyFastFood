export type RecipesItem = {
    RecipesID: 5;
    RecipesTitle: "Hej";
    Description: "Hej";
    PrepTime: "Hej";
    TotalTime: "Hej";
    ServingSize: 5;
    ImageURL: "Hej";
    CategoriesId: 5;
    CuisinesId: 5;
    TagsId: 5;
    IngredientsID1: 5;
    IngredientsID2: 5;
    IngredientsID3: 5;
    IngredientsID4: 5;
    IngredientsID5: 5;
}

export type RecipeItems = {
    news: RecipesItem[];
  };

  export interface IRecipes {
    recipesID: number;
    recipesTitle: string;
    description: string;
    prepTime: string;
    totalTime: string;
    servingSize: number;
    imageURL: string;
    categoriesId: number;
    cuisinesId: number;
    tagsId: number;
    ingredientsID1: number;
    ingredientsID2: number;
    ingredientsID3: number;
    ingredientsID4: number;
    ingredientsID5: number;
  }
  
  export type TRecipes = {
    RecipesTitle: string;
    Description: string;
    PrepTime: string;
    TotalTime: string;
    ServingSize: number;
    Category: string;
    Cuisine: string;
    Tags: string;
    ImageURL: string;
  }
  
  export interface IData {
    data: IRecipes;
  }

  export interface IRecipesState{
    listRecipes: IRecipes[];
    listStatusRecipes: ApiStatus;
    createRecipesFormStatus: ApiStatus;
    updateRecipesFormStatus: ApiStatus;
}

export enum ApiStatus{
  "loading",
  "ideal",
  "success",
  "error",
}

export interface IUpdateRecipesActionProps {
  id: number;
  data: IRecipes;
  //data: (string | number)[];
}

export interface RecipeDetailProps {
    id: number;
  }
  