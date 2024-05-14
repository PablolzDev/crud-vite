import Swal from "sweetalert2";

//reset de values in the forms
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export function alertSmallSuccess(messag) {
  Toast.fire({
    icon: "success",
    title: messag,
  });
}
