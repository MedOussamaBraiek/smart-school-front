import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  CardText,
} from "reactstrap";
const baseURL = "http://localhost:8051/events/";

const EventTable = (props) => {
  const { events, deleteFun } = props;

  const deleteEvent = (id) => {
    axios.delete(baseURL + `delete/${id}`).then((res) => {
      deleteFun();
    });
  };
  const getById = (id) => {
    axios
      .get(baseURL + id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Owner</th>
                <th>Description</th>
                <th>Type</th>
                <th>Date</th>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata?.owner}</h6>
                        <span className="text-muted">{"email"}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata?.description}</td>
                  <td>
                    {tdata?.type === "SPORT" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3">
                        SPORT
                      </span>
                    ) : tdata?.type === "FOOD" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3">
                        FOOD
                      </span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3">
                        MUSIC
                      </span>
                    )}
                  </td>
                  <td>{tdata?.eventDate}</td>
                  <td>{tdata?.title}</td>
                  <td>
                    <div className="d-flex justify-content-evenly">
                      <Link to={`/updateEvent/${tdata.id}`}>
                        <Button className="btn" outline color="info">
                          {" "}
                          <i class="bi bi-pencil-fill"></i>
                        </Button>
                      </Link>
                      <Button
                        className="btn"
                        onClick={() => {
                          deleteEvent(tdata.id);
                          console.log(tdata.id);
                        }}
                        outline
                        color="danger"
                      >
                        {" "}
                        <i class="bi bi-trash"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default EventTable;
