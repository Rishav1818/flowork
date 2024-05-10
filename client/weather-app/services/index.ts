import axios, { AxiosError } from "axios";

const BASE_URL = "http://localhost:5000/api/weather";

interface ErrorResponseData {
  cod: string;
  message: string;
}

export const getWeatherByLocationService = async (location: string) => {
  try {
    const params = {
      city: location
    };
    const response = await axios.get(BASE_URL, { params });
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    console.error('Error fetching weather data:', error);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponseData>; // Type assertion
      if (axiosError.response && axiosError.response.status === 404) {
        const errorMessage = axiosError.response.data.message;
        console.log("City not found:", errorMessage);
        window.alert(errorMessage);
        return null; // Or throw an error if necessary
      } else {
        console.log("An error occurred:", axiosError.response?.data);
        throw axiosError; // Throw other errors for further handling or logging
      }
    } else {
      console.log("An error occurred:", error);
      throw error; // Throw non-Axios errors for further handling or logging
    }
  }
};
