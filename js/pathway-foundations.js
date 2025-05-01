  const courses = [
    {
      name: "Agile Foundations",
      link: "https://training.epicagile.com.au/w/au/courses/36-agile-foundations-for-teams",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/36-agile-foundations-for-teams",
      img: "../images/pathway/FOUNDATIONS_agile-foundations.png",
      desc: "Effectively apply agile values and principles to the roles, events & artefacts of a self-organising cross-functional team.",
      modal: "Virtual",
      date: "–",
      price: "–",
    },
    {
      name: "Scaling Agile",
      link: "#",
      enrolLink: "#",
      img: "../images/pathway/FOUNDATIONS_Scaling-Agile.png",
      desc: "Accelerate your teams understanding of Crews/Tribes, the roles and events to successfully operate, what keeps them together, and how to measure success.",
      modal: "Virtual",
      date: "–",
      price: "–",
    },
    {
      name: "AgilityHealth Facilitator",
      link: "#",
      enrolLink: "#",
      img: "../images/pathway/FOUNDATIONS_AgilityHealth.png",
      desc: "This certification workshop prepares participants to facilitate and deliver the TeamHealth Retrospective and certifies them to be AgilityHealth Facilitators.",
      modal: "Virtual",
      date: "–",
      price: "–",
    },
    {
      name: "Lean Change Foundations",
      link: "https://training.epicagile.com.au/w/au/courses/77-lean-change-foundations",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/77-lean-change-foundations",
      img: "../images/pathway/FOUNDATIONS_Lean-Change.png",
      desc: "Create an iterative change approach, fit for your organisation that integrates lean and agile practices with design thinking.",
      modal: "Virtual",
      date: "–",
      price: "–",
    },
    {
      name: "Business Agility Foundations",
      link: "https://training.epicagile.com.au/w/au/courses/86-business-agility-foundations-icpbaf",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/86-business-agility-foundations-icpbaf",
      img: "../images/pathway/FOUNDATIONS_Business-Agility.png",
      desc: "Develop business acumen to apply the strategy and patterns of business agility that address today’s opportunities and challenges",
      modal: "Virtual",
      date: "–",
      price: "–",
    },
    {
      name: "Leading Scaled Agile",
      link: "https://training.epicagile.com.au/w/au/courses/90-epic-tribe-crew-foundations",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/90-epic-tribe-crew-foundations",
      img: "../images/pathway/FOUNDATIONS_Leading-Scaled-Agile.png",
      desc: "Equip Leaders to successfully support and operate a Crew/Tribe. Focusing on the foundations of tribes, roles, how they operate and measure success.",
      modal: "Virtual",
      date: "–",
      price: "–",
    },
  ];

  const container = document.getElementById("courseContainer");

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "flex flex-col p-6 bg-white rounded-xl shadow-xl";

    card.innerHTML = `
      <div class="mx-auto mb-10">
        <img src="${course.img}" width="180" alt="">
      </div>
      <div class="border border-t-1 border-violet-400"></div>
      <div class="space-y-5">
        <h5 class="text-3xl font-bold text-left capitalize text-epicBlue mt-8">${course.name}</h5>
        <p class="text-left text-gray-700 md:text-left text-base">${course.desc}</p> 
  
        <div class="text-center py-5">
          <button class="bg-violet-400 hover:bg-indigo-800 transition-all duration-200 text-white py-3 px-7 rounded-full font-bold uppercase items-center text-xs cursor-pointer">
            <a href="${course.enrolLink}"><span>Learn more</span></a>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
