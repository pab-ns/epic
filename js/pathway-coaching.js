  const courses = [
    {
      img: "../images/pathway/COACHING_Coach.png",
      name: "Coach",
      desc: "Build high-performing teams through assessing culture and maturity, with effective coaching, mentoring, and teaching.",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/38-epic-coach-icpacc"
    },
    {
      name: "Enterprise Coach",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/79-enterprise-agile-coaching-icpent",
      img: "../images/pathway/COACHING_Enterprise-Coach.png",
      desc: "Improve agile adoption through looking beyond teams & divisions to identify and overcome impediments to agility.",
    },
    {
      name: "Transformation Coach",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/80-coaching-agile-transformation-icpcat",
      img: "../images/pathway/COACHING_Transformation-Coach.png",
      desc: "Lead effective transformation by building on current strengths and incrementally introducing new practices and operating models. ",
    },
    {
      name: "Expert Coach",
      enrolLink: "#",
      img: "../images/pathway/COACHING_Expert-Coach.png",
      desc: "This course equips you with the ability to facilitate impactful sessions, coach with confidence, mentor with purpose, and teach with clarity.",
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
      <div class="border border-t-1 border-emerald-500"></div>
      <div class="space-y-5">
        <h5 class="text-3xl font-bold text-left capitalize text-epicBlue mt-8">${course.name}</h5>
        <p class="text-left text-gray-700 md:text-left text-base">${course.desc}</p> 
  
        <div class="text-center py-5">
          <button class="bg-emerald-500 hover:bg-cyan-500 transition-all duration-200 text-white py-3 px-7 rounded-full font-bold uppercase items-center text-xs cursor-pointer">
            <a href="${course.enrolLink}"><span>Learn more</span></a>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
