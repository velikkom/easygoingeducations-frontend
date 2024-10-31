"use client";
import { createAdminAction } from "@/actions/admin-actions";
import {
  FormContainer,
  MaskedInput,
  PasswordInput,
  SelectInput,
  SubmitButton,
  TextInput,
} from "@/components/common/form-fields";
import { BackButton } from "@/components/common/form-fields/back-button";
import { config } from "@/helpers/config";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";

import { useFormState } from "react-dom";

export const AdminCreateForm = () => {
  const [state, dispatch] = useFormState(createAdminAction, initialResponse);

  

  const router = useRouter(); //formu basarılı kaydedince dashboarde gitmek için

  if (state.message) {
    swAlert(state.message, state.ok ? "success" : "error");
    if (state.ok) {
      router.push("/dashboard/admin");
    }
  }

  return (
    <FormContainer>
      <form action={dispatch}>
        <TextInput
          name={"name"}
          className={"mb-3"}
          label={"First Name"}
          errorMessage={state?.errors?.name}
        />

        <TextInput
          name={"surname"}
          className={"mb-3"}
          label={"Last Name"}
          errorMessage={state?.errors?.surname}
        />

        <SelectInput
          name={"gender"}
          className={"mb-3"}
          label={"Gender"}
          errorMessage={state?.errors?.gender}
          options={config.genders}
          optionLabel={"label"}
          optionValue={"value"}
        />
        <TextInput
          type="date"
          name="birthDay"
          className="mb-3"
          label="Date of borth"
          errorMessage={state?.errors?.birthDay}
        />

        <TextInput
          name={"birthPlace"}
          className={"mb-3"}
          label={"Place of Birth"}
          errorMessage={state?.errors?.birthPlace}
        />

        <MaskedInput
          name={"phoneNumber"}
          className={"mb-3"}
          label={"Phone"}
          errorMessage={state?.errors?.phoneNumber}
          mask="999-999-9999"
        />
        <MaskedInput
          name={"ssn"}
          className={"mb-3"}
          label={"SSN"}
          errorMessage={state?.errors?.ssn}
          mask="999-99-9999"
        />
        <TextInput
          name="username"
          className="mb-3"
          label="Username"
          errorMessage={state?.errors?.username}
        />

        <PasswordInput
          name={"password"}
          className={"mb-3"}
          label={"Password"}
          errorMessage={state?.errors?.password}
        />

        <PasswordInput
          name={"confirmPassword"}
          className={"mb-3"}
          label={"Confirm Password"}
          errorMessage={state?.errors?.confirmPassword}
        />
        <BackButton className="me-3" />
        <SubmitButton title={"Create"} />
      </form>
    </FormContainer>
  );
};
