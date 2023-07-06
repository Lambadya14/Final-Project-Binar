import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const DataPenumpang = () => {
  const [showInput, setShowInput] = useState(false);
  const [checkout, setCheckout] = useState();
  useEffect(() => {
    // async function fetchAPI() {
    //   try {
    //     const token = localStorage.getItem("token");
    //     let data = JSON.stringify({
    //       full_name: "Victor Sirait",
    //       family_name: "Sirait",
    //       title: "string",
    //       date_birth: "2023-07-05",
    //       nationality: "Indonesia",
    //       identity_number: "123123123",
    //       issuing_country: "Indonesia",
    //       identity_expired: "2023-07-12",
    //       seat_id: 1,
    //       seat_return_id: 1,
    //     });
    //     let config = {
    //       method: "post",
    //       url: `${process.env.REACT_APP_API}/checkout-user`,
    //       header: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //         Authorization: `${token}`,
    //       },
    //       data: data,
    //     };
    //     const response = await axios(config);
    //     setCheckout(response.data);
    //   } catch (error) {
    //     if (axios.isAxiosError(error)) {
    //       toast.error(error.response.data.message);
    //       return;
    //     }
    //     toast.error(error.message);
    //   }
    // }
    // fetchAPI();
  }, []);
  const toggleInput = () => {
    setShowInput(!showInput);
  };
  return (
    <div className="dataPenumpang">
      <h5 className="fw-bold mb-4">Isi Data Penumpang</h5>
      <Card className="border-0">
        <Card.Header className="bg-dark text-light">
          Data Diri Penumpang 1 - Adult
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Title
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Nama Lengkap
              </Form.Label>
              <Form.Control type="text" />
              <div className="d-flex justify-content-between align-items-center mt-2">
                <Form.Text>Punya Nama Keluarga?</Form.Text>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onClick={toggleInput}
                />
              </div>
            </Form.Group>

            {showInput && (
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                  Nama Keluarga
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            )}

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Tanggal Lahir
              </Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Kewarganegaraan
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                KTP/Paspor
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Negara Penerbit
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ color: "#7126b5" }}>
                Berlaku Sampai
              </Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DataPenumpang;
