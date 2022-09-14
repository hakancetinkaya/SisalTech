import { useEffect, createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const myResult = await axios.get("https://dummyjson.com/products");
      setPosts(myResult.data.products);
    };
    fetchPosts();
  }, []);

  const addEmployee = (id, title, description, openingHour, closingHour) => {
    setPosts([
      ...posts,
      { id: id, title, description, openingHour, closingHour },
    ]);
  };

  const deleteEmployee = (id) => {
    setPosts(posts.filter((x) => x.id !== id));
  };

  const updateEmployee = (id, updatedValue) => {
    setPosts(posts.map((x) => (x.id === id ? updatedValue : x)));
  };

  return (
    <EmployeeContext.Provider
      value={{ posts, addEmployee, deleteEmployee, updateEmployee }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
