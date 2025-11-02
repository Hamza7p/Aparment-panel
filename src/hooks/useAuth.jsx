import { useMutation } from '@tanstack/react-query';
import { login, logout, sendotp, setPassword, verifyotp } from '../api/auth';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RoleName } from '@/enums/RoleName';

export const useLogin = () => {
  // const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const token = data?.token;
      const role = data?.user?.role?.name ?? RoleName.customer;
      const name = data?.user?.name ?? "";

      toast.success(`Welcome ${name}`);
      // navigate("/");
    },
    onError: (error) => {
      return error;
    },
  });
};

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