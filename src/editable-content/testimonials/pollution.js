const pollutionTestimonials = [
  {
    student: "Yen-Vy Van",
    company: "Maul Foster and Alongi, Inc.",
    message:
      "Excellent! Would you recommend to your colleagues? Absolutely YES! The level of information, technical data/topics covered-- so effectively presented, along with the expertise and applicability (all the varied topics, problem solving examples and guidance on approaches) AND the wealth of technical references provided, all equate to an unmatched, high quality opportunity for professionals in the fields of contaminant hydrogeology, environmental engineering, and regulatory management to make serious advancements technically and professionally. Thank You!!!",
  },

  {
    student: "Robert Jones",
    company: "California Water Resources Control Board",
    message:
      "This was by far the most detailed and informative course that I have ever participated in. I would definitely recommend this course to my colleagues in the hydrogeology field. I look forward to taking the Remediation Course. I sat for the ASBOG exam in the 2 weeks prior to taking the course. I only wish that I would have been able to take this course prior to my exams. The breath of information presented in the course was an excellent cross section of topics that were covered in the Practice of Geology exam. Overall this was an excellent experience, reminding me of my time as a grad student (M.S.) working with Dr. Jeff Kuo at Cal State University-Fullerton. It was nice to see Dr. Kuo's book used as a Key Reference.",
  },

  {
    student: "James Garner",
    company: "Texas Commission on Environmental Quality (TCEQ)",
    message:
      '"The course is incredible. The quality of the material along with the wealth of knowledge and experience of all the lecturers far exceeded my expectations. I would definitely recommend this course to my colleagues.',
  },
  {
    student: "Sunny Simpkins",
    company: "Ash Creek Associates",
    message:
      '"This is the best professional course I have taken. A good amount of review to make sure everyone understood the concepts and a lot of new concepts covered. All the instructors were fantastic. It is very rare that everyone is a good lecturer at these types of courses. I will definitely take the next course."',
  },
  {
    student: "Tara Smith",
    company: "TSSA (Technical Standards and Safety Authority--Ontario, Canada",
    message:
      "\"The course was fantastic. I would recommend it to anyone and everyone. An incredible amount of knowledge. Unbelievable that you can get so many 'Groundwater Gods' in one place. Fantastic that they're all so willing to teach + share!!\" ",
  },
  {
    student: "Don Curran",
    company: "Stone Environmental",
    message:
      '"Highly rated. This course is commonly used by my company for professional development, and I would recommend it to my colleagues.',
  },
  {
    student: "Sarah Treadwell",
    company: "California State Water Board, Central Coast Region 3",
    message:
      '"This is an excellent course! I would recommend this course to all colleagues. Extremely helpful information for my job requirements. Very effective at communicating complex technical info! Excellent case studies; real-world applications. This course is a general requirement for all new staff at the Central Coast Regional Water Board (State of California)."',
  },
  {
    student: "Bryn Thomas",
    company: "Oregon Dept. of Environmental Quality",
    message:
      '"Very good comprehensive course. I would recommend to my colleagues. In fact, this course has been the standard overall groundwater course for hydros in my agency and in the consulting world we work with."',
  },
  {
    student: "Roger Chacon",
    company: "El Paso Electric",
    message:
      '"I don\'t recall ever attending such an informative and comprehensive course, truly taught by real experts in their respective fields! I most highly recommend this course."',
  },
  {
    student: "Sofia Aakesson",
    company: "Lund University, Sweden",
    message:
      '"Very good, especially to get hydrogeology and contamination together. Yes, I would recommend the course.',
  },
  {
    student: "Mia Sosa",
    company: "Ramboll, California",
    message:
      '"Highly informative. I valued the cohesive approach and integration of geology, engineering and science',
  },
  {
    student: "Sylvester Mode",
    company: "District Department of the Environment, Washington, D.C.",
    message:
      '"Course was well put together: very informative and concise. I will definitely recommend it to my other colleagues."',
  },
  {
    student: "Megan Trimper",
    company: "Stantec Consulting, Ltd.",
    message:
      '"Very good. Lots of Information covered, and I can clearly see how I will be able to apply what I\'ve learned to projects at work."',
  },
  {
    student: "Joel Atcainor",
    company: "US Army Corps of Engineers.",
    message:
      '"Fantastic, and I would highly recommend the course. The class was well worth the time, money and effort to attend, and will pay off in my future work."',
  },
  {
    student: "Adam Roy",
    company: "Nobis Engineering, Inc.",
    message:
      '"The course overall was very good and I have learned a lot! It has cleared up many misconceptions that had been passed on to me by others. This binder will serve as a great reference tool for years to come."',
  },
  {
    student: "Alison Kiliszek",
    company: "State of Delaware/DNREC",
    message:
      '"I would rate this course as excellent and would recommend it. It provided a great overview as well as the theory behind completing an assessment. Being a novice in groundwater cleanup, this course provided me with a start to the many pieces needed to complete a project."',
  },
  {
    student: "Melissa Nabors",
    company: "Barr Engineering",
    message:
      '"This was a great course, full of both background and practical field applicable information. The notes and resources provided are very helpful and all of the instructors were very knowledgeable/experienced and conveyed information very well. It is a lot to take in 1 week, but the additional resources to reference later will help that.',
  },
  {
    student: "Stacy Ruiz",
    company: "Imperial Oil, Calgary, Canada",
    message:
      '"Very good; very informative. I learned many new things that are directly applicable to my work. Highly recommended.',
  },
  {
    student: "Bill Pickard",
    company: "SESCO Group",
    message:
      '"I thought the course was a very good review and learning experience across several experience levels within environmental consulting/regulation. I would recommend it to both entry level and experienced consultants."',
  },
  {
    student: "Samantha See",
    company: "U.S. Army Corps of Engineers (USACE)",
    message:
      '"Excellent material. I would highly recommend this to anyone who deals with groundwater or soil remediation in their profession. It helped piece together the knowledge I’d already learned in my job.',
  },
  {
    student: "Lee Rosberg",
    company: "Stone Environmental",
    message:
      '"The course was excellent, A+ All of my colleagues could dramatically improve their understanding of the field from this course"',
  },
  {
    student: "Roman Lohin",
    company: "Shell Canada",
    message:
      '"Excellent. Very effective. Excellent engagement of the students. Good use of presentation tools. Very good notes."',
  },
  {
    student: "Nicholas Barnes",
    company: "HSW Engineering, Tampa",
    message:
      '"I would rate this course 10/10 and would highly recommend the course to colleagues or anyone seeking to increase their knowledge of groundwater flow and contaminant transport.',
  },
  {
    student: "B. Smotherman, ",
    company: "Missouri Geological Survey, MO Dept. of Natural Resources",
    message:
      '"The Course is incredibly informative. Will definitely recommend to other MGS + DNR staff for future training."',
  },
  {
    student: "E. Scott Forbes",
    company: "U.S. Army Corps of Engineers",
    message:
      '"The course is comprehensive and the repetition of key concepts throughout is really helpful for retention considering the massive amount of information in the relatively short amount of time.',
  },
  {
    student: "Heather Adams",
    company: "National Energy Board, Calgary, Canada",
    message:
      '"Overall, I found the course to be excellent. I would recommend the course to colleagues and plan to take the Remediation Course in the future.',
  },
  {
    student: "Sarah Roberts",
    company: "Southern Company",
    message:
      '"Excellent Course. Our company sends every new employee to our Earth Sciences and Engineering Group to this course. It is a thorough introduction for our core business',
  },
  {
    student: "Jenna Morrish, ",
    company: "Environmental Sciences Group",
    message:
      '"Overall, the course was excellent. This course has been a tremendous learnng experience for me. I enjoyed the breadth of information covered. It was nice to see a little bit of everything."',
  },
  {
    student: "Jeremy Tapp, ",
    company: "US Nuclear Regulatory Commission",
    message:
      '"It is a very good course and I would recommend it. Really enjoyed the real world, practical examples."',
  },
  {
    student: "Carolyn Pearson, ",
    company: "US Army Corps of Engineers",
    message:
      '"I would absolutely recommend this course to a colleague! This course is packed with information from experts in the field. As a novice in the field, I very much appreciated the depth and breath of the topics."',
  },
  {
    student: "Scott McGregor, ",
    company: "Golder Associates",
    message:
      '"I thought the course was very good with lots of excellent content and good instructors. I would recommend it to colleagues."',
  },
  {
    student: "Judith Nathanail ",
    company: "Land Quality Management, United Kingdom",
    message:
      '"Very Good course to Excellent. I have really learnt a lot in the course and have got enough leads to continue learning on my own. Thank you very much."',
  },
  {
    student: "Amelia Malsbary,",
    company: "GEI Consultants",
    message:
      '"Great class. I would definitely recommend it for my colleagues."',
  },
  {
    student: "Mike Larocca ",
    company: "XL Insurance",
    message: '"Excellent. Extremely well organized and quality material."',
  },
  {
    student: "Harry O'Neill",
    company: "Beacon Environmental",
    message:
      '"Excellent course for comprehensive overview of material. Would definitely recommend to colleagues and tell competitors not to go."',
  },
  {
    student: "Deepa de Alwis",
    company: "MN Pollution Control Agency",
    message:
      '"I will absolutely recommend this course to my collegues. Wealth of information."',
  },
  {
    student: "Ann Hall",
    company: "Molycorp Minerals, LLC",
    message: '"Superb, would definitely recommend."',
  },
  {
    student: "Benjamin Soo",
    company: "Shell Canada Limited",
    message:
      '"For a person new to the industry (Hydrology), this was a very helpful course. The credentials and experience of the presenters was extremely impressive."',
  },
  {
    student: "Christina Chang",
    company: "ERM-West, Inc.",
    message:
      '"Definitely recommend. Lots of info relevant to the industry and consulting work. Very concentrated & mostly easy to follow."',
  },
  {
    student: "Len McKay, ",
    company: "AMEC-Geomatrix Consultants",
    message:
      '"The course was very informative and helpful. I would absolutely recommend this course."',
  },
  {
    student: "Jan Van Trump",
    company: "Geosyntec Consultants",
    message:
      '"I entered knowing little/nothing of hydrology, but left with basic concepts in place. I also feel I have the tools/resources to examine more complicated concepts in groundwater."',
  },
  {
    student: "Marjory McCenthe",
    company: "AMEC Geomatrix Consultants",
    message:
      '"Excellent. I would recommend it to colleagues across many different knowledge and experience levels. Also the reference section in the notes is almost worth the price of admission."',
  },
  {
    student: "A. Sidebottom",
    company: "Dow Chemical",
    message: '"Excellent"',
  },
  {
    student: "Brian Burbeck",
    company: "AECOM",
    message:
      '"Excellent! This was an excellent course that I would recommend to my colleagues."',
  },
  {
    student: "Sean Fournier",
    company: "TerraTherm, Inc.",
    message:
      '"I rate this course as an excellent course and I would recommend it. It provided me a great insight into groundwater background that I did not have."',
  },
  {
    student: "Colleen Canfield",
    company: "Haley-Aldrich, Inc.",
    message:
      "\"Excellent course. I will definitely recommend it to my colleagues>' ",
  },
  {
    student: "Tim Sullivan",
    company: "National Energy Board-Canada",
    message:
      '"Course material and instructors were great and I would recommend this to my colleagues."',
  },
  {
    student: "Sikto Ortiz",
    company: "Conoco Phillips",
    message:
      '"Excellent. An overwhelming comprehensive amount of material. Binder will be a great reference."',
  },
];

export default pollutionTestimonials;
