// -- BELOW ARE USED ON THE POLLUTION & HYDROLOGY COURSE PAGE ONLY -- //
const overview = `The Pollution & Hydrology Course is the only one-week course in the US or Europe which comprehensively teaches from theory to practice all aspects of groundwater contamination, hydrology, monitoring, site characterization and remediation.
  
This course assumes no prior experience. We begin with basic principles before expanding into more advanced topics and application. The course enhances the technical skillset of all its participants from new professionals to those with years of experience.
`;

const schedule = [
  "Daily: 8-11:30 A.M. and 1-4:30 P.M.",
  "Coffee break: 9:30-10 A.M. and 2:30-3 P.M.",
  "Lunch break: 11:30-1 P.M.",
  "Monday evening: 4:45-6 P.M.",
  "Tuesday evening: 4:45-8 P.M.",
  "Wednesday evening: 4:45-6 P.M.",
  "Thursday evening: 4:45-6:30 P.M.",
  "Friday: 8 A.M. to 1 P.M.",
];

const longDescription = `The widespread interest in groundwater contamination, characterization and remediation has seen the offering of many 1-3 day topic-specific training courses. There are no other one-week courses covering all aspects of groundwater. The emphasis of this comprehensive course is on acquiring an extensive working knowledge of the concepts, principles and professional practices underlying groundwater contamination, hydrology and remediation.

The advantages of a longer course include time to cover and absorb more aspects of this expanding field and the opportunity for in-depth technical learning. Groundwater legislation, high resolution site characterization, remediation techniques, natural attenuation, risk assessment, wellhead protection techniques, multi-level monitoring systems, LNAPL/ DNAPL contamination, indoor air vapor intrusion, emerging contaminants and applications of computer modeling have grown to such an extent in the last few decades that intensive one-week courses, with a few early evening sessions, are needed to adequately cover all of these new developments.

One of the most widespread and difficult problems in groundwater contamination and remediation today is dense non-aqueous phase liquids (DNAPLs). Dr. John Cherry, one of the world’s leading experts in this area, will present the fundamental concepts underlying the occurrence, behavior, movement and characterization of DNAPLs in unconsolidated sedimentary deposits, aquitards and fractured hard rocks.

Although some areas are necessarily surveyed in the interest of time, technical depth is the norm in the majority of sessions. Remediation topics are introduced in this course but are covered in much greater detail in our more rigorous Remediation Course.

This is the highest rated course in the industry because of the unparalleled technical information and applied knowledge it provides - no course teaches so much! Among groundwater professionals the Princeton Groundwater Pollution and Hydrology Course is an industry standard due to its outstanding educational value.
`;

