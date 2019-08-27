import PropTypes from "prop-types";

const linkedinBase = "https://linkedin.com/in";

const instructorImage = name => require(`../media/instructors/${name}.jpg`);

export const instructorType = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired,
  bio: PropTypes.arrayOf(PropTypes.string).isRequired,
  courses: PropTypes.arrayOf(PropTypes.oneOf(["remediation", "pollution"]))
    .isRequired,
};

export const instructorTypeShape = PropTypes.shape(instructorType);

//-- DO NOT CHANGE ANYTHING ABOVE THIS LINE --//

export default [
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
    name: "Robert W. Cleary",
    image: instructorImage("cleary"),
    courses: ["remediation", "pollution"],
    profileLink: `${linkedinBase}/bob-cleary-princeton-groundwater/`,
    bio: [
      "Received his Ph.D. in Chemical Engineering from The University of Massachusetts in Amherst",
      "Co-author of the first peer-reviewed chlorinated solvent remediation paper in 1981",
      "Former professor of Civil and Geological Engineering at Princeton University",
      "Former professor of Geosciences at The University of Sao Paulo, Brasil",
      "Current instructor in the National Ground Water Association’s Modflow course",
      "Adjunct professor in the Hydrogeology Field School course of the Earth and Environmental Sciences Department at The University of Waterloo",
      "Active groundwater consultant to private industry",
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
    courses: ["remediation", "pollution"],
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
    courses: ["remediation"],
    profileLink: `${linkedinBase}/dr-gary-wealthall-53351115/`,
    bio: [
      "Received his Ph.D. in Environmental Engineering from The University of Sheffield and M.Sc. in Hydrogeology from The University of Reading",
      "Senior Principal Hydrogeologist in Geosyntec Consultants and the Director of Geosyntec’s Environmental Consulting in the UK and Ireland",
      "Adjunct Professor in the Department of Chemical Engineering and Applied Chemistry at The University of Toronto",
      "Previous Research Fellow at The University of Sheffield and lead of a contaminant hydrogeology research team as Principal Research Scientist with the British Geological Survey",
      "Specializes in the development and application of high-resolution site characterization methods",
      'Co-author of the 2015 ITRC guidance document titled "Integrated DNAPL Site Characterization and Tools Selection."',
      'Contributing author of the 2015 EPRI guidance document "Generic Work Plan to Assess Dense Non-Aqueous Phase Liquid Mobility in the Subsurface at Manufactured Gas Plant Sites"',
    ],
  },
];
