// Function to update the resume preview in real-time
function updateResume() {
    // Get values from input
    const name = document.getElementById('name').value;
    const jobtitle = document.getElementById('jobtitle').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // Update Preview HTML
    document.getElementById('previewName').innerText = name || "Your Name";
    document.getElementById('previewJobtitle').innerText = jobtitle || "Job Title";
    document.getElementById('previewPhone').innerText = phone || "Phone";
    document.getElementById('previewEmail').innerText = email || "Email";
    document.getElementById('previewLinkedin').innerText = linkedin || "LinkedIn";
    document.getElementById('previewSummary').innerText = summary || "Professional summary will appear here.";
    document.getElementById('previewExperience').innerText = experience || "Your work experience goes here.";
    document.getElementById('previewEducation').innerText = education || "Your education details go here.";

    // Handle Skills (Split by comma and create list items)
    const skillsArray = skills.split(',').map(skill => skill.trim()).filter(skill => skill !== "");
    const skillsList = document.getElementById('previewSkills');
    skillsList.innerHTML = ""; // Clear current list
    
    if(skillsArray.length > 0 && skillsArray[0] !== "") {
        skillsArray.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill;
            skillsList.appendChild(li);
        });
    } else {
        skillsList.innerHTML = "<li>Skill 1</li><li>Skill 2</li>";
    }
}

// Function to trigger print / PDF Download
function printResume() {
    window.print();
}
