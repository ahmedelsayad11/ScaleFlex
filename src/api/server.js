import axios from "axios";

export const getAllImagesApi = async () => {
  const response = await axios.get(
    `https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy`
  );
  return response.data;
};
