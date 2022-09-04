import axios from "axios";
export default axios.create({
  baseURL: "https://nathasophonnodebackend.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
    "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAxMzQsIm5hbWUiOiJ0ZXN0X2RlbW8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjIyNDE3NTh9.x-IY1HFZvDO7_N04T64EuIYG43gpT6EVmsX6gEnm3po"
  }
});