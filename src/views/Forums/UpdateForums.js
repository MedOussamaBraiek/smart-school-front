// import axios from "axios";
// import { useFormik } from "formik";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   Card,
//   Row,
//   Col,
//   CardTitle,
//   CardBody,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
// } from "reactstrap";

// const ReclamationUpdate = () => {

//   useEffect(() => {
//     axios.get("http://localhost:8051/events/all").then((res) => {
//       setoptions(res.data);
//     });
//   }, []);

//   const formik = useFormik({
//     initialValues: {
//       title: Reclamation.title,
//       content: Reclamation.content,
//       ownerId: Reclamation.ownerId,
//       eventId: "",
//     },
//     onSubmit: (values) => {
//       axios
//         .put(`http://localhost:8051/reclamations/update/${id}`, values)
//         .then((res) => {
//           if (res.data) {
//             Navigate("/reclamations");
//           }
//         });
//     },
//     validateOnChange: false,
//     validateOnBlur: false,
//   });
//   return (
//     <Row>
//       <Col>
//         {/* --------------------------------------------------------------------------------*/}
//         {/* Card-1*/}
//         {/* --------------------------------------------------------------------------------*/}
//         <Card>
//           <CardTitle tag="h6" className="border-bottom p-3 mb-0">
//             <i className="bi bi-bell me-2"> </i>
//             Update Reclamation
//           </CardTitle>
//           <CardBody>
//             <Form onSubmit={formik.handleSubmit}>
//               <FormGroup>
//                 <Label for="exampleEmail">Title</Label>
//                 <Input
//                   id="title"
//                   name="title"
//                   placeholder={Reclamation.title}
//                   type="text"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   value={formik.initialValues.title}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="examplePassword">ownerId</Label>
//                 <Input
//                   id="ownerId"
//                   name="ownerId"
//                   placeholder={Reclamation.ownerId}
//                   type="text"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   value={formik.values.ownerId}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="eventId">Event</Label>
//                 <Input
//                   id="eventId"
//                   name="eventId"
//                   type="select"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   value={formik.values.eventId}
//                 >
//                   {options.map((event, index) => (
//                     <option key={index} value={event.id}>
//                       {event.title}
//                     </option>
//                   ))}
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="content">Content</Label>
//                 <Input
//                   id="content"
//                   name="content"
//                   placeholder={Reclamation.content}
//                   type="textarea"
//                   onBlur={formik.handleBlur}
//                   onChange={formik.handleChange}
//                   value={formik.values.content}
//                 />
//               </FormGroup>

//               <Button className="btn" outline color="info" type="submit">
//                 Update Reclamation
//               </Button>
//             </Form>
//           </CardBody>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default ReclamationUpdate;

import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const UpdateForum = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [options, setoptions] = useState([
    {
      id: "SPORT",
      title: "SPORT",
    },
    {
      id: "MUSIC",
      title: "MUSIC",
    },
    {
      id: "EDUCATION",
      title: "EDUCATION",
    },
  ]);
  const [forum, setForum] = useState({});
  const [date, setDate] = useState("");
  useEffect(() => {
    const config = {
      headers: {
        Authorization:
          `Bearer ` + window.localStorage.getItem("token").slice(1, -1),
      },
    };
    axios.get(`http://localhost:8051/forums/${id}`, config).then((res) => {
      //formik.setValues(res.data);
      console.log(res.data);
      setDate(res.data.created.substring(0, 10));
      setForum(res.data);
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      id: forum.id,
      title: forum.title || "",
      topic: forum.topic || "",
      type: forum.type || "",
      date: date || "",
      created: forum.created || "",
      createdBy: forum.createdBy || "",
    },

    enableReinitialize: true,
    onSubmit: (values) => {
      const config = {
        headers: {
          Authorization:
            `Bearer ` + window.localStorage.getItem("token").slice(1, -1),
        },
      };
      axios.put("http://localhost:8051/forums", values, config).then((res) => {
        if (res.data) {
          Navigate("/forums");
        }
      });
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Update Forum
          </CardTitle>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  placeholder={formik.title}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </FormGroup>

              <FormGroup>
                <Label for="type">Type</Label>
                {
                  <Input
                    id="type"
                    name="type"
                    type="select"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.type}
                  >
                    {options.map((forum, index) => (
                      <option key={index} value={forum.id}>
                        {forum.title}
                      </option>
                    ))}
                  </Input>
                }
              </FormGroup>
              <FormGroup>
                <Label for="topic">Topic</Label>

                <Input
                  type="textarea"
                  id="topic"
                  name="topic"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.topic}
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">date</Label>

                <Input
                  type="date"
                  id="date"
                  name="date"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.date}
                />
              </FormGroup>
              <Button className="btn" outline color="info" type="submit">
                Update Forum
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default UpdateForum;