const topics = [
  {
    header:
      "Basic to Advanced Concepts and Principles of Groundwater Hydrology in the Saturated and Unsaturated Zones",
    subTopics: [
      "Advanced concepts and principles of groundwater flow",
      "USGS modflow",
      "Volumetric flux and discharge",
      "Capture zones in plan and vertical cross-sections",
      "Horizontal and vertical anisotropy effects on contaminant flow directions",
      "Impact of shifting plume directions on concentrations measured in fixed monitoring wells",
      "Effects of heterogeneity",
      "Mobile/immobile/storage porosities and their effects on forward diffusion/back diffusion",
      "Refraction",
      "Impacts of permeable lenses",
      "Non-horizontal flow effects",
      "Fundamental concepts and theory of water and chemical movement in the unsaturated zone. laboratory methods and field equipment (suction lysimeters and tensiometers) to characterize soils and sample water/gases in the vadose zone",
      "Wellhead protection under the Safe Drinking Water Act amendments: theory and practice",
      "Determining 3D capture zones using analytical and numerical models (USGS modflow, Waterloo Hydrogeologic’s Visual Modflow)",
    ],
  },
  {
    header:
      "Basic to Advanced Concepts and Principles of Contamination Fate and Transport",
    subTopics: [
      "MT3D",
      "Bioscreen",
      "Dispersion",
      "Sorption",
      "Retardation",
      "Biodegradation",
      "Natural attenuation",
      "Mass flux",
      "Mass discharge",
      "Arcadis stratagraphic flux method",
      "Horizontal and vertical anisotropy effects on contaminant flow directions",
      "Impact of shifting plume directions on concentrations measured in fixed monitoring wells",
      "Mobile/immobile/storage porosities and their effects on forward diffusion/back diffusion and asymptotic c vs. t curves",
      "Refraction",
      "Lenses",
      "Natural source zone depletion (NSZD)",
    ],
  },
  {
    header: "Groundwater Monitoring and Sampling Technology",
    subTopics: [
      "Monitoring program elements and design",
      "Site characterization tools and field analytical methods",
      "Traditional and accelerated site characterization plans",
      "Well design standards and practices",
      "Collecting representative groundwater samples",
      "Preservation and decontamination procedures",
      "Factors that affect sample accuracy",
      "Precision and quality",
      "Low flow purging",
      "No-purge/passive sampling",
      "The triad approach",
      "Screen size and location based on the 3d site conceptual model.",
    ],
  },
  {
    header:
      "Site Characterization in 3D: Geohydrology and Contaminant Distributions In Soils, Groundwater and Vapors",
    subTopics: [
      "Transects",
      "Direct push methods",
      "Geophysical methods",
      "Soil gas sampling",
      "Soil and hard rock sampling/coring techniques",
      "Multi-level samplers (CMT, Westbay, Flute and Waterloo)",
      "High resolution site characterization using LIF, Dye-LIF, Geoprobe's MIP, HPT, MIHPT",
      "Optical image profilers (lasers) for LNAPLs",
      "Creosote and coal tar",
      "Inficon's hapsite portable gc/ms for indoor air vapor intrusion investigations",
      "Mini-piezometers",
      "Seepage pans to measure river/lake fluxes and hydraulic conductivities",
      "Dispersion coefficient measurements in the field",
      "Transects to measure mass flux/mass discharge",
      "Data validation (qa/qc statistics and procedures) expedited site characterization techniques",
      "Hydraulic characterization",
      "Pumping test methods",
      "Slug test methods and practices",
      "Laboratory permeameters",
      "Grain size distributions for screen selection and k determination",
      "Hydraulic tomography",
      "Borehole dilution methods",
      "Flowmeters and Geoprobe's HPT (hydraulic profiling tool) to determine k(z)",
      "Numerical models in pumping tests for determining heterogeneous and anisotropic aquifer properties",
      "Pumping tests in the vadose zone to determine the radius of influence (ROI) for soil vapor extraction remediation",
    ],
  },
  {
    header:
      "Dense Non-Aqueous Phase Liquids (DNAPLs) in Sedimentary deposits, Aquitards and Fractured Rocks",
    subTopics: [
      "Occurrence",
      "Movement",
      "Characterization and implications with respect to site monitoring and remediation in unconsolidated sedimentary deposits",
      "Aquitards and fractured hard rock",
      "Concepts illustrated by laboratory and field experiments with chlorinated solvents",
      "Viruses in fractured hard rock",
      "Oldest published peer-reviewed DNAPL case history (111-trichloroethane)",
    ],
  },
  {
    header:
      "Remediation of Soil and Groundwater: Technologies, Case histories and Long Term Management",
    subTopics: [
      "Treatment technologies",
      "Illustrative case histories",
      "Cleanup and long term management costs and aquifer restoration alternatives for soil and groundwater",
      "Pump and treat",
      "Recirculation",
      "Chaotic advection",
      "Capture zones",
      "Monitored natural attenuation",
      "Bioremediation",
      "In situ chemical oxidation and reduction",
      "Soil vapor extraction",
      "Multi-phase extraction",
      "Thermal technologies",
      "Bioaugmentation and permeable reactive barriers",
      "Cleanup goals",
      "Key regulatory and risk drivers for remediation",
      "Federal and state equivalents (RCRA, CERCLA, SARA, voluntary cleanup programs)",
      "Brownfields redevelopment and long term management",
      "Conceptual site models (CSM) as the basis for remedial strategies and decision",
      "LNAPLs (light non-aqueous phase liquids, BTEX, MTBE)",
      "Remediation and challenges",
      "Natural source zone depletion (NSZD)",
      "Ex situ treatment technologies",
      "Trends in source and groundwater treatment remedies. annual superfund remedy report",
      "EPA's unregulated contaminant monitoring rule (UCMR) and emerging contaminants",
      "Remediation strategies for RCRA",
      "Superfund and Brownfield sites",
    ],
  },
];

// -- POLLUTION & HYDROLOGY COURSE CARDS (viewed throughout the site) -- //
const courseCard = {
  // course name
  // date range
  // location with map link

  // do not change, pulled from course topics
  highlights: topics.map((topic) => topic.header),

  // "Includes" section
  includes: [
    "Digital certificate of completion",
    "3.8 continuing education units (CEUs)",
    "An invaluable 1200+ page course binder with groundwater hydrology, pollution and remediation notes",
  ],
};

// -- !! DO NOT EDIT BELOW !! -- //

const pollutionContent = {
  topics,
  schedule,
  overview,
  courseCard,
  longDescription,
};

export default pollutionContent;

/**
 * adapta nokto
 * dracula at night
 * moonlight // II
 * neon night
 * nightmare
 * outrun electric
 * phantom
 * spearmint contrast (rainglow)
 * super contrast (rainglow)
 * synthax
 * tonic contrast (rainglow)
 * warlock contrast (rainglow)
 *
 */
