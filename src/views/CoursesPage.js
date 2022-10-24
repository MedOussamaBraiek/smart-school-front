import React from "react";
import {
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const CoursePage = () => {
  const baseUlr = "http://localhost:8051/courses/all";

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const [courses, setCourses] = React.useState([]);

  const [modal, setModal] = React.useState(false);

  const [formData, setData] = React.useState({
    name: "",
    description: "",
    category: "",
  });
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");

  React.useEffect(() => {
    fetch(baseUlr)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if(response.status === 200) {
          setCourses(response.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    setData({ ...formData, name: e.target.value });
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
    setData({ ...formData, description: e.target.value });
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    setData({ ...formData, category: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const course = { name, description, category };

    fetch("http://localhost:8051/courses/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    }).then(async (res) => {
      console.log("new course added");
    });
  };

  return (
    <div>
      {/***Top Cards***/}

      <div className="mt-2 mb-4">
        <Button color="primary" onClick={toggle}>
          Add Course
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add Course</ModalHeader>
          <ModalBody>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Course name"
                  type="text"
                  value={name}
                  onChange={handleChangeName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Description"
                  type="textarea"
                  value={description}
                  onChange={handleChangeDescription}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Category</Label>
                <Input
                  id="category"
                  name="category"
                  placeholder="Category"
                  type="text"
                  value={category}
                  onChange={handleChangeCategory}
                />
              </FormGroup>

              {/* <Button>Submit</Button> */}
              <ModalFooter>
                <Button color="primary" type="submit" onClick={toggle}>
                  Submit
                </Button>
                <Button color="danger" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </Modal>
      </div>

      {/***Blog Cards***/}
      <Row>
        {/* {BlogData.map((blg, index) => ( */}
        {courses &&
          courses.map((course, index) => (
            <Col sm="6" lg="6" xl="3" key={index}>
              {/* {courses && courses.map((course,index) => {
              
            })} */}
              <Blog
                image={bg1}
                title={"Name : " + course.name}
                subtitle={"Subtitle : " + course.description}
                text={"Category : " + course.category}
                color={"primary"}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default CoursePage;
