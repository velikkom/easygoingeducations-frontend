import { Instructors } from "@/components/about/instructors";
import { Welcome } from "@/components/about/welcome";
import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import React from "react";


export const metadata = {
  title: "About Us",
  description:
    "Get inspired and join us for exciting events. Discover the latest trends and share your knowledge with others. Let's celebrate the learning and growth together. Join us on our journey.",
};

const Page = () => {
  return (
    <>
      <PageHeader title="About us" />
      <Spacer />
      <Welcome />
      <Spacer />
      <Instructors />
      <Spacer />
    </>
  );
};

export default Page;
