const remediationTestimonials = [
  {
    student: "Joseph Marsh",
    company: "US Army Corp. of Engineers",
    message:
      '"Excellent. I consider this course essential for all my environmental colleagues (after taking the Groundwater Pollution and Hydrology Course first!)."',
  },
  {
    student: "Chris Brownfield",
    company: "AECOM",
    message:
      "\"Excellent. The Best Training Course I've attended in terms of quality of material/speakers and the organization. It is also very entertaining, almost like watching TV at times (for 5 straight days). Thanks for the effort that you've put into the course. Very valuable. Very empowering.\"",
  },
  {
    student: "Mark Thomas",
    company: "United Technologies Corp.",
    message:
      '"The course is extremely comprehensive and literally covers every aspect of Remediation. It’s a well done, Head first dive into the field. Highly recommended."',
  },
  {
    student: "Linda Belanger",
    company: "Domteur, Montreal, Quebec, Canada",
    message:
      '"The most complete course on remediation. All the instructors are amongst the best in their field of expertise. Good balance between theory and practice. All great speakers that kept me captivated all the time. I would recommend to anyone involved in site management."',
  },
  {
    student: "Moinuddin Muhammad",
    company: "Tekcellent Private Limited, Karachi, Pakistan",
    message:
      '"An exceptionally well formulated and comprehensive course covering the full spectrum of the latest methods/trends in the industry. Definitely going to send colleagues in the next course."',
  },
  {
    student: "Josh Whipple",
    company: "New Hampshire DES",
    message:
      '"I really enjoyed the course and was impressed by the scope of material and level of the instructors. I appreciated the opportunity to spend time to focus on the key principles of site remediation. I would absolutely recommend this course to my colleagues."',
  },
  {
    student: "Beronica Lee-Brand",
    company: "Daniel B. Stephens & Associates",
    message:
      '"I would rate it as excellent, thorough, up-to-date on technologies and very educational. Enjoyed each topic, would definitely attend other talks/presentations. I will recommend this course to my colleagues. I am very impressed with the speakers, their work and their accomplishments/successes in the geologic/hydrologic field. Worth the time and money. Thanks."',
  },
  {
    student: "Dewi Restuti",
    company: "Chevron",
    message:
      '"The course was excellent! It provided a tremendous amount of knowledge both in theory and practice. Case studies shown were so helpful in understanding the challenges in remediation. The instructors were really proven experts in the field who have wide experience and were kind to share lessons learned from their projects. I definitely would recommend this course to my professional colleagues."',
  },
  {
    student: "Lotte Jorgensen",
    company: "NIRAS, Denmark",
    message:
      '"Yes, I would recommend this course. It is a very exciting course, good mix of practical solutions and theory. I found all of it interesting. I like that you spend time on site characterization because it is so important for choosing the right remediation."',
  },
  {
    student: "Ali H. Chowdhury",
    company: "Shell Global Solutions",
    message:
      '"Excellent both in terms of content and delivery. A must for anyone working in the areas of soil and groundwater remediation."',
  },
  {
    student: "Sean Davenport",
    company: "Carus Corporation",
    message:
      '"Highly recommended. Very thorough review for the field of remediation. Amazing information. Great to hear talks from the pioneers of remediation."',
  },
  {
    student: "Natalie Rogers",
    company: "US Army Corps of Engineers",
    message:
      '"This was a very informative class. I am new to the Remediation Field and this class served as an excellent starting off point for my training. It covered a very wide range of topics and gave me some good background information. I will highly recommend this course."',
  },
  {
    student: "Toni McKnight",
    company: "Envirotech, Inc.",
    message:
      '"I loved the information about transects and getting a better idea of the flow and plume characterization. I think this may help on some of my projects. Good information on fluid flushing technologies. I really found the permeable reactive barriers section very useful as well as bioremediation information. I would definitely recommend this course to my colleagues."',
  },
  {
    student: "Sagi-Ben Moshe Sharon",
    company: "Israel Water Authority",
    message:
      '"The course was excellent. Very comprehensive, very informative and valuable. I got a lot of insights and some good ideas regarding projects I’m working on. All the lecturers were very knowledgeable and willing to share. The lectures were well structured and enabled me to deepen my knowledge in the remediation field. I received some valuable contacts and would be glad to use them towards some important and interested projects in Israel.  I will surely highly recommend it to my colleagues."',
  },
  {
    student: "Vanessa Goncalves Martins",
    company: "ERM, Sao Paulo, Brasil",
    message:
      '"The course is a great opportunity to overview the main topics of environmental management of contaminated areas, but more important to point out the best tools to have a good characterization prior to the remediation taking place."',
  },
  {
    student: "Lindsey White",
    company: "Naval Facilities Engineering Command SW, San Diego",
    message:
      '"Great! Tons of material, excellent speakers, real-world examples from experts in the field and a bounty of reference material."',
  },
  {
    student: "Molly King",
    company: "Maine DEP",
    message:
      '"Yes, I would recommend this course to colleagues. Overall, I’d say this course is great. The topics are relevant, up-to-date, and presented by some of the best in the industry."',
  },
  {
    student: "Doug McReynolds",
    company: "BNSF Railway",
    message:
      '"Very good course. I would recommend it to my fellow colleagues. I appreciate the balance of strategy, technical, practical, theoretical and empirical concepts."',
  },
  {
    student: "Jaymee Binion",
    company: "Wyoming Dept. of Environmental Quality",
    message:
      '"Excellent course. A wealth of incredibly useful and pertinent information."',
  },
  {
    student: "Suleman Asmal",
    company: "SAPREF, South Africa",
    message:
      '"This course is both broad and deep. It is an outstanding presentation of best science and its application in current best practice."',
  },
  {
    student: "Mark Davey",
    company: "Mobil Oil, Australia",
    message:
      '"I found the course to have an excellent breath of topics and well covered. Always good to see experienced professionals enthusiastic about their topics, prepared to discuss their successes and learning from misinterpretations. I\'d recommend it as I did the Pollution Course."',
  },
  {
    student: "Thaidra Sloan",
    company: "AECOM",
    message:
      '"I thought the course was excellent. I would recommend it to my colleagues. I really enjoyed the amount of hands-on, practical information that was available, and the extra resources that some instructors provided. An exceptional climate of practical learning."',
  },
  {
    student: "Todd Wallbon",
    company: "California DTSC",
    message:
      '"Excellent course! Very germane to my typical day-to-day work! Will strongly recommend to co-workers."',
  },
  {
    student: "Mike Bubb",
    company: "The Elm Group, Inc.",
    message: '"A 10,000 star winner!! --to use Las Vegas handicapper lingo."',
  },
  {
    student: "Andrew Beren",
    company: "National Energy Board, Canada",
    message:
      '"Thanks for the learning opportunity! The course was excellent and I will be recommending to others."',
  },
  {
    student: "Sarah Bargsten",
    company: "Wyoming Dept. of Environ. Quality",
    message:
      '"Excellent coverage of relevant material. Wyoming DEQ sends all staff to both Princeton Classes, as funding is available."',
  },
  {
    student: "Jon Schleder",
    company: "U.S. Federal Aviation Administration",
    message:
      '"Great, excellent remediation and contamination course. I would definitely recommend it."',
  },
  {
    student: "Bisi Adeosun",
    company: "Scientific Ideas Ltd. Nigeria",
    message:
      '"Overall, this is a very detailed high quality course necessary for every remediation practitioner to attend. I benefitted from every topic in the course. Attending it was worth the money and time."',
  },
  {
    student: "Yen-Vy Van",
    company: "Associated Environmental Group",
    message:
      '"Excellent! Definitely recommend it. This course covered the topics I wanted and more, with expertise and applications. Kudos to you all and I sincerely thank you. Good "flow," no retardation and lots of "sorption" equal a terrific course!"',
  },
  {
    student: "Joseph Bohannan",
    company: "US Corps. of Engineers",
    message:
      '"Excellent instructors. Overabundance of material. Interesting case studies to help illustrate concepts. Would recommend course to colleagues. Course was recommended to me by a co-worker."',
  },
  {
    student: "Liz Mueller",
    company: "Carus Corporation",
    message:
      '"Overall, I felt the course helped tie together a lot I read/heard about and loose ends. Copies of all slides presented were extremely helpful to cut down on necessary notes and nice to review over and over again. The characterization and monitoring section really drove home some important points and was an eye opener to why sites can be so poorly delineated. I would recommend it to colleagues (although all of my internal colleagues have now taken it!!). Thanks for a good week!"',
  },
  {
    student: "Mike Hawthorne",
    company: "HZA Environmental, Ltd.",
    message:
      '"Excellent broad screen of concepts and technologies. Excellent opportunity to meet and discuss issues with recognized experts in the industry."',
  },
  {
    student: "Wilson I. Jardim",
    company: "UNICAMP-Brazil",
    message:
      '"Very good course, and I would recommend it to anyone interested in gaining further knowledge in the remediation field."',
  },
  {
    student: "Vanesa Rodriguez Gutierrez",
    company: "Complutense University of Madrid, Spain ",
    message:
      '"It was really interesting with a lot of useful information and explained by qualified people. I will recommend it."',
  },
  {
    student: "Eric Blodgett",
    company: "AMEC-Geomatrix",
    message:
      '"The course is strenuous but totally worth it. I would definitely recommend it to anyone who is involved in remediation."',
  },
  {
    student: "Kathleen Johnson",
    company: "The Westmark Group, Las Vegas",
    message:
      '"This course was like grad school for the real world. Good mix of theory, applied theory, and real world applications. Great way to keep current on the changing state of the practice."',
  },
  {
    student: "Ron Thiessen",
    company: "Worley Parsons Canada",
    message:
      '"Great balance between theory and practical applications. Excellent presentation of the fundamentals. 5/5. Yes, I will recommend it."',
  },
  {
    student: "Michael Willinger",
    company: "Resource International, Ltd",
    message:
      '"As always, the course was very informative and I have recommended it to colleagues. The scale of the projects that I am involved with is much smaller, but the information in the course can be tailored to meet the requirements of these projects."',
  },
  {
    student: "Shen Chen",
    company: "Triumph Aerostructures-Vought Aircraft Div.",
    message:
      '"Excellent. Huge amount of materials were covered. The whole 5-day course is well organized. Will definitely recommend to colleagues."',
  },
  {
    student: "Mary Miles",
    company: "Dillon Consulting, Ltd.",
    message:
      '"I thought the course was excellent and would definitely recommend it to my colleagues. I thought the instructors were all very professional and their expertise certainly shines through."',
  },
  {
    student: "J. Smith",
    company: "URS",
    message:
      '"The course gives an excellent spectrum of current practice technology. I would recommend the course."',
  },
  {
    student: "Mario Fusco Jr.",
    company: "Michigan DEQ",
    message:
      '"Very good and comprehensive course in groundwater and remediation. I recommend it to every professional working or doing research in these areas."',
  },
  {
    student: "Jenise Showers",
    company: "TSI",
    message:
      '"Very intense course. Presenters very knowledgeable in the field of study."',
  },
  {
    student: "John Saxton",
    company: "U.S. Nuclear Regulatory Commission",
    message: '"Very good. Comprehensive. Yes, I will recommend the course."',
  },
  {
    student: "Davi Trindade",
    company: "Antares Engenharia, Brasilia, Brasil",
    message:
      '"It is the most complete technical and preparatory remediation course that I have ever seen."',
  },
  {
    student: "Paulo Roberto Alves Perreira",
    company: "Consultoria GEOMA-Brazil",
    message:
      '"I think the course was excellent in its totality. Besides the information provided during the presentations, the course has an amazing binder which contains the state of the art on groundwater and soil remediation. Certainly, I would recommend it to my colleagues."',
  },
  {
    student: "Jon MacDonald",
    company: "Terex Environmental Group",
    message:
      '"Excellent. I enjoyed the fact that there were different speakers and that a broad range of topics were covered at a range of complexities."',
  },
  {
    student: "Steve Mulkey",
    company: "Valero Energy",
    message:
      '"Really Great Course. Good foundation in remediation with some great references."',
  },
  {
    student: "Matthew Taylor",
    company: "ADEM-Alabama",
    message: '"The course is great. A lot of material but very informative."',
  },
  {
    student: "Sam Baron",
    company: "Sport Environmental Services, Inc.",
    message:
      '"Highly recommend! Years of actual research and experience compiled into this presentation. Very informative."',
  },
  {
    student: "Jeff Wokurka",
    company: "Boeing",
    message: '"Great course. Very good reference list."',
  },
  {
    student: "Jeremy Lang",
    company: "Stantec",
    message:
      '"A lot of information to cover, but the high quality instructors did an excellent job of getting the message through. All the instructors were excellent."',
  },
  {
    student: "Brian McCann",
    company: "Kleinfelder",
    message:
      '"Overall a very good course. It complements the Groundwater Pollution and Hydrology Course.", ',
  },
  {
    student: "Robert Casey",
    company: "EA Engineering",
    message:
      '"10, yes I would recommend it to my colleagues. Exceptionally comprehensive course."',
  },
  {
    student: "Jeremy Archer",
    company: "URC",
    message:
      '"Very informative. Tons of information, examples, etc. I would recommend it."',
  },
  {
    student: "Maria Gabriela Requiz, ",
    company: "Geohidra Consultores, Brazil",
    message:
      '"Excellent course, lots of information. The course subjects exceeded my expectations. Topics of most interest: Bioremediation, characterization, natural attenuation and fundamental concepts. I would recommend the course to colleagues."',
  },
  {
    student: "Anna Hovsepyan",
    company: "URS",
    message:
      'Excellent. Topics of most interest: hydrogeology, fractured rock (remediation), transects, air sparging and SVE. Yes, I would recommend the course to colleagues."',
  },
  {
    student: "David Sullivan",
    company: "U.S. Army Corps of Engineers",
    message:
      '"Excellent. The course put lots of tools in my toolbox. Also important, it gave the references and places to go so that future (or current) problems can be addressed and solved, or at least show another direction or option to pursue. Yes, I would recommend the course to colleagues."',
  },
  {
    student: "Tiffany Ayer",
    company: "Mosaic, Florida",
    message: '"Excellent 10/10. Would recommend to anyone in the industry."',
  },
];

export default remediationTestimonials;
