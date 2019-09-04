// -- BELOW ARE USED ON THE POLLUTION & HYDROLOGY COURSE PAGE ONLY -- //
const overview = `The objective of the course is to comprehensively teach remediation including basic to advanced geohydrology and transport principles, key field techniques, collecting 3D hydrogeochemical data, choosing appropriate remediation strategies and systems based on chemical, geological and biological site conditions and regulatory requirements.

Unlike the Pollution and Hydrology Course where no experience is necessary, this advanced course assumes some technical background and experience in groundwater hydrology and contamination assessment and resolution. However, those who have already taken our Pollution and Hydrology Course will be well prepared for the rigorous exploration of groundwater remediation found in this course.
`;

const schedule = [
  "Daily: 8-11:30 A.M. and 1-4:30 P.M.",
  "Coffee break: 9:30-10 A.M. and 2:30-3 P.M.",
  "Lunch break: 11:30-1 P.M.",
  "Monday evening: 4:45-6 P.M.",
  "Tuesday evening: 4:45-7 P.M.",
  "Wednesday evening: 4:45-6 and 7-9 P.M.",
  "Thursday evening: 4:45-6 P.M.",
  "Friday: 8-11:30 A.M. (course ends)",
  "Friday optional computer session: 12:30-5:30 P.M.",
];

const longDescription = `The course uniquely integrates the topics of heterogeneous geohydrology,
aquifer/source/plume characterization in 3D, remediation technologies/strategies/designs and computer modeling software. Remediation as an introductory general topic is covered very well in the Pollution and Hydrology Course, but in this course there is much more additional material, including comprehensive indoor air vapor intrusion material, and more technical details on all remediation technologies and contaminant phenomena.

For example, the theory and outcomes behind migration of DNAPLs in heterogeneous unconsolidated deposits and fractured hard rock, how to conduct pilot tests for air sparging and soil vapor extraction as well as many more quantitative calculations involving, indoor air vapor intrusion, air sparging, soil vapor extraction, in situ chemical oxidation, and bioremediation.

Several of the general topics that are covered in the Pollution and Hydrology Course have applications in the study of remediation. They will be covered in this course but in more detail and from a remediation hydrogeology and remediation contaminant transport viewpoint.

The formal part of the course ends at 11:30 Friday morning. Friday afternoon is a free bonus session using laptop computers (supplied) and popular sophisticated analytical and numerical modeling software to simulate remediation geohydrology, groundwater and contaminant pathways, capture zones, mass transport, natural attenuation, and alternative remediation designs.
`;

