  const courses = [
    {
      name: "Team Facilitator",
      link: "#",
      enrolLink: "#",
      img: "../images/pathway/DELIVERY_Team-Facilitator.png",
      desc: "Design and lead effective events & workshops that achieve outcomes and enable development & learning.",
      modal: "Virtual",
      date: "–",
      price: "–",
    },
    {
      name: "Delivery Manager",
      link: "#",
      enrolLink: "#",
      img: "../images/pathway/DELIVERY_delivery-Manager.png",
      desc: "Enable teams to deliver on value, to quality and within constraints; with adaptive planning, improved flow and greater transparency.",
      modal: "Virtual",
      date: "–",
      price: "–",
    },
    {
      name: "Lean Portfolio Management",
      link: "#",
      enrolLink: "#",
      img: "../images/pathway/DELIVERY_Lean-Portfolio-Manager.png",
      desc: "Plan dynamically and be flexible enough to adjust initiatives and budgets as the market changes. Get the tools to work effectively in remote environments with distributed teams.",
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
      <div class="mx-auto my-8">
        <img src="${course.img}" width="180" alt="">
      </div>
      <div class="border border-t-1 border-epicOrange"></div>
      <div class="space-y-5">
        <h5 class="text-3xl font-bold text-left capitalize text-epicBlue mt-8">${course.name}</h5>
        <p class="text-left text-gray-700 md:text-left text-base">${course.desc}<span class="text-epicOrange hover:text-orange-700 transition-all duration-200 cursor-pointer"> 
          <a href="${course.link}">Learn More →</a>
        </span> </p> 
  
        <ul class="space-y-2">
          <li>📍 <span class="text-gray-600 ml-2">${course.modal}</span></li>
          <li>🗓️ <span class="text-gray-600 ml-2">${course.date}</span></li>
          <li>💳 <span class="text-gray-600 ml-2">${course.price}</span></li>
        </ul>
        <div class="text-center py-5">
          <button class="bg-epicOrange hover:bg-orange-700 transition-all duration-200 text-white py-3 px-7 rounded-full font-bold uppercase items-center text-sm cursor-pointer">
            <a href="${course.enrolLink}"><span>Enrol Now</span></a>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
