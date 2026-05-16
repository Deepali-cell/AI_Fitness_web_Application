import axios from "axios";

export const getAiRecommendation = async () => {
  const { data } = await axios.get("/api/generateRecommendation");

  return data;
};
