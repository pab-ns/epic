  const courses = [
    {
      name: "Agile for Leaders",
      link: "https://training.epicagile.com.au/w/au/courses/84-agile-for-leaders",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/84-agile-for-leaders",
      img: "../images/pathway/LEADERSHIP_Agile for Leaders.png",
      desc: "Foster an environment where cross-functional teams have the alignment and autonomy to thrive and become high-performing.",
      modal: "Virtual",
      date: "–",
      price: "–",
    },
    {
      name: "Capability Leadership",
      link: "https://training.epicagile.com.au/w/au/courses/89-leading-chapters",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/89-leading-chapters",
      img: "../images/pathway/LEADERSHIP_Capability-Leadership.png",
      desc: "As a Chapter/Capability Lead gain a greater understanding of the role and how to establish and maintain a healthy Chapter.",
      modal: "Virtual",
      date: "–",
      price: "–",
    },
    {
      name: "Leadership Agility",
      link: "#",
      enrolLink: "#",
      img: "../images/pathway/LEADERSHIP_Leadership-Agility.png",
      desc: "Transform leadership style to play a pivotal role in navigating change, driving innovation, and fostering a culture of continual learning.",
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
