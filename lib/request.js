import axios from "axios";

export default async function request(args) {
  const response = await axios({
    method: "POST",
    url: "https://api.ragnor.co",
    data: args,
    headers: {
      "x-api-key": process.env.ATHENA_KEY,
    },
  });

  console.log(response);
  return response.data;
}
