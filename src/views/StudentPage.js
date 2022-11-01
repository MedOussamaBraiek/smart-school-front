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
  Alert,
} from "reactstrap";

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import axios from "axios";



const CoursePage = () => {

  const baseUlr = "http://localhost:8051/courses"

  const [courses, setCourses] = React.useState([]);

  const [name, setName] = React.useState("");

  const getCourses = () => {
    fetch(baseUlr)
    .then((response) => response.json())
    .then((response) => {
        setCourses(response)
        console.log(response)
      }
    )
    .catch((err) => console.error(err));
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
 

//   React.useEffect(() => {
//     axios
//       .get(`http://localhost:8051/courses/category/${categoryf}`)
//       .then((res) => {
//         if (res.data) {
//           setCourses(res.data);
//         }
//         if(categoryf === 'All'){
//           getCourses();
//         }
//       });
//   }, [categoryf]);
  


  return (
    <div>

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
              name={course.name}
              description={course.description}
              category={course.category}
              color={"primary"}
              id={course.id}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CoursePage;
