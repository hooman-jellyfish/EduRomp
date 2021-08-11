let questions=[
  {
  id:1,
  question: "What part of the plant conducts photosynthesis?",
  answer:"Leaf",
  options: [
  "Branch","Leaf","Root","Trunk"
  ]
  },
  {
  id:2,
  question: "Which is the largest land animal?",
  answer:"Elephant",
  options: [
  "Lion","Tiger","Elephant","Rhinoceros"
  ]
  },
  {
  id:3,
  question: "____ helps pump blood through the entire body.",
  answer:"Heart",
  options: [
  "Lungs","Kidneys","Heart","Brain"
  ]
  },
  {
  id:4,
  question: "If one boils water it will convert into ____.",
  answer:"Steam",
  options: [
  "Mist","Steam","Clouds","Snow"
  ]
  },
  {
  id:5,
  question: "When you push something, you apply ____.",
  answer:"Force",
  options: [
  "Force","Acceleration","Mass","Compression"
  ]
  },
  {
  id:6,
  question: "Where does our food collect after we chew and swallow it?",
  answer:"Stomach",
  options: [
  "Small intestine","Large intestine","Stomach","Liver"
  ]
  },
  {
      id:7,
      question: "Which animal from the below list is best adapted to the desert?",
      answer:"Camel",
      options: [
      "Tiger","Cheetah","Camel","Deer"
      ]
      },
      {
          id:8,
          question: "What part of the skeletal system protects the brain?",
          answer:"Skull",
          options: [
          "Spine","Thigh","Pelvis","Skull"
          ]
          },
          {
              id:9,
              question: "What is the name of a frog’s young one?",
              answer:"Tadpole",
              options: [
              "Infant","Puppy","Calf","Tadpole"
              ]
              },
              {
                  id:10,
                  question: "Which group of animals have scales?",
                  answer:"Reptiles",
                  options: [
                  "Mammals","Amphibians","Reptiles","None"
                  ]
                  },
  
  ];
let value = JSON.stringify(questions);
localStorage.setItem("question", value);

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);
};

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;
  question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>
    `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

function next() {
  if (question_count == questions.length - 1) {
    location.href = "./end.html";
  }

  let user_answer=document.querySelector("li.option.active").innerHTML
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  } else {
    points += 0;
    sessionStorage.setItem("points", points);
  }
  question_count++
  show(question_count)
}
