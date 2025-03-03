document.getElementById("generate-resume").addEventListener("click", generateResume);
document.getElementById("print-resume").addEventListener("click", () => {
    window.print();
});

function generateResume(event) {
    event.preventDefault();

    const photoInput = document.getElementById("photo");
    let photoUrl = "";
    if (photoInput.files[0]) {
        photoUrl = URL.createObjectURL(photoInput.files[0]);
    }

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    const preview = document.getElementById("resume-preview");
    preview.innerHTML = `
    <div class="sidebar">
        <img src="${photoUrl}" alt="User Photo" style="max-width: 150px; margin-bottom: 15px;">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>    
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    </div>
    `;
}