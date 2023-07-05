import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataPemesan from "../components/DataPemesanan";
import DataPenumpang from "../components/DataPenumpang";
import Matahari from "../assets/img/Matahari.png";
import Navbar from "../components/Navbar";
import "../assets/css/Checkout.css";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const Checkout = () => {
  const [time, setTime] = useState(900); // Initial time in seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Refresh the page when time reaches 0
    if (time === 0) {
      clearInterval(countdown);
      window.location.reload();
    }

    return () => {
      clearInterval(countdown);
    };
  }, [time]);

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <>
      <Navbar />
      <Container className="bg warning mt-5">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item active>
                <Link
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "#7126B5" }}
                >
                  Isi Data Diri
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                <Link
                  to="/Payment"
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "#7126B5" }}
                >
                  Bayar
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
                <Link
                  className="fw-bold"
                  style={{ textDecoration: "none", color: "#7126B5" }}
                >
                  Selesai
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Alert
            className="text-center text-light border-0"
            style={{ background: "#FF0000", borderRadius: "10px" }}
          >
            Selesaikan dalam {formatTime()}
          </Alert>
        </Row>
        <Row className="gap-4">
          <Col>
            <Row className="border py-4 px-4">
              <DataPemesan />
            </Row>
            <Row className="border py-4 px-4 mt-3">
              <DataPenumpang />
            </Row>
            <Button type="submit" className="w-100 my-3 button-save">
              Simpan
            </Button>
          </Col>
          <Col>
            <div className="mt-3">
              <h5 className="fw-bold">Detail Penerbangan</h5>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">07:00</h5>
                <h6 className="fw-bold" style={{ color: "#7126B5" }}>
                  Keberangkatan
                </h6>
              </div>
              <p className="mb-0">3 Maret 2023</p>
              <p>Soekarno Hatta - Terminal 1A Domestik</p>
            </div>

            <hr />

            <Row className="d-flex align-items-center">
              <Col md={1}>
                <img src={Matahari} alt="" />
              </Col>
              <Col md="auto">
                <h6 className="fw-bold">Jet Air - Economy</h6>
                <h6 className="fw-bold mb-4">JT - 203</h6>
                <h6 className="fw-bold">Informasi:</h6>
                <p className="mb-0">Baggage 20kg</p>
                <p className="mb-0">Cabin baggage 7 kg</p>
                <p>In Flight Entertainment</p>
              </Col>
            </Row>

            <hr />

            <div>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">11:00</h5>
                <h6 className="fw-bold" style={{ color: "#7126B5" }}>
                  Kedatangan
                </h6>
              </div>
              <p className="mb-0">3 Maret 2023</p>
              <p className="fw-bold">Melbourne International Airport</p>
            </div>

            <hr />

            <div>
              <h5 className="fw-bold">Rincian Harga</h5>
              <div className="d-flex justify-content-between align-items-center">
                <p>2 Adults</p>
                <p>IDR 9.550.000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>1 Baby</p>
                <p>IDR 0</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>Tax</p>
                <p>IDR 300.000</p>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold txt-primary">Total</h5>
              <h5 className="fw-bold" style={{ color: "#7126B5" }}>
                IDR 9.850.000
              </h5>
            </div>
            <br />
            <button type="submit" className="w-100 pay">
              Lanjut Bayar
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
