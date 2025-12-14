// src/hooks/useToast.js
import { toast } from "sonner";

export default function useToast() {
  function showToast(message, type) {
    switch (type) {
      case "success":
        toast.success(message, {
          style: {
            border: "1px solid green",
            borderColor: "green",
            color: "green",
          },
        });
        break;
      case "warning":
        toast.warning(message, {
          style: {
            border: "1px solid yellow",
            borderColor: "yellow",
            color: "yellow",
          },
        });
        break;
      case "error":
        toast.error(message, {
          style: {
            border: "1px solid red",
            borderColor: "red",
            color: "red",
          },
        });
        break;
      default:
        toast(message);
    }
  }

  return showToast;
}
