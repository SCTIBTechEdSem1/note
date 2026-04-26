 const subjectsByDay = {
            "Sunday": ["General Nepali (Tulsi Sir) ", 
                "E-Learning Management System (Badal Sir)", 
                "Research Methods for Computing and Technology (Nabin Sir)"],
                
            "Monday": ["General Nepali (Tulsi Sir)",
                 "System Analysis and Design (Nabin Sir)",
                 "E-Learning Management System (Badal Sir)"],

            "Tuesday": ["General Nepali (Tulsi Sir)",
                "Instructional Skills (II) (Tej Sir/Kamal Sir)",
                "Research Methods for Computing and Technology (Nabin Sir)"],

            "Wednesday": ["Computer Graphics and Multimedia (Suraj Sir)",
                 "Operating System (Badal Sir)",
                 "Instructional Skills (II) (Tej Sir/Kamal Sir)"],

            "Thursday": ["Computer Graphics and Multimedia (Suraj Sir)",
                 "System Analysis and Design (Nabin Sir) ",
                 "Operating System (Badal Sir)"],
                
            "Friday": ["Computer Graphics and Multimedia (Suraj Sir)",
                 "Operating System (Badal Sir)",
                 "System Analysis and Design (Nabin Sir)"],

            "Saturday": ["No Classes"] // Add "No Classes" or empty for Saturday
        };

        function showTodaySubjects() {
            const today = new Date();
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const currentDay = days[today.getDay()];
            const subjects = subjectsByDay[currentDay] || ["No Subjects Today"];

            document.getElementById("dayHeader").textContent = currentDay;

            const tableBody = document.getElementById("subjectTable");
            tableBody.innerHTML = subjects.map((subject, index) => `
                <tr>
                    <td>Period ${index + 1}</td>
                    <td>${subject}</td>
                </tr>
            `).join("");
        }

        showTodaySubjects();