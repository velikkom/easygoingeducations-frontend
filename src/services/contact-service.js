import { CONTACT_CREATE_API } from "@/helpers/api-routes";

export const createContactMessage = async (payLoad) => {
  return fetch(CONTACT_CREATE_API, {
    method: "POST",
    body: JSON.stringify(payLoad),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