const topics = [
  {
    header: "Fundamental and Advanced Concepts of Remediation Geohydrology",
    subTopics: [
      "Basic To Advanced Concepts Of Groundwater Flow And Well Hydraulics",
      "Mass Flux And Mass Discharge With Applications In Remediation",
      "Volumetric Flux And Discharge",
      "Mobile, Immobile And Storage Porosities And Their Impacts And Challenges In Choosing Appropriate Remediation Technologies And Achieving Cleanup Goals",
      "Using The Elliptical Shapes Of Drawdown Contours To Determine The Directions Of Maximum Permeability In Anisotropic Geology",
      "Maximum Hydraulic Gradient Direction (Hydrology) vs. Maximum Permeability Direction (Geology) And The Resultant Anisotropic Contaminant Flow Directions In Plan And Cross-Section Views",
      "Effects of Water Levels In Monitoring Wells And Piezometers Under Non-Horizontal conditions",
      "Mobile/ZOC (Zone Of Capture) vs. ZOI (Zone Of Influence) Around A Pump And Treat Remediation Well In Plan View Under A Regional Gradient",
      "Different Capture Zones (Containment Volumes) Of A Pump And Treat Remediation Well In Cross-Section Under Different Vertical Anisotropy Ratios (K_H /K_V)",
      "Impacts Of The Heterogeneous Distribution of Hydraulic Conductivity And Associate Seepage Velocities And Dispersion In Contaminated Aquifers",
      "Flow Concentration In Natural Aquifers And The Impact On Mass Flux Calculations And Targeted Remediation",
      "Horizontal vs. Non-Horizontal Flow Conditions",
      "Ambient Flow In Long Screen Wells (“Conduits”) Under Vertical Gradients And Its Effects On The Vertical Movement Of Contaminant Plumes Or Cross-Contamination",
      "Impacts Of Horizontal And Vertical Anisotropy On Actual Contaminant Flow Directions",
      "Impacts Of Shifting Plume Directions (Typically 10-50 Degrees throughout the year) On Concentrations Measured In Monitoring Wells Fixed In a Location",
    ],
  },
  {
    header:
      "Fundamental and Advanced Concepts of Contaminant Fate and Transport",
    subTopics: [
      "Fate And Transport Mechanisms In Contaminant Transport",
      "Three-Dimensional Advective-Dispersive Transport Equation (MT3D)",
      "Estimating Dispersion Coefficients and Dispersivities",
      "Advantages And Limitations of Analytical Models",
      "Advantages And Limitations of Numerical Models",
      "Natural Attenuation: Advection, Dispersion, Biotic and Abiotic Degradation And Sorption",
      "Mobile, Immobile And Storage Porosities And Forward/Back Diffusion",
      "Applications Of K_D, K_OC, K_OW, And f_OC",
      "Applications Of The Retardation Factor",
      "ARCADIS’ Stratographic Mass Flux Method For Targeted Remediation",
    ],
  },
  {
    header:
      "Subsurface High Resolution Site Characterization and Advanced Geologic Analysis",
    subTopics: [
      "History Of The Evolution Of Site Characterization Methods And Plume Definitions From The 70s To Today",
      "3D High Resolution Site Characterization (HRSC) Methods To Determine 3D Hydrogeochemical Parameters For Remediation Design",
      "Borehole Geophysical Logging",
      "Direct Push Technologies",
      "CPT, EC-Logs, Resisitivity, MIP, PID, SCOST, Dye-LIF, Waterloo APS Characterization Techniques",
      "K Values (Index Of Hydraulic Conductivity)",
      "FLUTe, CMT, Solinst and Westbay Multi-Level Monitoring Systems",
      "Hydrostratographic And Lithostratographic Profiles",
      "Sequence Stratigraphy—A New Chronostratographic-Based Technique For Genetically Related Geologic Units. Advanced Geologic Analysis",
      "Transects For Mass Flux And Mass Discharge Calculations",
      "GIS Maps, Web Maps, And Interactive PDF Maps",
      "Mass Discharge Calculations And Their Impacts On Concentrations In Downgradient Municipal Water Supply Wells",
    ],
  },
  {
    header: "Non-Aqueous Phase Liquids (DNAPL and LNAPL)",
    subTopics: [
      "Fundamental NAPL Concepts And Source Zone Life Cycle Stages",
      "LNAPL Source Zones, Dissolved Phases And The Vertical Profile “Shark Fin” Natural Source Zone Depletion (NSZD)",
      "NAPL Wettability Effects, Migration, Delineation and Remediation in Porous and Fractured media",
      "Quantitative Calculations Assessing NAPL Presence And Numerical Modeling",
      "MIP (Membrane Interface Probe) and LIF Probes (Laser Induced Fluorescence For Aromatics) For Vertical NAPL Delineation",
      "Thermal Technologies For Source Zone Remediation (Electrical Resistance Heating (ERH) And Thermal Conductive Heating (TCH))",
      "Measuring and Modeling Thermal Treatment At the Naval Air Warfare Center Case History",
    ],
  },
  {
    header:
      "Remediation of Soil and Groundwater: Regulations, Risk, Technologies, Strategies, Complex Sites, Remedy Selection and Long Term Management",
    subTopics: [
      "Remediation Of Contaminated Sites: Past, Present and Future",
      "Bioremediation: Aerobic and Anaerobic Bacteria, Biotic And Abiotic Degradation, Sequential Reactions, Lines of Evidence, Kinetics, Bioaugmentation, Engineering Design for In Situ Applications. Case Histories",
      "ISCO (In Situ Chemical Oxidation) and ISCR (In Situ Chemical Reduction)",
      "Groundwater Recirculation Designs for Enhanced Mixing Of Amendments. Case Histories",
      "CSIA (Compound Specific Isotope Analysis) Theory and Applications",
      "Applications of Pump and Treat Systems For Remediation and Hydraulic Control Remediation of inorganics",
      "Ex Situ Treatment Technologies",
      "Permeable Reactive Treatment Barriers and Designs, Impermeable Barriers",
      "Soil Vapor and Multi-Phase Extraction Systems Designs. Pilot Studies To Determine the Radius of Influence (ROI)",
      "Air Sparging Systems, Design Parameters, Pilot Studies",
      "Thermal Remediation Technologies (ERH and TCH and STAR) For NAPL And Aqueous Phase Removal",
      "Electrokinetics For Remediating Very Low Permeability Soils",
      "Monitored Natural Attenuation: Applications and Limitations in Remediation",
      "Flux-Based Approach To Achieve Remediation Goals (Mass Flux and Mass Discharge As A Cleanup Metric)",
      "EPA’s Remedial Investigation (RI)/Feasibility Study (FS) Process",
      "2D and 3D Capture Zones of Contaminant Plumes",
      "Challenges of Complex Sites and Long Term Management Strategies",
    ],
  },
  {
    header:
      "Indoor Air and Petroleum Vapor Intrusion and Mitigation Technologies",
    subTopics: [
      "State Regulations and Approaches",
      "EPA’s (OSWER) Latest Technical Guides For Vapor and Petroleum Intrusion Conceptual Models of Vapor Intrusion",
      "Indoor Air Background Sources",
      "Vapor Migration Principles, Advection, Partitioning, And Diffusion",
      "Monitoring And Sampling Equipment. Laboratory Analyses",
      "Vapor Intrusion Mitigation Systems",
      "Illustrative Case Histories Of Indoor Air Intrusion And Mitigation",
      "Optional Bonus Session: Introduction To Mathematical Modeling In Remediation",
      "Overview Of Mathematical Modeling In Remediation Plus An Illustrative Case History Using Bioscreen-AT and Waterloo Hydrogeologic’s Visual Modflow Pro",
      "Hands-On Computer Simulation Exercises Of Particle Tracking, Capture Zones, And Remediation Scenarios Such As Natural Attenuation For Risk-Based Corrective Action, Pump And Treat, Trenches For Hydraulic Capture And Capping",
    ],
  },
];

// -- REMEDIATION COURSE CARDS (viewed throughout the site) -- //
const courseCard = {
  // course name
  // date range
  // location with map link

  // do not change, pulled from course topics
  highlights: topics.map(topic => topic.header),

  // "Includes" section
  includes: [
    "Digital certificate of completion",
    "4.3 continuing education units (CEUs)",
    "1300+ page course binder with an unmatched wealth of groundwater remediation notes",
  ],
};

export default {
  topics,
  schedule,
  overview,
  courseCard,
  longDescription,
};
