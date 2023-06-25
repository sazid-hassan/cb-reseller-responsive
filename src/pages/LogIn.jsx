import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const submit = (e) => {
    console.log(e);
  };

  return (
    <div className="auth">
      <p className="auth-title">Log In</p>

      <Form
        form={form}
        onFinish={(e) => submit(e)}
        className="auth-form"
        layout="vertical"
      >
        <Form.Item
          name="msisdn"
          label="Contact"
          rules={[
            {
              required: true,
              message: "Contact No. is required",
            },
          ]}
        >
          <Input type="number" size="large" placeholder="Ex:01XXXXXXXXX" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Button
          className="submit-btn"
          htmlType="submit"
          onClick={() => navigate("/")}
        >
          Submit
        </Button>
      </Form>

      <p className="redirection">
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default LogIn;
