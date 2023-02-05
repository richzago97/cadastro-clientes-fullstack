import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext";
import { Container, FormStyle } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaContactRegister } from "../../../validations/validationRegister";
import { IContactRegister } from "../../../interfaces/client";

const FormContactRegister = () => {
  const { contactRegister } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactRegister>({
    resolver: yupResolver(schemaContactRegister),
  });

  const onSubmitFunction = (data: any) => {
    const castedData = data as any;
    contactRegister(castedData);
  };

  return (
    <Container>
      <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Register Contact</h2>
        <input type="text" placeholder="Full Name" {...register("name")} />
        <p className="error">{errors.name?.message}</p>

        <input type="text" placeholder="Phone" {...register("telephone")} />
        <p className="error">{errors.telephone?.message}</p>

        <input type="text" placeholder="Email" {...register("email")} />
        <p className="error">{errors.email?.message}</p>

        <button className="btn" type="submit">
          Register
        </button>
      </FormStyle>
    </Container>
  );
};
export default FormContactRegister;
