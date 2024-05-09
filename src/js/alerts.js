import Swal from 'sweetalert2'

form.reset() //reset de values in the forms
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });

export function alertSmallSuccess(messag) {
        Toast.fire({
            icon: "success",
            title: messag
        })
    }
    
    
    
    