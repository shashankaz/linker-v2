import LinkComponent from "./components/LinkComponent";
import logo from "./assets/logo.jpeg";

import React from "react";

const App = () => {
  return (
    <>
      <div id="container">
        <img src={logo} width={100} height={100} id="logo" />
        <h1>Shashank</h1>
        <div id="social-bar">
          <a href="https://www.instagram.com/shashankaz" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/shashankaz/" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/shashankaz" target="_blank">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
        <LinkComponent title="Github" url="https://github.com/shashankaz" />
        <LinkComponent title="Projects" url="https://projects.shashankk.tech/" />
        <LinkComponent
          title="CodeChef"
          url="https://www.codechef.com/users/o_r_e_o"
        />
        <LinkComponent
          title="Codeforces"
          url="https://codeforces.com/profile/shashankaz"
        />
        <LinkComponent
          title="LeetCode"
          url="https://leetcode.com/shashankaz/"
        />
      </div>
    </>
  );
};

export default App;
