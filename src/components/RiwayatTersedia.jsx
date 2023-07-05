import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import AccordionRiwayat from "./AccordionRiwayat";
// import { getTicketDetails, getApiAirports } from "../redux/actions/postActions";
// import { useDispatch, useSelector } from "react-redux";

function RiwayatTersedia({ filteredCards, filteredData }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const dayFormatter = new Intl.DateTimeFormat("id-id", { dateStyle: "long" });
  const timeFormatter = new Intl.DateTimeFormat("id-id", {
    timeStyle: "short",
  });

  const totalAdult = (A, B) => {
    const currency = A * B;
    return currency.toLocaleString("id-id", {
      style: "currency",
      currency: "IDR",
    });
  };

  const currencyFormatter = (currency) => {
    return currency.toLocaleString("id-id", {
      style: "currency",
      currency: "IDR",
    });
  };

  const renderFilteredMap = () => {
    if (filteredData.length > 0) {
      return filteredData.map((details) => {
        return (
          <Card
            onClick={() => handleOptionClick(details)}
            className={`mb-3 mt-3 option ${
              selectedOption === details.id ? "on" : ""
            }`}
            key={details.id}
            style={{
              width: "30rem",
              border:
                selectedOption === details.id ? "1px solid #7126B5BF" : "none",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Card.Header className="bg-transparent ">
              {details.ticket_status === true ? (
                <span
                  style={{
                    background: "#73CA5C",
                    color: "white",
                    padding: "5px 15px 5px 15px",
                    borderRadius: "15px",
                    width: "10px",
                  }}
                >
                  Issued
                </span>
              ) : (
                <span
                  style={{
                    background: "#FF0000",
                    color: "white",
                    padding: "5px 15px 5px 15px",
                    borderRadius: "15px",
                    width: "10px",
                  }}
                >
                  Unpaid
                </span>
              )}
            </Card.Header>

            <Card.Body className="d-flex justify-content-between">
              <div className="d-flex">
                <MdLocationPin size={25} />
                <Card.Text>
                  <b>{details.dep_airport}</b> <br />
                  {dayFormatter.format(new Date(details.flightDate_dep))}
                  <br />
                  {timeFormatter.format(new Date(details.flightDate_dep))}
                </Card.Text>
              </div>
              <div className="d-grid justify-items-center">
                <Card.Text>4h 0m</Card.Text>
                <BsArrowRight size={25} />
              </div>
              <div className="d-flex">
                <MdLocationPin size={25} />
                <Card.Text>
                  <b> {details.arr_airport}</b> <br />
                  {dayFormatter.format(new Date(details.flightDate_arr))}
                  <br />
                  {timeFormatter.format(new Date(details.flightDate_arr))}
                </Card.Text>
              </div>
            </Card.Body>

            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Text>
                  <strong>
                    Booking Code: <br />
                  </strong>
                  {details.booking_code}
                </Card.Text>
              </div>
              <div>
                <Card.Text>
                  <strong>
                    Class: <br />
                  </strong>
                  {details.flight_class}
                </Card.Text>
              </div>
              <div className="d-flex align-items-center">
                <Card.Text>
                  <span style={{ color: "#4B1979" }}>
                    <strong>
                      {" "}
                      {totalAdult(details.adult, +details.flight_price)}
                    </strong>
                  </span>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        );
      });
    } else {
      return filteredCards.map((details) => {
        return (
          <Card
            onClick={() => handleOptionClick(details)}
            className={`mb-3 mt-3 option ${
              selectedOption === details.id ? "on" : ""
            }`}
            key={details.id}
            style={{
              width: "30rem",
              border:
                selectedOption === details.id ? "1px solid #7126B5BF" : "none",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Card.Header className="bg-transparent ">
              {details.ticket_status === true ? (
                <span
                  style={{
                    background: "#73CA5C",
                    color: "white",
                    padding: "5px 15px 5px 15px",
                    borderRadius: "15px",
                    width: "10px",
                  }}
                >
                  Issued
                </span>
              ) : (
                <span
                  style={{
                    background: "#FF0000",
                    color: "white",
                    padding: "5px 15px 5px 15px",
                    borderRadius: "15px",
                    width: "10px",
                  }}
                >
                  Unpaid
                </span>
              )}
            </Card.Header>

            <Card.Body className="d-flex justify-content-between">
              <div className="d-flex">
                <MdLocationPin size={25} />
                <Card.Text>
                  <b>{details.dep_airport}</b> <br />
                  {dayFormatter.format(new Date(details.flightDate_dep))}
                  <br />
                  {timeFormatter.format(new Date(details.flightDate_dep))}
                </Card.Text>
              </div>
              <div className="d-grid justify-items-center">
                <Card.Text>4h 0m</Card.Text>
                <BsArrowRight size={25} />
              </div>
              <div className="d-flex">
                <MdLocationPin size={25} />
                <Card.Text>
                  <b> {details.arr_airport}</b> <br />
                  {dayFormatter.format(new Date(details.flightDate_arr))}
                  <br />
                  {timeFormatter.format(new Date(details.flightDate_arr))}
                </Card.Text>
              </div>
            </Card.Body>

            <Card.Body className="d-flex justify-content-between">
              <div>
                <Card.Text>
                  <strong>
                    Booking Code: <br />
                  </strong>
                  {details.booking_code}
                </Card.Text>
              </div>
              <div>
                <Card.Text>
                  <strong>
                    Class: <br />
                  </strong>
                  {details.flight_class}
                </Card.Text>
              </div>
              <div className="d-flex align-items-center">
                <Card.Text>
                  <span style={{ color: "#4B1979" }}>
                    <strong>
                      {currencyFormatter(
                        details.adult * +details.flight_price + +details.tax
                      )}
                    </strong>
                  </span>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        );
      });
    }
  };
  return (
    <Container>
      {windowWidth <= 1200 && (
        <AccordionRiwayat
          filteredData={filteredData}
          filteredCards={filteredCards}
        />
      )}
      {windowWidth > 1200 ? (
        <>
          {" "}
          <Row className="d-flex">
            <Col
              style={{
                height: "689px",
                // width: "180px",
                overflowY: "scroll",
              }}
            >
              {renderFilteredMap()}
            </Col>
            <Col>
              {selectedOption && (
                <Card
                  border="transparent"
                  style={{
                    width: "30rem",
                    borderRight: "0px",
                    borderLeft: "0px",
                    borderTop: "0px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                  }}
                >
                  <Card.Header className="bg-transparent d-flex justify-content-between align-items-center">
                    <h5 className="mt-3">
                      <strong>Detail Pesanan</strong>
                    </h5>

                    <div>
                      {selectedOption.ticket_status === true ? (
                        <span
                          style={{
                            background: "#73CA5C",
                            color: "white",
                            padding: "5px 15px 5px 15px",
                            borderRadius: "15px",
                            width: "10px",
                          }}
                        >
                          Issued
                        </span>
                      ) : (
                        <span
                          style={{
                            background: "#FF0000",
                            color: "white",
                            padding: "5px 15px 5px 15px",
                            borderRadius: "15px",
                            width: "10px",
                          }}
                        >
                          Unpaid
                        </span>
                      )}
                    </div>
                  </Card.Header>

                  <ListGroup
                    className="d-grid border-1 "
                    style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                  >
                    <div>
                      <Card.Text>
                        Booking Code:&nbsp;
                        <span style={{ color: "#7126B5" }}>
                          <strong>{selectedOption.booking_code}</strong>
                        </span>
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Card.Text>
                        <strong>
                          {timeFormatter.format(
                            new Date(selectedOption.flightDate_dep)
                          )}
                        </strong>
                      </Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>Keberangkatan</strong>
                        </span>
                      </Card.Text>
                    </div>
                    <div className="d-grid ">
                      <Card.Text>
                        {dayFormatter.format(
                          new Date(selectedOption.flightDate_dep)
                        )}
                        <br />
                        <span style={{ color: "#4B1979" }}>
                          <b> {selectedOption.dep_airport}</b> - Terminal 1A
                          Domestik
                        </span>
                      </Card.Text>
                    </div>
                  </ListGroup>
                  <ListGroup
                    style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                  >
                    <Card.Text>
                      <strong>
                        Jet Air - Economy <br />
                      </strong>
                      <strong>
                        JT - 203 <br />
                        <br />
                      </strong>
                      <strong>
                        Informasi: <br />
                      </strong>
                      <span style={{ color: "#4B1979" }}>
                        Penumpang 1: Mr. {selectedOption.passenger_name} <br />
                      </span>
                      ID: 1234567 <br />
                      <span style={{ color: "#4B1979" }}>
                        Penumpang 2: Miss {selectedOption.passenger_name} <br />
                      </span>
                      ID: 789658 <br />
                    </Card.Text>
                  </ListGroup>
                  <ListGroup
                    style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <Card.Text>
                        <strong>
                          {timeFormatter.format(
                            new Date(selectedOption.flightDate_arr)
                          )}
                        </strong>
                      </Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>Kedatangan</strong>
                        </span>
                      </Card.Text>
                    </div>
                    <Card.Text>
                      {dayFormatter.format(
                        new Date(selectedOption.flightDate_arr)
                      )}{" "}
                      <br />
                      <span style={{ color: "#4B1979" }}>
                        <b> {selectedOption.arr_airport}</b> Airport
                      </span>
                    </Card.Text>
                    <div className="d-grid "></div>
                  </ListGroup>
                  <ListGroup
                    style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                  >
                    <Card.Text>
                      <strong>Rincian Harga</strong>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Card.Text>{selectedOption.adult} Adults</Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>
                            {totalAdult(
                              selectedOption.adult,
                              +selectedOption.flight_price
                            )}
                          </strong>
                        </span>
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Card.Text>1 Baby</Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>Rp 0</strong>
                        </span>
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Card.Text>Tax</Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>
                            {currencyFormatter(selectedOption.tax)}
                          </strong>
                        </span>
                      </Card.Text>
                    </div>
                  </ListGroup>
                  <ListGroup
                    style={{
                      borderBottomLeftRadius: "0",
                      borderBottomRightRadius: "0",
                      border: "0",
                      borderBottom: "0",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <Card.Text>Total</Card.Text>
                      <Card.Text>
                        <span style={{ color: "#A06ECE" }}>
                          <strong>
                            {currencyFormatter(
                              selectedOption.adult *
                                +selectedOption.flight_price +
                                +selectedOption.tax
                            )}
                          </strong>
                        </span>
                      </Card.Text>
                    </div>
                  </ListGroup>
                  {selectedOption.ticket_status === true ? (
                    <Button
                      style={{
                        background: "#7126B5",
                        color: "white",
                        borderTopRightRadius: "0",
                        borderTopLeftRadius: "0",
                        borderBottom: "0",
                        border: "0",
                      }}
                    >
                      Cetak Tiket
                    </Button>
                  ) : (
                    <Button
                      style={{
                        background: "#FF0000",
                        color: "white",
                        borderTopRightRadius: "0",
                        borderTopLeftRadius: "0",
                        border: "0",
                      }}
                    >
                      Lanjut Bayar
                    </Button>
                  )}
                </Card>
              )}
            </Col>
          </Row>
        </>
      ) : null}
    </Container>
  );
}

export default RiwayatTersedia;
