import { ToastContainer } from 'react-toastify'

const ToastNotificaton = () => {

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ zIndex: 9999 , fontFamily: "Tajawal" }}
    />
  );
}

export default ToastNotificaton