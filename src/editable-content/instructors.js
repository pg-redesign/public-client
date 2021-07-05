//-- DO NOT CHANGE ANYTHING BETWEEN THESE LINES --//

import PropTypes from "prop-types";

const linkedinBase = "https://linkedin.com/in";

const instructorImage = (name) =>
  require(`../media/instructors/${name}.jpg`).default;

export const instructorType = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired,
  bio: PropTypes.arrayOf(PropTypes.string).isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.oneOf(["remediation", "pollution", "brasil"])
  ).isRequired,
};

export const instructorTypeShape = PropTypes.shape(instructorType);

//-- DO NOT CHANGE ANYTHING BETWEEN THESE LINES --//

// -- ONLY EDIT BELOW THIS LINE -- //

// names availabkle for the "courses" field: "pollution", "remediation", "brasil"

const instructorProfiles = [
  {
    name: "Robert W. Cleary", // full name
    image: instructorImage("cleary"), // lowercase last name (should match the media/instructors/ image file name)
    courses: ["remediation", "pollution", "brasil"], // <-- courses field, see options above
    profileLink: `${linkedinBase}/bob-cleary-princeton-groundwater/`, // full profile URL, this is a shorthand for linkedin only
    bio: [
      // each line is a bullet point (must be between the brackets [] and comma-separated)
      "Received his Ph.D. in Chemical Engineering from The University of Massachusetts in Amherst",
      "Co-author of the first peer-reviewed chlorinated solvent remediation paper in 1981",
      "Former professor of Civil and Geological Engineering at Princeton University",
      "Former professor of Geosciences at The University of São Paulo, Brasil",
      "Current instructor in the National Ground Water Association’s Modflow course",
      "Adjunct professor in the Hydrogeology Field School course of the Earth and Environmental Sciences Department at The University of Waterloo",
      "Active groundwater consultant to private industry",
    ],
    // do not add anything else after the comma above
  },

  {
    name: "John A. Cherry",
    image: instructorImage("cherry"),
    courses: ["pollution"],
    profileLink: "https://en.wikipedia.org/wiki/John_A._Cherry",
    bio: [
      "Received his Ph.D. in Hydrogeology from The University of Illinois",
      "Distinguished Emeritus Professor at The University of Waterloo where his research focuses on field studies of the migration and fate of DNAPLs in groundwater and remediation",
      "Adjunct Professor at The University of Guelph",
      'Co-author of the textbook "Ground Water" with R.A. Freeze',
      'Co-editor and co-author of several chapters in the book "Dense Chlorinated Solvents and Other DNAPLs in Groundwater"',
    ],
  },

  {
    name: "Rodrigo C. Cunha",
    image: instructorImage("cunha"),
    courses: ["brasil"],
    profileLink: `${linkedinBase}/rodrigo-cunha-33b68511/`,
    bio: [
      "Received his Ph.D. in Hydrogeology and M.Sc. in Soil Sciences from the The University of São Paulo, Brasil",
      "Senior Engineer with over 40 years of experience at The São Paulo State Environmental Protection Agency (CETESB)",
      "Coordinator of the post-graduation courses in the field of Contaminated Site Management and Remediation at SENAC University in São Paulo, Brasil",
      "Recognized as one of the most influential regulators in the field having developed regulations for contaminated sites management, investigation and remediation throughout Brasil",
    ],
  },

  {
    name: "Murray D. Einarson",
    image: instructorImage("einarson"),
    courses: ["remediation"],
    profileLink: `${linkedinBase}/murray-einarson-5144085b/`,
    bio: [
      "Received his B.A. in Geology from U.C. Santa Barbara and his M.Sc. in Hydrogeology from The University of Waterloo",
      "Principal Hydrogeologist with Haley & Aldrich in Oakland, California",
      "Co-authored industry and regulatory guidance documents in environmental site characterization and in situ remediation",
      "Awarded multiple patents on innovative site assessment technologies including a dual-tube soil coring system and a multi-level groundwater monitoring system (CMT™ multilevel monitoring system sold by Solinst)",
      "2009 recipient of The NGWA GroundWater Technology Award",
    ],
  },

  {
    name: "David B. Kaminski",
    image: instructorImage("kaminski"),
    courses: ["pollution"],
    profileLink: `${linkedinBase}/david-kaminski-19a4751/`,
    bio: [
      "Senior Vice President at QED Environmental Systems",
      "Director at SWANA Landfill Gas & Biogas Technical Division",
      "Awarded four U.S. patents on devices and methods for groundwater sampling and groundwater remediation applications",
      "Over the past 25 years has designed and installed groundwater pumping and sampling systems for sites throughout the U.S., Canada, Europe, Australia and South America",
      "Current member and former chairmen (1990-2008) of the Ground Water Sample Collection committee at ASTM International",
      "Co-authored multiple standards on groundwater monitoring, well purging methods and sampling device selection",
    ],
  },

  {
    name: "Michael C. Kavanaugh",
    image: instructorImage("kavanaugh"),
    courses: ["remediation", "pollution"],
    profileLink: `${linkedinBase}/michael-kavanaugh/`,
    bio: [
      "Received his Ph.D. in Civil and Environmental Engineering from U.C. Berkeley",
      "Elected to the National Academy of Engineering in 1998",
      "Chairman of the 2013 National Research Council's acclaimed report \"Alternatives For Managing the Nation's Complex Contaminated Groundwater Sites\"",
      "Co-author to over 35 peer reviewed technical publications and editor of two groundwater books",
      "Lectured in over 100 groundwater presentations to technical audiences, legislative bodies and public advocacy groups",
    ],
  },

  {
    name: "Bernard H. Kueper",
    image: instructorImage("kueper"),
    courses: ["remediation", "pollution"],
    profileLink:
      "https://civil.queensu.ca/Research/Environmental/Bernard%20Kueper/index.html",
    bio: [
      "Received his Ph.D. from The University of Waterloo",
      "Full professor in the Department of Civil Engineering at Queen’s University",
      "Ph.D. research focused on the subsurface behavior and clean-up of dense, non-aqueous phase liquids (DNAPLs)such as chlorinated solvents, PCB oils and creosote",
      "Published extensively on both unconsolidated geologic deposits, such as sands and gravels, as well as fractured clay and rock",
      "Lectured on DNAPL behavior and remediation in professional short-courses in Canada, Australia, the U.S., Switzerland, Denmark, and Great Britain",
      "Active technical consultant to private industry",
    ],
  },

  {
    name: "Douglas G. Larson",
    image: instructorImage("larson"),
    courses: ["remediation", "pollution", "brasil"],
    profileLink: `${linkedinBase}/douglas-larson-a4a9655/`,
    bio: [
      "Received his Ph.D. in Civil and Environmental Engineering from the Massachusetts Institute of Technology",
      "Senior Principal Engineer of the U.S. Northeast Region at Geosyntec",
      "Worked on hazardous waste site remediation projects since 1985, including projects at dozens of Superfund sites throughout the U.S.",
      "Integral in the advancement of the full scale implementation of several innovative remediation technologies",
      "Designed and managed the application of a wide range of remedial strategies including bioremediation, chemical oxidation, soil vapor extraction (SVE), multi-phase extraction (MPE), air sparging, in situ thermal treatment, groundwater extraction and treatment, and in situ reactive barriers",
    ],
  },

  {
    name: "Paulo Negrão",
    image: instructorImage("negrao"),
    courses: ["brasil"],
    profileLink: `${linkedinBase}/paulo-negrao-ph-d-851252/`,
    bio: [
      "Received his Ph.D. in Geosciences from the The State University of Campinas, Brasil",
      "CEO and CTO of Clean Environment Brasil",
      "Associate professor at The State University of Campinas, Brasil",
      "Associate professor of graduate students at SENAC University in São Paulo, Brasil",
      "Over the past 27 years has designed and installed hundreds of groundwater sampling and remediation systems in the U.S., Europe, South America, Asia and the Middle East",
      "Served as Chairman of the ABNT (Brazilian Standards Association) for groundwater monitoring and sampling",
      "Presented hundreds of seminars and short-courses for leading industry professional organizations such as PETROBAS and Shell Oil, universities including The University of São Paulo and The State University of Campinas, as well and regulatory agencies including The São Paulo State Environmental Protection Agency (CETESB) and The Brazilian Geological Service (CPRM)",
    ],
  },

  {
    name: "Richard J. Rago",
    image: instructorImage("rago"),
    courses: ["remediation"],
    profileLink: `${linkedinBase}/rich-rago-ba38a03/`,
    bio: [
      "Vapor Intrusion Practice Leader at Haley & Aldrich",
      "Conducted hundreds of indoor air quality project investigations and soil vapor intrusion studies at sites contaminated with manufactured gas plant (MGP) residuals, petroleum hydrocarbons, chlorinated solvents, pesticides, and other contaminants",
      "Recognized for his support and technical collaboration with EPA and ITRC’s PVI team as well as for contributions to numerous state and federal guidance documents",
      "Currently collaborating with two leading analytical testing laboratories to complete an indoor air background study focused on VOCs and petroleum hydrocarbons in office buildings, municipal buildings, commercial buildings, and schools",
    ],
  },

  {
    name: "Gary P. Wealthall",
    image: instructorImage("wealthall"),
    courses: ["remediation", "brasil"],
    profileLink: `${linkedinBase}/dr-gary-wealthall-53351115/`,
    bio: [
      "Received his Ph.D. in Environmental Engineering from The University of Sheffield and M.Sc. in Hydrogeology from The University of Reading",
      "Senior Principal Hydrogeologist in Geosyntec Consultants and the Director of Geosyntec’s Environmental Consulting in the UK and Ireland",
      "Adjunct Professor in the Department of Chemical Engineering and Applied Chemistry at The University of Toronto",
      "Specializes in the development and application of high-resolution site characterization methods",
      "Previous Research Fellow at The University of Sheffield",
      "Previous lead of a contaminant hydrogeology research team as Principal Research Scientist with the British Geological Survey",
      'Co-author of the 2015 ITRC guidance document titled "Integrated DNAPL Site Characterization and Tools Selection."',
      'Contributing author of the 2015 EPRI guidance document "Generic Work Plan to Assess Dense Non-Aqueous Phase Liquid Mobility in the Subsurface at Manufactured Gas Plant Sites"',
    ],
  },
];

export default instructorProfiles;
