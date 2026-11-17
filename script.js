const studentName = "Alice Kamau";
const registrationNumber = "REG-2025-011";
const academicProgramme = "Bachelor of Computer Science";

console.log("Student Name:", studentName);
console.log("Registration Number:", registrationNumber);
console.log("Academic Programme:", academicProgramme);

function calculateGrade(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60 && score < 70) {
    return "B";
  } else if (score >= 50 && score < 60) {
    return "C";
  } else if (score >= 40 && score < 50) {
    return "D";
  } else {
    return "E";
  }
}

const gradeFor75 = calculateGrade(75);
alert("The grade for score 75 is: " + gradeFor75);

const studentForm = document.getElementById("studentForm");
const formMessage = document.getElementById("formMessage");
const studentSummary = document.getElementById("studentSummary");

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const regNumber = document.getElementById("regNumber").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!fullName || !regNumber) {
    formMessage.textContent = "Please enter both your full name and registration number.";
    formMessage.style.color = "#b42318";
    return;
  }

  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "#b42318";
    return;
  }

  studentSummary.innerHTML = `
    <p><strong>Student Name:</strong> ${fullName}</p>
    <p><strong>Registration Number:</strong> ${regNumber}</p>
  `;

  formMessage.textContent = "Registration submitted successfully!";
  formMessage.style.color = "#1e8e3e";
});

const sampleStudent = {
  name: "Jane Wanjiru",
  regNumber: "REG-2025-555",
  email: "jane.wanjiru@northbridge.edu"
};

const validationTest =
  sampleStudent.name &&
  sampleStudent.regNumber &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sampleStudent.email);

console.log("Sample validation test:", validationTest);
console.log("Grade check for 75:", gradeFor75);
