const overview = `The Pollution & Hydrology Course is the only one-week course in the US or Europe which comprehensively teaches from theory to practice all aspects of groundwater contamination, hydrology, monitoring, site characterization and remediation.
  
This course assumes no prior experience in groundwater hydrology, contamination or remediation. We begin with basic principles before expanding into more advanced topics. The course enhances the technical skillset of all participants from new professionals to those with years of experience.
  `;

const whoShouldAttend = [
  "Chemists",
  "Engineers",
  "Geologists",
  "Environmental Scientists",
  "State and Federal Regulators",
  "Superfund and Industry Site Managers",
  "Compliance/Regulatory Program Managers",
];

const schedule = [
  "Daily: 8-11:30 A.M. and 1-4:30 P.M.",
  "Coffee break: 9:30-10 A.M. and 2:30-3 P.M.",
  "Lunch break: 11:30-1 P.M.",
  "Monday evening: 4:45-6 P.M.",
  "Tuesday evening: 4:45-8 P.M.",
  "Thursday evening: 4:45-6:30 P.M.",
  "Friday: 8 A.M. to 1 P.M.",
];

const uniqueAspects = [
  "Thousands of testimonials with over 90% of our students registering by colleague recommendation",
  "We have the largest attendance of any groundwater course with professionals from around the world",
  "Our instructors are the best in the field with a collective 180+ years of academic and consulting experience",
  "Each course includes its own 1200+ page binder filled with practical notes and unique material",
];

const longDescription = `
The widespread interest in groundwater contamination, characterization and remediation has seen the offering of many 1-3 day topic-specific training courses. There are no other one-week courses covering all aspects of groundwater. The emphasis of this comprehensive course is on acquiring an extensive working knowledge of the concepts, principles and professional practices underlying groundwater contamination, hydrology and remediation.

The advantages of a longer course include time to cover and absorb more aspects of this expanding field and the opportunity for in-depth technical learning. Groundwater legislation, high resolution site characterization, remediation techniques, natural attenuation, risk assessment, wellhead protection techniques, multi-level monitoring systems, LNAPL/ DNAPL contamination, indoor air vapor intrusion, emerging contaminants and applications of computer modeling have grown to such an extent in the last few decades that intensive one-week courses, with a few early evening sessions, are needed to adequately cover all of these new developments.

One of the most widespread and difficult problems in groundwater contamination and remediation today is dense non-aqueous phase liquids (DNAPLs). Dr. John Cherry, one of the world’s leading experts in this area, will present the fundamental concepts underlying the occurrence, behavior, movement and characterization of DNAPLs in unconsolidated sedimentary deposits, aquitards and fractured hard rocks.

Although some areas are necessarily surveyed in the interest of time, technical depth is the norm in the majority of sessions. Remediation topics are introduced in this course but are covered in much greater detail in our more rigorous Remediation Course.

This is the highest rated course in the industry because of the unparalleled technical information and applied knowledge it provides - no course teaches so much! Among groundwater professionals the Princeton Groundwater Pollution and Hydrology Course is an industry standard due to its outstanding educational value.
`;

