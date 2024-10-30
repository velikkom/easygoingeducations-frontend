import Swal from "sweetalert2";

export const swAlert = (title, text = "", icon = "info") => {
  // icon:success | error | warning | info | question
  Swal.fire({
    title,
    text,
    icon,
  });
};

export const swConfirm = (
  title,
  text = "",
  confirmButtonText = "Yes",
  icon = "infwarning"
) => {
  // icon:success | error | warning | info | question
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText: "Yes",
  });
};
