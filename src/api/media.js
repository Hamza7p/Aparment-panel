import axiosBase from "./Base/axiosBase";


export const uploadMedia = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axiosBase.post("/media/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data.data; // {id, url}
};
