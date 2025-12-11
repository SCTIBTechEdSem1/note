 const subjectsByDay = {
            "Sunday": ["Data Structure and Algorithm (Badal Sir)", 
                "Computer Networks (Suraj Sir)", 
                "Computer Networks (Suraj Sir)"],
                
            "Monday": ["Data Structure and Algorithm (Badal Sir)",
                 "Computer Networks (Suraj Sir)",
                 "Instructional Skills (Kamal Sir)"],

            "Tuesday": ["Data Structure and Algorithm (Badal Sir)",
                "Educational Psychology (Hari Sir)",
                "Instructional Skills (Kamal Sir)"],

            "Wednesday": ["Educational Psychology (Hari Sir)",
                 "Microprocessor And Computer Architecture (Badal Sir)",
                 "IT Project Management (Nabin Sir)"],

            "Thursday": ["Principles of Internet Technologies and Web Applications (Nabin Sir)",
                 "Microprocessor And Computer Architecture (Badal Sir)",
                 "IT Project Management (Nabin Sir)"],
                
            "Friday": ["Principles of Internet Technologies and Web Applications (Nabin Sir)",
                 "Microprocessor And Computer Architecture (Badal Sir)",
                 "Educational Psychology (Hari Sir)"],

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