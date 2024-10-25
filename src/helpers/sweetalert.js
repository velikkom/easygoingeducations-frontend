import Swal from "sweetalert2";

export const swAlert = (title, text = "", icon = "info") => {
  // icon:success | error | warning | info | question
  Swal.fire({
    title,
    text,
    icon,
  });
};
