// BreedsComponent.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { fetchBreeds } from "./dogSlices";

const BreedsComponent= () => {
  const dispatch: AppDispatch = useDispatch();
  const breeds = useSelector((state: RootState) => state.breeds.breeds); 
  const loading = useSelector((state: RootState) => state.breeds.loading);
  const error = useSelector((state: RootState) => state.breeds.error);

  useEffect(() => {
      dispatch(fetchBreeds());
      console.log(breeds)
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Dog Breeds</h1>
      <ul>
        {breeds.map((breed, index) => (
        <li key={index}>{JSON.stringify(breed)}</li>
        ))}
      </ul>
    </div>
  );
};

export default BreedsComponent;
