import React, { useRef } from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

export default function About() {
  const firstName = info.firstName.toLowerCase();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9uek0ob",
        "template_kfubdrp",
        form.current,
        "2ycgwEtqbyOcdOt-b"
      )
      .then(
        (result) => {
          swal({
            title: "Message sent successfully",
            icon: "success",
          });
          e.target.reset();
        },
        (error) => {
          swal({
            title: error.text,
            icon: "error",
          });
        }
      );
  };
  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd contact
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            contact <span className={Style.green}>(main)</span> $
          </span>
          ls
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <p style={{ color: info.baseColor }}> name</p>
          <input type="text" name="user_name" required />
          <p style={{ color: info.baseColor }}> email</p>
          <input type="email" name="user_email" required />
          <p style={{ color: info.baseColor }}> message</p>
          <textarea rows="8" cols="20" name="message" required />
          <input type="submit" value="Send" />{" "}
        </form>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={skillsText()} />
    </Box>
  );
}
