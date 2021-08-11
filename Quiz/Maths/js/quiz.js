let questions = [
  {
    id: 1,
    question: "The roman numeral for 18 is ______.",
    answer: "IVIII",
    options: ["XXVIII", "XVIII", "IVIII", "VVVIII"],
  },
  {
    id: 2,
    question:
      "The smallest 4-digit number formed by using the digits 0, 3, 5, 6 is _____.",
    answer: "3056",
    options: ["0356", "6530", "6035", "3056"],
  },
  {
    id: 3,
    question: "The predecessor of the smallest 5-digit number is ____.",
    answer: "9999",
    options: ["9999", "99999", "10001", "100001"],
  },
  {
    id: 4,
    question: "0.07 = ____",
    answer: "7/100",
    options: ["7/10", "7/100", "70/10", "70/100"],
  },
  {
    id: 5,
    question: "145 x 1 =",
    answer: "145",
    options: ["1", "0", "145", "cannot find answer"],
  },
  {
    id: 6,
    question:
      "How will you write ninety thousand three hundred seven in digits?",
    answer: "90307",
    options: ["900037", "90307", "93007", "903007"],
  },
  {
    id: 7,
    question: "Which is the smallest five digit number?",
    answer: "10000",
    options: ["10000", "55555", "5555", "55055"],
  },
  {
    id: 8,
    question: "What is the place value of 7 in the number 87965 ",
    answer: "Thousand",
    options: ["Ten Hundred ", "Thousand", "Ten thousand", "Tens"],
  },
  {
    id: 9,
    question: "A curved figure is called as",
    answer: "circle",
    options: ["triangle", "square", "pentagon", "circle"],
  },
  {
    id: 10,
    question: "100 divided by 5 is",
    answer: "20",
    options: ["15", "20", "18", "5"],
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