const topics = [
  {
    topicHeader:
      "Basic to Advanced Concepts and Principles of Groundwater Hydrology in the Saturated and Unsaturated Zones",

    subTopics: [
      "Advanced Concepts and Principles of Groundwater Flow, USGS Modflow, Volumetric Flux and Discharge, Capture Zones in Plan and Vertical Cross-Sections, Horizontal and Vertical Anisotropy Effects on Contaminant Flow Directions, Impact of Shifting Plume Directions on Concentrations Measured in Fixed Monitoring Wells, Effects of Heterogeneity, Mobile/Immobile/Storage Porosities and Their Effects on Forward Diffusion/Back Diffusion, Refraction, Impacts of Permeable Lenses, Non-Horizontal Flow Effects...",

      "Fundamental Concepts and Theory of Water and Chemical Movement in the Unsaturated Zone. Laboratory Methods and Field Equipment (Suction Lysimeters and Tensiometers) to Characterize Soils and Sample Water/Gases in the Vadose Zone.",

      "Wellhead Protection under the Safe Drinking Water Act Amendments: Theory and Practice. Determining 3D Capture Zones Using Analytical and Numerical Models (USGS Modflow, Waterloo Hydrogeologic’s Visual Modflow).",
    ],
  },
  {
    topicHeader:
      "Basic to Advanced Concepts and Principles of Contamination Fate and Transport",

    subTopics: [
      "Advanced Concepts and Principles of Fate and Transport, MT3D, Bioscreen, Dispersion, Sorption, Retardation, Biodegradation, Natural Attenuation, Mass Flux, Mass Discharge, Arcadis Stratagraphic Flux Method, Horizontal and Vertical Anisotropy Effects on Contaminant Flow Directions, Impact of Shifting Plume Directions on Concentrations Measured in Fixed Monitoring Wells, Mobile/Immobile/Storage Porosities and Their Effects on Forward Diffusion/Back Diffusion and Asymptotic C vs. T Curves, Refraction, Lenses, Natural Source Zone Depletion (NSZD), ...",
    ],
  },
  {
    topicHeader: "Groundwater Monitoring and Sampling Technology",

    subTopics: [
      "Groundwater Monitoring And Sampling Technology: Monitoring Program Elements and Design, Site Characterization Tools and Field Analytical Methods, Traditional and Accelerated Site Characterization Plans, Well Design Standards and Practices, Collecting Representative Groundwater Samples, Preservation and Decontamination Procedures, Factors that Affect Sample Accuracy, Precision and Quality, Low Flow Purging, No-Purge/Passive Sampling, The Triad Approach, Screen Size and Location Based On The 3D Site Conceptual Model.",
    ],
  },
  {
    topicHeader:
      "Site Characterization in 3D: Geohydrology and Contaminant Distributions In Soils, Groundwater and Vapors",

    subTopics: [
      "Site Characterization (Water, Soil and Vapors): Transects, Direct Push Methods, Geophysical Methods, Soil Gas Sampling, Soil and Hard Rock Sampling/Coring Techniques, Multi-Level Samplers (CMT, Westbay, Flute and Waterloo), High Resolution Site Characterization Using, LIF, DYE-LIF and Geoprobe's MIP, HPT, and MiHPT, Optical Image Profilers (Lasers) for LNAPLs, Creosote and Coal Tar, Inficon's Hapsite Portable GC/MS for Indoor Air Vapor Intrusion Investigations, Mini- Piezometers, Seepage Pans to Measure River/Lake Fluxes and Hydraulic Conductivities, Dispersion Coefficient Measurements in the Field, Transects to Measure Mass flux/Mass Discharge, Data Validation (QA/QC Statistics and Procedures) Expedited Site Characterization Techniques...",

      'Hydraulic Characterization: Pumping Test Methods, Slug Test Methods and Practices, Laboratory Permeameters, Grain Size Distributions for screen selection and K Determination, Hydraulic Tomography, Borehole Dilution Methods, Flowmeters and Geoprobe\'s HPT (Hydraulic Profiling Tool) to Determine K(Z), Numerical Models in Pumping Tests for Determining Heterogeneous and Anisotropic Aquifer Properties, "Pumping Tests" in the Vadose Zone to Determine the Radius of Influence (ROI) for Soil Vapor Extraction Remediation',
    ],
  },
  {
    topicHeader:
      "Dense Non-Aqueous Phase Liquids (DNAPLs) in Sedimentary deposits, Aquitards and Fractured Rocks",

    subTopics: [
      "DNAPL's (Dense Non-Aqueous Phase Liquids): Occurrence, Movement, Characterization and Implications with Respect to Site Monitoring and Remediation in Unconsolidated Sedimentary Deposits, Aquitards and Fractured Hard Rock. Concepts Illustrated by Laboratory and Field Experiments with Chlorinated Solvents. Viruses in Fractured Hard Rock. Oldest Published,Peer-Reviewed DNAPL Case History (111- trichloroethane)",
    ],
  },
  {
    topicHeader:
      "Remediation of Soil and Groundwater: Technologies, Case histories and Long Term Management",

    subTopics: [
      "Treatment Technologies, Illustrative Case Histories, Cleanup and Long Term Management Costs and Aquifer Restoration Alternatives For Soil and Groundwater, including Pump and Treat, Recirculation, Chaotic Advection, Capture Zones, Monitored Natural Attenuation, Bioremediation, In Situ Chemical Oxidation and Reduction, Soil Vapor Extraction, Multi-Phase Extraction, Thermal Technologies, Bioaugmentation and Permeable Reactive Barriers",

      "Cleanup Goals, Key Regulatory and Risk Drivers for Remediation, Federal and State Equivalents (RCRA, CERCLA, SARA, Voluntary Cleanup Programs), Brownfields Redevelopment and Long Term Management",

      "Conceptual Site Models (CSM) As The Basis For Remedial Strategies and Decision",

      "LNAPLs (Light Non-Aqueous Phase Liquids, BTEX, MTBE), DNAPLs (Dense Non- Aqueous Phase Liquids): Concepts, Remediation and Challenges. Natural Source Zone Depletion (NSZD), ...",

      "Ex Situ treatment technologies",

      "Trends in Source and Groundwater Treatment Remedies. Annual Superfund Remedy Report",

      "EPA’s Unregulated Contaminant Monitoring Rule (UCMR) and Emerging Contaminants",

      "Remediation Strategies for RCRA, Superfund and Brownfield Sites",
    ],
  },
];

export default {
  topics,
  schedule,
  overview,
  uniqueAspects,
  whoShouldAttend,
  longDescription,
};
