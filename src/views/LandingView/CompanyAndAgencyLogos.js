import React from "react";
import { Image, ImageGroup } from "semantic-ui-react";
import { responsiveWrapper } from "../../wrappers";

const logos = [
  "dow.jpeg",
  "usEPA.png",
  "shell.png",
  "brCEB.png",
  "monsanto.jpg",
  "AMEC Foster Wheeler.png",
  "GZA.jpg",
  "US Army Corps of Engineers.png",
  "US Navy.jpg",
  "California Water Boards.jpg",
  "ExxonMobile.png",
  "Nuclear Reg Comm (NRC).png",
  "BARR Eng..png",
  "Vale-Brasil.png",
  "TX Comm Envir Qual.png",
  "Brasil Transpetro.png",
  "Bristol-Myers Squibb.png",
  "AECOM.png",
  "USGS.png",
  "United Technologies.jpg",
  "Golder-Logo.jpg",
  "Landau & Assoc.jpg",
  "National Energy Board.jpg",
  "Regenesis.jpg",
  "BNSF Railway.png",
  "ConocoPhillips.png",
  "Esso=Imperial Oil.png",
  "GeoKlock-Brasil.jpg",
  "RAMBOLL.jpg",
  "SNC-LAVALIN.png",
];

const CompanyAndAgencyLogos = (props) => {
  const { mobile } = props;

  return (
    <ImageGroup size={mobile ? "tiny" : "small"}>
      {logos.map((source, index) => (
        <Image
          rounded
          src={require(`../../media/company-logos/${source}`).default}
          key={`attendee-logos-${index}`}
          style={{
            filter: "opacity(1) drop-shadow(2px 3px 1px rgba(0,0,0,0.4))",
          }}
        />
      ))}
    </ImageGroup>
  );
};

export default responsiveWrapper(CompanyAndAgencyLogos);
