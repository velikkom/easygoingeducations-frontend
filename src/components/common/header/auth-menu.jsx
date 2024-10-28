import { auth } from "@/auth";
import React from "react";
import { UserMenu } from "./user-menu";
import { GuestMenu } from "./guest-menu";
import userMenuData from "@/helpers/data/user-menu.json";

export const AuthMenu = async () => {
  const session = await auth();
  // session dan user rolu alma
  const role = session?.user?.role;
  const userMenu = role ? userMenuData[role.toLowerCase()] : null;

  console.log(role, userMenu);

  /**
   * iki durum var
   * 1- kullanıcı lgın olmusmu bunun ıcın sessıon lazım
   * Bu bilgiye server componenten ulasılabılır
   * 2- kullanıcı login olmamışı
   */

  return (
    <>
      {role ? (
        <UserMenu session={session} userMenu={userMenu} />
      ) : (
        <GuestMenu />
      )}
    </>
  );
};
