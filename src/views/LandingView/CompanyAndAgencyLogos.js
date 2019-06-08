import React from "react";
import { Image, ImageGroup } from "semantic-ui-react";
import { responsiveWrapper } from "../../wrappers";

const logoSources = {
  DOW: require("../../media/logos/dow.jpeg"),
  usEPA: require("../../media/logos/usEPA.png"),
  Shell: require("../../media/logos/shell.png"),
  brCEB: require("../../media/logos/brCEB.png"),
  Monsanto: require("../../media/logos/monsanto.jpg"),
};

const CompanyAndAgencyLogos = props => {
  const { mobile } = props;

  const { usEPA, Shell, brCEB, DOW, Monsanto } = logoSources;
  const mobileLogoOrder = [usEPA, Shell, brCEB, DOW, Monsanto];
  const standardLogoOrder = [usEPA, DOW, Shell, Monsanto, brCEB];

  return (
    <ImageGroup size={mobile ? "tiny" : "small"}>
      {(mobile ? mobileLogoOrder : standardLogoOrder).map((source, index) => (
        <Image
          rounded
          src={source}
          key={`attendee-logos-${index}`}
          style={{
            filter: "opacity(1) drop-shadow(2px 3px 1px rgba(0,0,0,0.4))",
            margin: mobile ? "10px 10px" : "0 10px",
          }}
        />
      ))}
    </ImageGroup>
  );
};

export default responsiveWrapper(CompanyAndAgencyLogos);
