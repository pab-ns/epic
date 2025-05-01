  const courses = [
    {
      img: "../images/pathway/PRODUCT_Product-Owner.png",
      name: "Product Owner",
      desc: "Maximise the value of a product or service with customer-focused, outcome-driven product discovery and effective team collaboration.",
      enrolLink: "https://training.epicagile.com.au/w/au/courses/40-epic-product-owner-icpapo"
    },
    {
      img: "../images/pathway/PRODUCT_Human-Centered-Design.png",
      name: "Human Centered Design",
      desc: "Gain deep understanding of the principles and experience a number of Human Centred Design (HCD) techniques to apply in their environments.",

      enrolLink: "#"
    },
    {
      img: "../images/pathway/PRODUCT_Product-Manager.png",
      name: "Product Manager",
      desc: "Position and deliver winning products and services; aligning life-cycle with the organisation’s purpose and customers’ needs",
      enrolLink: "#"
    },
  ];

  const container = document.getElementById("courseContainer");

  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "flex flex-col p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200";

    card.innerHTML = `
      <div class="mx-auto mb-10">
        <img src="${course.img}" width="180" alt="">
      </div>
      <div class="border border-t-1 border-epicOrange"></div>
      <div class="space-y-5">
        <h5 class="text-3xl font-bold text-left capitalize text-epicBlue mt-8">${course.name}</h5>
        <p class="text-left text-gray-700 md:text-left text-base">${course.desc}<span class="text-epicOrange hover:text-orange-700 transition-all duration-200 cursor-pointer"> 
        </span> </p> 
  
        <div class="text-center py-5">
          <button class="bg-epicOrange hover:bg-orange-700 transition-all duration-200 text-white py-3 px-7 rounded-full font-bold uppercase items-center text-xs cursor-pointer">
            <a href="${course.enrolLink}"><span>Learn More</span></a>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
