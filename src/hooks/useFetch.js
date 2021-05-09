import react, { useEffect, useState } from "react";
import app from "../apis/jsonPlaceHolder";
export const useFetch = (id) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      const { data } = await app.get(`/user/${id}`);
      // data = data.data;
      const user = data.data.user;
      console.log("da", data.data.user);
      setFname(user.fname);
      setLname(user.lname);
      setEmail(user.email);
      setPhoto(user.photo);
    };
    getProfile();
  }, []);
  return [fname, setFname, lname, setLname, email, setEmail, photo, setPhoto];
};
