import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://yash786:yash786@cluster0.wxkpxlk.mongodb.net/", {
      dbName: "MERN_STACK_BLOGGING_APP",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};
