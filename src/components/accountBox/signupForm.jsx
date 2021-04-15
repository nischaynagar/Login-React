import React, { useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Marginer direction="vertical" margin={5} />
        <MutedLink href="#">Forgot your password</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Signup</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?{" "}
          <BoldLink href="#" onClick={switchToSignin}>
            Signin
          </BoldLink>{" "}
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  );
}
