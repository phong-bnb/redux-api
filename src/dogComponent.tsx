// BreedsComponent.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { fetchBreeds } from "./dogSlices";
import { Alert } from "antd";

const BreedsComponent= () => {
  const dispatch: AppDispatch = useDispatch();
  const breeds = useSelector((state: RootState) => state.breeds.breeds); 
  const loading = useSelector((state: RootState) => state.breeds.loading);
    const error = useSelector((state: RootState) => state.breeds.error);
   
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, "I was closed.");
    };
    

  useEffect(() => {
      dispatch(fetchBreeds());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <Alert
      message="Error"
      description="Mất mạng rồi , thử lại sauuu"
      type="error"
      closable
      onClose={onClose}
    />
  );

  return (
    <div>
      <h1 className=" flex text-3xl font-bold justify-center items-center">
        Dog Breeds
          </h1>
          <table></table>
      <ul className="flex  flex-col gap-6 p-5">
        {breeds.map((breed, index) => (
          <li
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3 drop-shadow-xl hover:from-violet-140 hover:to-fuchsia-300 "
            key={index}
          >
            {JSON.stringify(breed)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreedsComponent;
