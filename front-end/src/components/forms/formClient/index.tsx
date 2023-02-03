import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, FormStyle } from "./style";
import { AuthContext, IDataRegister } from "../../../contexts/AuthContext";
import { useContext } from "react";
import { schema } from "../../../validations/validationRegister";

export const FormClientRegister = () => {
  const { clientRegister } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>({});

  const onSubmitFunction = (data: IDataRegister) => {
    const castedData = data as IDataRegister;
    clientRegister(castedData);
  };

  return (
    <Container>
      <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
        <input type="text" placeholder="Full Name" {...register("name")} />
        <p>{errors.name?.message}</p>

        <input type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input type="text" placeholder="Phone" {...register("telephone")} />
        <p>{errors.telephone?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <button className="btn" type="submit">
          Register
        </button>
      </FormStyle>
    </Container>
  );
};
