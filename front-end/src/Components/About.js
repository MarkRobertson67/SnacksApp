
import React from "react";
import "./About.css";
import githubLogo from "../assets/github.png";
import linkedinLogo from "..//assets/linkedin.png";


export default function About( { mode } ) {

    const teamMembers = [
        {
            name: "Wil Santos",
            bio: `I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, Citi, Spotify, and Blackstone.
    
            I'm currently learning Express, having already studied React, JavaScript, HTML & CSS and I am training to become a software engineer so that I can solve real-world problems.`,
            github: "https://github.com/Wilsantos1975",

            linkedin:"https://www.linkedin.com/in/fausto-wilghen-santos-9083a9112/",

        },

        {
            name: "Mark Roberston",
            bio: `I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, Citi, Spotify, and Blackstone.
    
            I'm currently learning Express, having already studied React, JavaScript, HTML & CSS and I am training to become a software engineer so that I can solve real-world problems.  When I'm not coding, I enjoy movies, watching Formula 1 racing, music, travel and playing with my German Shepherd.
            
            I would very much enjoy working for a start-up (as I have start-up experience) or even a large financial firm, as my experience up until Pursuit has been in the financial markets.`,
            github: "https://github.com/MarkRobertson67",
            linkedin:"https://www.linkedin.com/in/mark-robertson-ny-uk/",
        },
    ];


    return (
        <div className="about-wrapper" style={{ 
          filter: mode ? "brightness(80%)" : "none",
        }}>
          
                <div className="about">
                  <h1>About Our Project</h1>
                  <p>
                    "Pig A Lot" is a unique twist on a snack app that deviates from the typical focus on healthy eating. Instead, this app celebrates greasy and indulgent food options that are often considered unhealthy.
                  </p>
                  <p>
                    The backend of the application requires the implementation of a RESTful server that can perform CRUD (Create, Read, Update, Delete) actions on a single resource. The resource is represented by a database table called "snack," which includes fields such as name, category, rating, calories, and various Boolean flags for vegan, halal, and favorite options. The table also incorporates constraints, such as rating being limited to a range of 0 to 5.
                  </p>
                  <p>
                    The backend feature requirements include creating routes for creating new resources, reading all resources, reading a single resource, updating a single resource, and deleting a single resource. Proper "Not Found" responses should be provided for routes that don't match the predefined routes.
                  </p>
                  <p>
                    On the frontend side, a React application was developed to facilitate CRUD operations on the snack resource. The application displays the data in a thoughtful and clear manner. All pages feature a navigation bar with the application name and a button to create a new snack resource.
                  </p>
                  <p>
                    Key frontend feature requirements included an Index page to list all the snack resources, a Show page to provide detailed information about a specific snack, and a form page to create and edit snack resources. The forms have appropriate labels and input types, and when submitted, the data is stored or updated in the database. The Show page has buttons to edit or delete the current snack, providing confirmation prompts where necessary.
                  </p>
                  <p>
                    By meeting the backend and frontend requirements, the "Pig A Lot" app provides a fun and engaging experience for users who appreciate indulgent snack options.
                  </p>
                  <p>
                    The app also includes this "About" page where users can learn about the project and its developers. This page contains a brief project description, as well as a short bio for each teammate and links to their GitHub accounts. The "About" page can be accessed through the navigation bar that appears on every page of the app.
                  </p>
                  <em><p>(Please see readme.md for additional information)</p></em>

                </div>
              
                <div className="team">
      <h1>Meet the Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
            <div className="links-container">
              <div className="github-container">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub Logo" width={30} height={30} />
                </a>
              </div>
              <div className="linkedin-container">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} alt="LinkedIn Logo" width={80} height={26} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="trello-board">
          <a href="https://trello.com/invite/b/q3MjafJY/ATTI5ec278cb24bf01d48f6285b2ddf24ce9D74B7E3C/snacks-simple-project-board" target="_blank" rel="noopener noreferrer">
          <h1>Trello Board</h1>
        </a>
      </div>
      <div className="wireframe">
        <a href="https://lucid.app/lucidchart/b4a7f661-b0e1-4ae8-b8d8-744fc2f7ca0d/edit?viewport_loc=-387%2C-17%2C2736%2C1355%2C0_0&invitationId=inv_cc436efd-3923-431e-8c96-ff955f0cb6d6" target="_blank" rel="noopener noreferrer">
          <h1>Wireframe</h1>
        </a>
      </div>
    </div>
  </div>
);
    }