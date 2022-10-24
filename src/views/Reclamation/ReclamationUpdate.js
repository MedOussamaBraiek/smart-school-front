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

const ReclamationUpdate = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [options, setoptions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8051/events/all").then((res) => {
      setoptions(res.data);
    });
  }, []);
  const [Reclamation, setReclamation] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8051/reclamations/${id}`).then((res) => {
      setReclamation(res.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      title: Reclamation.title,
      content: Reclamation.content,
      ownerId: Reclamation.ownerId,
      eventId: "",
    },
    onSubmit: (values) => {
      axios
        .put(`http://localhost:8051/reclamations/update/${id}`, values)
        .then((res) => {
          if (res.data) {
            Navigate("/reclamations");
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
            Update Reclamation
          </CardTitle>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder={Reclamation.title}
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">ownerId</Label>
                <Input
                  id="ownerId"
                  name="ownerId"
                  placeholder={Reclamation.ownerId}
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.ownerId}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventId">Event</Label>
                <Input
                  id="eventId"
                  name="eventId"
                  type="select"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.eventId}
                >
                  {options.map((event, index) => (
                    <option key={index} value={event.id}>
                      {event.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="content">Content</Label>
                <Input
                  id="content"
                  name="content"
                  placeholder={Reclamation.content}
                  type="textarea"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.content}
                />
              </FormGroup>

              <Button className="btn" outline color="info" type="submit">
                Update Reclamation
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ReclamationUpdate;
