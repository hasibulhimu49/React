import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnYPXIDmRTKpj1drsmIRD_0NJJLVIVnMJNA&s",
      company: "Amazon",
      timeAgo: "2 Weeks Ago",
      position: "Senior UI/UX Designer",
      type: "Part Time",
      level: "Senior Level",
      salary: "250-350K",
      location: "Dhaka, Bangladesh",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQ7qOYYEqsYIiowgL41VfweHewBn1O4zKHg&s",
      company: "Google",
      timeAgo: "1 Week Ago",
      position: "Frontend Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "300-450K",
      location: "Dhaka, Bangladesh",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ73tR51pZd0YdVSMJ9LJihoYwm2NCXLAExjQ&s",
      company: "Microsoft",
      timeAgo: "3 Days Ago",
      position: "Backend Developer",
      type: "Full Time",
      level: "Senior Level",
      salary: "400-600K",
      location: "Chattogram, Bangladesh",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeDVxwJhsdMEbC2Ft1nDjdyjNOcCBMjeMSA&s",
      company: "Meta",
      timeAgo: "5 Days Ago",
      position: "React Developer",
      type: "Remote",
      level: "Mid Level",
      salary: "350-500K",
      location: "Remote",
    },
    {
      logo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
      company: "Netflix",
      timeAgo: "1 Day Ago",
      position: "UI Engineer",
      type: "Contract",
      level: "Senior Level",
      salary: "450-700K",
      location: "Dhaka, Bangladesh",
    },
    {
      logo: "https://cdn.pixabay.com/photo/2018/05/08/21/08/apple-3383931_1280.png",
      company: "Apple",
      timeAgo: "4 Days Ago",
      position: "iOS Developer",
      type: "Full Time",
      level: "Senior Level",
      salary: "500-750K",
      location: "Sylhet, Bangladesh",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
      company: "Tesla",
      timeAgo: "6 Days Ago",
      position: "Software Engineer",
      type: "Full Time",
      level: "Mid Level",
      salary: "450-650K",
      location: "Remote",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-ojvgheqFF4jc5EM9MYcOkULjVY3oG2hzw&s",
      company: "Spotify",
      timeAgo: "2 Days Ago",
      position: "Java Developer",
      type: "Remote",
      level: "Junior Level",
      salary: "200-350K",
      location: "Dhaka, Bangladesh",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsy9DVbzBn3nlR5glCzV6YT2O3UMU4FHFDRg&s",
      company: "Adobe",
      timeAgo: "1 Week Ago",
      position: "Full Stack Developer",
      type: "Full Time",
      level: "Senior Level",
      salary: "400-650K",
      location: "Khulna, Bangladesh",
    },
    {
      logo: "https://images.icon-icons.com/2699/PNG/512/oracle_logo_icon_168918.png",
      company: "Oracle",
      timeAgo: "3 Weeks Ago",
      position: "Spring Boot Developer",
      type: "Part Time",
      level: "Mid Level",
      salary: "300-500K",
      location: "Rajshahi, Bangladesh",
    },
  ];


  return (
    // <div className="card-wrapper">
    //   {jobs.map(function (elem, idx) {
    //     console.log(elem,idx);
    //     return (
    //       <div key={idx}>
    //         <Card
    //           logo={elem.logo}
    //           company={elem.company}
    //           time={elem.timeAgo}
    //           position={elem.position}
    //           type={elem.type}
    //           level={elem.level}
    //           salary={elem.salary}
    //           location={elem.location}
    //         />
    //       </div>
    //     );
    //   })}
    // </div>


    //practice again

    <div className="card-wrapper">
      {
        jobs.map((jobs,index)=>{
          return(
            <div key={index}>
              <Card 
              logo={jobs.logo}
              company={jobs.company}
              time={jobs.timeAgo}
              position={jobs.position}
              type={jobs.type}
              level={jobs.level}
              salary={jobs.salary}
              location={jobs.location}
              />
              </div>
          )
        })
      }

    </div>
  );
};

export default App;
