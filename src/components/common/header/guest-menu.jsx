import Link from "next/link";
import React from "react";

export const GuestMenu = () => {
  return (
    <Link href={"/login"} className="btn btn-outline-primary">
      <i className="pi pi-user"></i> Login
    </Link>
  );
};
