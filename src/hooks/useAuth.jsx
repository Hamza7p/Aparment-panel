"use client";

import { useMutation } from "@tanstack/react-query";
import { login, logout, sendotp, setPassword, verifyotp } from "../api/auth";
import { toast } from "react-toastify";
import { RoleName } from "@/enums/RoleName";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";


export const useLogin = () => {
  const router = useRouter();
  const { loginUser } = useAuth();

  return useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      const token = response?.data?.token;
      const user = response?.data?.user ?? {};
      const roleName = user?.role?.[0]?.name ?? RoleName.customer;

      loginUser({ ...user, roleName }, token);

      toast.success(`Welcome ${user?.name || " "}`);

      // ✅ Redirect by role
      if (roleName === RoleName.admin) {
        router.push("/dashboard");
      } else {
        router.push("/shop");
      }
    },
    onError: (error) => {
      return error;
    },
  });
};

// export const useLogout = () => {
//   const router = useRouter();

//   return useMutation({
//     mutationFn: logout,
//     onSuccess: () => {
//       // ✅ Clear storage on logout
//       localStorage.removeItem("token");
//       localStorage.removeItem("role");
//       localStorage.removeItem("user");

//       toast.info("Logged out successfully");
//       router.push("/login");
//     },
//     onError: (error) => {
//       toast.error("Logout failed");
//       router.push("/login");
//     },
//   });
// };

// export const useSendOTP = () => {
//   return useMutation({
//     mutationFn: sendotp,
//     onSuccess: (data) => {
//       console.log("OTP sent:", data);
//     },
//     onError: (error) => {
//       toast.error("Failed to send OTP");
//     },
//   });
// };

// export const useVerifyOTP = () => {
//   return useMutation({
//     mutationFn: verifyotp,
//     onError: (error) => {
//       toast.error("OTP verification failed");
//     },
//   });
// };

// export const useSetPassword = () => {
//   return useMutation({
//     mutationFn: setPassword,
//     onSuccess: (data) => {
//       toast.success("Password set successfully");
//     },
//     onError: (error) => {
//       toast.error("Failed to set password");
//     },
//   });
// };


export const useLogout = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // dispatch(logoutRedux());
      // navigate("/login");
    },
    onError: () => {
      // dispatch(logoutRedux());
      // navigate("/login");
    }
  });
}

export const useSendOTP = () => {
  return useMutation({
    mutationFn: sendotp,
    onSuccess: (data) => {
      console.log(data); // TODO delete this console
    }
  })
}

export const useVerifyOTP = () => {
  return useMutation({
    mutationFn: verifyotp,
  })
}

export const useSetPassword = () => {
  // const dispatch = useDispatch();

  return useMutation({
    mutationFn: setPassword,
    onSuccess: (data) => {
      // dispatch(loginSuccess(data));
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  })
}