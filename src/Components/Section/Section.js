import React from "react";
// import PropTypes from "prop-types";
import { Section } from "./styles";

export default function Sections({ children, title }) {
  return (
    <Section>
      {title} {children}
    </Section>
  );
}

// Section.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.element),
// };
