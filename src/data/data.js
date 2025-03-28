import Lakbay from './../assets/Lakbay.webp';
import Eira from './../assets/Eira.webp';
import Erovoutika from './../assets/erovoutika.jpg';
import Odin from './../assets/Odin.png';
import Recipe from './../assets/recipe.jpg';
import SunnySide from './../assets/sunnyside.jpeg';
import Tracker from './../assets/tracker.jpg';
import Newspaper from './../assets/newspaper.png';

export const about = {
  info: [
    {
      header: "About Me",
      subheader: "Born in Quezon City",
      body: "I'm an Information Technology student that loves exploring all things related to Techonology. I'm into building and programming web applications and websites, and I can see myself doing this for a pretty long time. \n\n Another thing that I'm into is teaching people on the basics of coding and assisting as much as I can. Because, I believe that everyone should at least learn the basics of coding for it will surely help them along their professional career.",
      styles: {
        $colspanstart: 1,
        $colspanend: 3,
        $hasPaddingInlineEnd: true,
      },
    },
    {
      header: "Work Experience --------------------------",
      subheader: "My professional journey",
      styles: {
        $colspanstart: 1,
        $colspanend: 6,
        $hasPaddingInlineEnd: true,
      },
    },
    {
      header: "Remotasks",
      subheader: "Freelancer - 3D LiDAR Contributor / Reviewer | Jan 2024 - Feb 2025",
      list: [
        "•	Collaborated with hundreds of other freelancers to deliver quality 3D LiDAR Data that meets the client’s expectation.",
        "•  Quickly adapted with the changing ruleset of the client requirements.",
        "•	Reviewed and delivered over 200 tasks and maintained over 95% accuracy"
      ],
      styles: {
        $colspanstart: 2,
        $colspanend: 6,
        $hasPaddingInlineEnd: true,
      },
    },
    {
      header: "Erovoutika",
      subheader: "Web Developer Intern | March – July 2023",
      list: [
        "•	Collaborated with web developers interns to develop the Erovoutika Exam Website during the internship period.",
        "•	Effectively utilized GitHub for collaborations and code reviews, which improved code sharing and code management",
        "•	Taught several programming topics such as Git, C++, PHP, XAMPP, and HTML as part of the internship program",
      ],
      styles: {
        $colspanstart: 1,
        $colspanend: 4,
        $hasPaddingInlineEnd: true,
      },
    },
    {
      header: "Curriculum Vitae",
      subheader: "Education",
      list: [
        // "2013 - 2017 Flora A. Ylagan High School",
        // "2017 - 2019 ABE International Business College - ( TecVoc - ICT )",
        "2019 - 2024 Polytechnic University of the Philippines - ( BS Information Technology )",
      ],
      styles: {
        $colspanstart: 3,
        $colspanend: 5,
        $rowspanstart: 3,
        $rowspanend: 5,
        $isFlex: false,
      },
    },
    {
      header: "Skills",
      subheader: "Technical and Specialized",
      body: "These are my current skills that I've acquired throughout my academic and professional journey",
      styles: {
        $colspanstart: 1,
        $colspanend: 6,
        $hasPaddingInlineEnd: true,
      },
    },
  ],
};

export const other = {
  activities: [
    {
      alt: 'Recipe Page Design',
      header:
        "Recipe Page",
      subheader: "Front End Mentor Activity",
      body: "Implemented the design using PUG and SASS. The syntax of PUG compliments the syntax of SASS very well!",
      list: ["Pug", "Sass"],
      link: "https://code4v.github.io/recipe-page--frontend-mentor/",
      img: Recipe,
    },
    {
      alt: 'Time Tracker Design',
      header:
        "Time Tracker",
      subheader: "Front End Mentor Activity",
      body: "Designed using Basic HTML with a twist! Used stylus as the style framwork. Works similarly to SASS",
      list: ["HTML", "Stylus"],
      link: "https://code4v.github.io/time-tracking-dashboard--frontend-mentor/",
      img: Tracker,
    },
    {
      alt: 'News Homepage Design',
      header:
        "News Homepage",
      subheader: "Front End Mentor Activity",
      body: "Built using the basics! Styles are properly organized and modularized",
      list: ["HTML", "CSS"],
      link: "https://code4v.github.io/news-homepage--frontend-mentor/",
      img: Newspaper,
    },
    {
      alt: 'Sunnyside Website Design',
      header:
        "Sunnyside Website",
      subheader: "Front End Mentor Activity",
      body: "A medium sized challenge, considering that it is built only with the OG, HTML and CSS. Of course, the css is organized",
      list: ["HTML", "CSS"],
      link: "https://code4v.github.io/sunnyside-agency--frontend-mentor/",
      img: SunnySide,
    },
  ]
}

export const project = {
  projects: [
    {
      alt: 'Lakbayan Front Page Image',
      header:
        "Lakbayan: A Booking Information System With Travel Package Recommender",
      subheader: "Academic Requirement - Final Thesis",
      body: "A Web Application that is built for Travel Agencies to post their travel packages. This Web Application utilizes a collaborative-based algorithm to suggest users Travel Packages to maximize the matches for the posted Travel Package. I took part of the backend development, implementing the recommendation algorithm, CRUD, site deployment, and third-party integrations like Paymongo API, AWS BitBucket, and Cloudinary",
      list: ["PHP", "Javascript", "MySQL"],
      link: "https://github.com/Code4V/lakbayan-travel-and-tours",
      img: Lakbay,
    },
    {
      alt: 'Erovoutika Landing Page',
      header: "Erovoutika International Academy",
      subheader: "Internship Requirement",
      body: "A Web Application for offering online courses by Erovoutika. After you completed a course, you can proceed to take an exam and get certified in a whim! Courses offered includes Electronics, Robotics, Automation, and ICT. I took part of some of the back-end side of the application, collaborated with co-workers to optimize the website and protection from Cross-site Scripting",
      list: ["PHP", "MySQL"],
      link: "https://eira.erovoutika.ph/",
      img: Eira,
    },
    {
      alt: 'Erovoutika Landing Page',
      header: "Erovoutika Exam Website",
      subheader: "Internship Requirement",
      body: "A lighter version of the Erovoutika Internation Academy, A website where you learn the basics of web development, like HTML, CSS, and Javascript. Handled the Backend side of the application. Implemented the payment system using Paymongo's API which eases the payment process.",
      list: ["PHP", "JavaScript", "MySQL"],
      link: "https://eira.erovoutika.ph/",
      img: Erovoutika,
    },
    {
      alt: 'Odin Landing Page',
      header: "The Odin Project: Javascript",
      subheader: "Personal Project",
      body: "A Compilation of my journey of learning Javascript through The Odin Project. My codes are publicly available and other coders can contribute freely",
      link: "https://code4v.github.io/odin-playground/",
      list: ["Javascript", "React"],
      img: Odin
    },
  ],
};
