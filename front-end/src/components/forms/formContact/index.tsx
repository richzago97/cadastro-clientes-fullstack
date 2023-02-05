import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";
import { Container, FormStyle } from "./style";

const FormContactRegister = () => {
  const { contactRegister } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({});

  const onSubmitFunction = (data: any) => {
    const castedData = data as any;
    contactRegister(castedData);
  };

  return (
    <Container>
      <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Register Contact</h2>
        <input type="text" placeholder="Full Name" {...register("name")} />

        <input type="text" placeholder="Phone" {...register("telephone")} />

        <input type="text" placeholder="Email" {...register("email")} />

        <button className="btn" type="submit">
          Register
        </button>
      </FormStyle>
    </Container>
  );
};
export default FormContactRegister;
