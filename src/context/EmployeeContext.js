import { useEffect, createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Thomas Hardy",
      address: "89 Chiaroscuro Rd, Portland, USA",
      openingHour: "12:30",
      closingHour: "13:30",
    },
    {
      id: uuidv4(),
      name: "Dominique Perrier",
      address: "Obere Str. 57, Berlin, Germany",
      openingHour: "14:30",
      closingHour: "15:30",
    },
    {
      id: uuidv4(),
      name: "Maria Anders",
      address: "25, rue Lauriston, Paris, France",
      openingHour: "10:30",
      closingHour: "13:10",
    },
    {
      id: uuidv4(),
      name: "Fran Wilson",
      address: "C/ Araquil, 67, Madrid, Spain",
      openingHour: "20:30",
      closingHour: "23:00",
    },
    {
      id: uuidv4(),
      name: "Martin Blank",
      address: "Via Monte Bianco 34, Turin, Italy",
      openingHour: "16:30",
      closingHour: "22:40",
    },
    {
      id: uuidv4(),
      name: "Hakan Cetinkaya",
      address: "89 Chiaroscuro Rd, İstanbul, Turkey",
      openingHour: "12:30",
      closingHour: "13:30",
    },
    {
      id: uuidv4(),
      name: "John Perrier",
      address: "Obere Str. 57, Moscow, Russia",
      openingHour: "14:30",
      closingHour: "15:30",
    },
  ]);

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
