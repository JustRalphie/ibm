        const courses = [
            { title: "Course Title 1", description: "Description of course 1." },
            { title: "Course Title 2", description: "Description of course 2." }
        ];

        const attendanceRecord = new Set(); // To track attendance days

        function displayCourses() {
            const courseSection = document.getElementById('courses');
            courses.forEach((course, index) => {
                const courseDiv = document.createElement('div');
                courseDiv.classList.add('course');
                courseDiv.innerHTML = `
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <button onclick="enroll(${index})">Enroll</button>
                `;
                courseSection.appendChild(courseDiv);
            });
        }

        function enroll(courseIndex) {

            const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
            const course = courses[courseIndex];

            if (course.title == 'Course Title 1') {
                window.open("home.html");
            }


            if (course.title == 'Course Title 2') {
                window.open("trending.html");
            }

            if (!enrolledCourses.includes(course.title)) {
                enrolledCourses.push(course.title);
                localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
                alert(`You have successfully enrolled in "${course.title}"!`);
            } else {
                alert(`You are already enrolled in "${course.title}".`);
            }
        }

        document.getElementById('assignmentForm').onsubmit = function (e) {
            e.preventDefault();
            const title = document.getElementById('assignmentTitle').value;
            const description = document.getElementById('assignmentDescription').value;
            const assignmentList = document.getElementById('assignmentList');

            const assignmentDiv = document.createElement('div');
            assignmentDiv.classList.add('assignment');
            assignmentDiv.innerHTML = `
                <h4>${title}</h4>
                <p>${description}</p>
                <input type="file" accept="application/pdf" required>
                <button onclick="submitAssignment('${title}')">Submit Assignment</button>
            `;
            assignmentList.appendChild(assignmentDiv);
            this.reset();
        };

        function submitAssignment(title) {
            alert(`Assignment "${title}" submitted successfully!`);
        }

        function createCalendar() {
            const calendar = document.getElementById('calendar');
            const daysInMonth = 30; // Simplified for demonstration
            for (let i = 1; i <= daysInMonth; i++) {
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('day');
                dayDiv.textContent = i;
                calendar.appendChild(dayDiv);
            }
        }

        function highlightAttendance(day) {
            if (attendanceRecord.has(day)) {
                alert(`Attendance for day ${day} is already marked.`);
            } else {
                attendanceRecord.add(day);
                const days = document.querySelectorAll('.day');
                days[day - 1].classList.add('attended');
                const user = JSON.parse(localStorage.getItem('user'));
                const date = `${day}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
                document.getElementById('attendanceStatus').innerHTML += `<p>Attendance marked for ${user.name} on ${date}.</p>`;
            }
        }

        function markAttendance() {
            const currentDay = new Date().getDate();
            highlightAttendance(currentDay);
        }

        function init() {
            displayCourses();
            createCalendar();
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                alert(`Welcome back, ${user.name}!`);
            }
        }

        window.onload = init;

document.addEventListener("DOMContentLoaded", function() {
    var profilePicture = document.getElementById("profile-picture");
    var userMenu = document.querySelector(".user-menu");

    profilePicture.addEventListener("click", function(event) {
        event.stopPropagation();
        userMenu.classList.toggle("show");
    });

document.body.addEventListener("click", function() {
    if (userMenu.classList.contains("show")) {
        userMenu.classList.remove("show");
    }
});
});
