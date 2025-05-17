 const subjectsByDay = {
            "Sunday": ["ISD (Hari Sir)", "DBMS (Suraj Sir)", "Digital Logic (Nabin Sir)"],
            "Monday": ["ISD (Hari Sir)", "DBMS (Suraj Sir)", "Digital Logic (Nabin Sir)"],
            "Tuesday": ["OOP (Aparna Maam)","DBMS (Suraj Sir)", "Digital Logic (Nabin Sir)"],
            "Wednesday": ["OOP (Aparna Maam)", "Communication Skills"],
            "Thursday": ["OOP (Aparna Maam)", "PSM (Manish Sir)","Communication Skills"],
            "Friday": ["CM (Nabin Sir)", "PSM (Manish Sir)","Communication Skills"],
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
