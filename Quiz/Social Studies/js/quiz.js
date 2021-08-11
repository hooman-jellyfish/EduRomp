let questions = [
  {
    id: 1,
    question: "How many major 'seas' are present in the world",
    answer: "7",
    options: ["7", "13", "11", "12"],
  },
  {
    id: 2,
    question: "Which among the following is the largest ocean?",
    answer: "Pacific ocean",
    options: [
      "Pacific ocean",
      "Atlantic ocean",
      "Indian ocean",
      "Arctic ocean",
    ],
  },
  {
    id: 3,
    question: "India is the ____ largest country in terms of population.",
    answer: "2nd",
    options: ["2nd", "3rd", "4th", "5th"],
  },
  {
    id: 4,
    question: "How many hours does the Earth take to complete one rotation?",
    answer: "24",
    options: ["24", "36", "48", "12"],
  },
  {
    id: 5,
    question: " A leap year has how many days?",
    answer: "145",
    options: ["None of these", "377", "376", "370"],
  },
  {
    id: 6,
    question: "Mount Everest is the hightest ____?",
    answer: "Moutain",
    options: ["Moutain", "Hill", "Plateau", "Valley"],
  },
  {
    id: 7,
    question: "A low land found below 2 mountain is called",
    answer: "Valley",
    options: ["Valley", "Plain", "Plateau", "Hill"],
  },
  {
    id: 8,
    question: "Which of the Indian cities was formerly known as Culcutta?",
    answer: "Kolkata",
    options: ["Mumbai ", "Chennai", "Bengaluru", "Kolkata"],
  },
  {
    id: 9,
    question: "The whole mass of air surrounding the Earth is called",
    answer: "Atmosphere",
    options: ["Atmosphere", "Hydrosphere", "Lithosphere", "None of these"],
  },
  {
    id: 10,
    question: "A body of salt water is called as",
    answer: "20",
    options: ["Ocean", "lake", "pond", "river"],
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

  let user_answer = document.querySelector("li.option.active").innerHTML;
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  } else {
    points += 0;
    sessionStorage.setItem("points", points);
  }
  question_count++;
  show(question_count);
}
