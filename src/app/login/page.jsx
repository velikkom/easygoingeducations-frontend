import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { LoginForm } from "@/components/login/login-form";
import React from "react";

export const metadata = {
  title: "Login",
  description:
    "Get inspired and join us for exciting events. Discover the latest trends and share your knowledge with others. Let's celebrate the learning and growth together. Join us on our journey.",
};
const Page = () => {
  return (
    <>
      <PageHeader title={"Login"} />
      <Spacer />
      <LoginForm />
      <Spacer />
    </>
  );
};

export default Page;
