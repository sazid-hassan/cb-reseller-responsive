import { Form } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const submit = (e) => {
    console.log(e);
  };

  return (
    <div className="auth">
      <p className="auth-title">Sign Up</p>

      <Form
        form={form}
        onFinish={(e) => submit(e)}
        className="auth-form"
        layout="vertical"
      >
        Please Log In
      </Form>

      <p className="redirection">
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Sign Up</span>
      </p>
    </div>
  );
};

export default SignUp;
