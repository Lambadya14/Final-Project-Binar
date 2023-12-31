import React, { useState } from "react";
import { Col, Container, Form, Row, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { toast } from "react-toastify";
import axios from "axios";
import "../assets/css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      email,
      password,
    });

    dispatch(login(data, navigate));
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    if (email.length === 0) {
      toast.warn("Alamat Email Tidak Boleh Kosong");
      return;
    }
    try {
      let data = JSON.stringify({
        email,
      });

      let config = {
        method: "post",
        url: `${process.env.REACT_APP_API}/auth/send-reset-password`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log(response.data);

      toast.success("Reset Password Berhasil di Kirim ke Email Anda");
      navigate("/ResetPassword");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  return (
    <Container fluid className="vh-100">
      <Row className="h-100" onSubmit={onSubmit}>
        <Col className="bg-color d-flex justify-content-center align-items-center">
          <img
            src={require("../assets/img/AirTix.svg").default}
            fluid
            style={{
              top: "200px",
              left: "85px",
              width: "300px",
              height: "200px",
            }}
            alt="img"
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center bg-body">
          <div className="w-75">
            <h3 className="title-login">Login</h3>
            <Form className=" mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email/No Telepon</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Example: react@gmail.com"
                  style={{ borderRadius: "5px", height: "50px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div class="d-flex justify-content-between">
                  <Form.Label>Password</Form.Label>
                  <Link onClick={resetPassword} className="text wrong-password">
                    Lupa Kata Sandi
                  </Link>
                </div>
                <InputGroup className="mb-3">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                    style={{ borderRadius: "5px", height: "50px" }}
                  />
                  <InputGroup.Text onClick={togglePasswordVisibility}>
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <button type="submit" className="login w-100">
                Login
              </button>
              <div className="d-flex justify-content-center mt-3">
                <Form.Text>
                  Belum Punya Akun ?
                  <Link to="/Register" className="ms-2 text-color text">
                    Daftar di Sini
                  </Link>
                </Form.Text>
              </div>
              <div className="text-center my-3">
                <GoogleLogin log={`Login With Google`} />
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
