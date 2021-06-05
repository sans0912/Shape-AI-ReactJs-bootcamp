import React from "react";
function Footer() {
  var cur_year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {cur_year}</p>
    </footer>
  );
}
export default Footer;
