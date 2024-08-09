import Swal from "sweetalert2";
import { removeFromCart } from "../Redux/Slice/cartSlice";

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

export const notification = (title, icon = "success") => {
  Toast.fire({
    icon: icon,
    title: title,
  });
};

export const confirmAndRemoveFromCart = (idToRemove) => async (dispatch) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

  if (result.isConfirmed) {
    dispatch(removeFromCart(idToRemove));
    Swal.fire({
      title: "Deleted!",
      text: "The item has been removed from your cart.",
      icon: "success",
    });
  }
};
