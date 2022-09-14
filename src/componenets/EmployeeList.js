import { useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { Modal, Alert } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import AddForm from "./AddForm";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";

const EmployeeList = () => {
  const { posts } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSortingAsc, setIsSortingAsc] = useState(true);

  const [EmployeePerPage] = useState(5);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    handleClose();
    return () => {
      handleShowAlert();
    };
  }, [posts]);

  const indexOfLastPersonel = currentPage * EmployeePerPage;
  const indexOfFirstPersonel = indexOfLastPersonel - EmployeePerPage;
  const currentEmployee = posts.slice(
    indexOfFirstPersonel,
    indexOfLastPersonel
  );
  const totalPageNum = Math.ceil(posts.length / EmployeePerPage);

  const [postsSearch, setPostsSearch] = useState([]);

  useEffect(() => {
    const searchFetchPosts = async () => {
      const mySearchResult = await axios.get("https://dummyjson.com/products");
      setPostsSearch(mySearchResult.data.products);
    };
    searchFetchPosts();
  }, []);

  useEffect(() => {
    const searchFetchPosts = async () => {
      const mySearchResult = await axios.get(
        "https://dummyjson.com/products/search?q=" + searchTerm
      );
      setPostsSearch(mySearchResult.data.products);
    };
    searchFetchPosts();
  }, [searchTerm]);

  function handleSortRequest() {
    if (isSortingAsc) {
      posts.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
    } else {
      posts.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
      );
    }

    setIsSortingAsc(!isSortingAsc);
  }

  return (
    <div>
      <div style={{ float: "right", marginBottom: "2%" }}>
        <ul className="list search-menu">
          <li className="list-group-item">
            <input
              type="text"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              class="form-control"
              id="search-bar"
              placeholder="<    Search..."
              style={{
                borderBottomLeftRadius: "15px",
                borderTopLeftRadius: "15px",
              }}
            />
          </li>
          <li className="list-group-item">
            <button
              onClick={handleShow}
              class="btn btn-success"
              data-toggle="modal"
            >
              {" "}
              <FontAwesomeIcon icon={faPlus} size="xs" /> New
            </button>
          </li>
        </ul>
      </div>
      <Alert show={showAlert} variant="success">
        Personel List successfully updated!.
      </Alert>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" onClick={handleSortRequest}>
                <TableSortLabel
                  active={true}
                  direction={isSortingAsc ? "asc" : "desc"}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">Address</TableCell>
              {/* <TableCell align="center">Opening Hour</TableCell>
                  <TableCell align="center">Close Hour</TableCell> */}
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentEmployee
              .filter((posts) => {
                if (searchTerm === "") {
                  return posts;
                } else if (
                  posts.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return posts;
                }
              })
              .map((posts, key) => {
                return <Employee posts={posts} />;
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination pages={totalPageNum} setCurrentPage={setCurrentPage} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add New Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EmployeeList;
