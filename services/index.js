const axios = require("axios");
const instance = axios.create({
  baseURL: "https://mobile.creditclan.com/api/artisan/",
});
const { API_KEY } = process.env;
const config = {
  headers: { "x-api-key": API_KEY },
};
// annoying wrapper to avoid annoying data key
const getServices = async () => (await instance.get("/services", config)).data;
const searchUser = async (data) =>
  (await instance.post("/phone/search", data, config)).data;

const registerUser = async (data) =>
  (await instance.post("/register", data, config)).data;
const getStates = async () => (await instance.get("/states", config)).data;
const getLgas = async (query) =>
  (await instance.get(`/states/lgas/${query}`, config)).data;

const sendResponse = async (message, phone) => {
  try {
    const json = {
      phone: phone.replace(/^0/, "234"),
      message: message?.payload
        ? {
            ...message?.payload,
          }
        : message,
    };
    let result = await axios.post(
      "https://bnpl-chatbot-server.herokuapp.com/direct",
      json
    );
    return result.data;
  } catch (e) {
    console.log(e?.response?.body ?? e);
  }
};

module.exports = {
  getServices,
  searchUser,
  registerUser,
  getStates,
  getLgas,
  sendResponse,
  // sendResponse2,
};
