import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name:"dczzwscqm",
  api_key:"472968258966392",
  api_secret: "q1YrZo3baAq9mlWj8R3AiqcCTgU",
});

app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
