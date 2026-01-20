addEventListener('DOMContentLoaded', () => {
    const addExperienceButton = document.getElementById('add_experience');
    const addFormationButton = document.getElementById('add_formation');
    const addskillButton = document.getElementById('add_skill');
    let experienceCount = 1;
    let formationCount = 1;
    let skillCount = 1;
    //#region Exp dynamic fields
    addExperienceButton.addEventListener('click', (e) => {
        e.preventDefault();
        let newExperience = document.createElement('div');
        newExperience.id = `experience_entry_${experienceCount}`;
        newExperience.classList.add('experience-entry');
        newExperience.innerHTML = `
        <h4>Expérience Professionnelle</h4>
        <button id="delete_exp_${experienceCount}" class="btn btn-danger mb-4" onclick="deleteExperience(${experienceCount})">X</button>
        <div class="mb-3">
            <label class="form_label job_title">Intitulé du poste</label>
            <input type="text" class="form_control" name="job_title[${experienceCount}]" id="job_title_${experienceCount}" required>
        </div>
        <div class="mb-3">
            <label class="form_label company_name">Entreprise</label>
            <input type="text" class="form_control" name="company[${experienceCount}]" id="company_${experienceCount}" required>
        </div>
        <div class="mb-3">
            <label class="form_label date_start">Date d'entrée</label>
            <input type="date" class="form_control" name="start_date[${experienceCount}]" id="start_date_${experienceCount}" required>
        </div>
        <div class="mb-3">
            <label class="form_label date_end">Date de sortie</label>
            <input type="date" class="form_control" name="end_date[${experienceCount}]" id="end_date_${experienceCount}">
        </div>
        <div class="mb-3">
            <label class="form_label job_description">Description</label>
            <textarea class="form_control" name="job_description[${experienceCount}]" id="job_description_${experienceCount}" required></textarea>
        </div>
        `
        const experienceFieldset = document.getElementById('experience_fieldset');
        experienceFieldset.appendChild(newExperience);
        experienceCount++;
        updatePreview()
    });
    //#endregion
    //#region formation dynamic fields
    addFormationButton.addEventListener('click', (e) => {
        e.preventDefault();
        let newFormation = document.createElement('div');
        newFormation.id = `formation_entry_${formationCount}`;
        newFormation.classList.add('formation-entry');
        newFormation.innerHTML = `
        <h4>Formation</h4>
        <button id="delete_formation_${formationCount}" class="btn btn-danger mb-4" onclick="deleteFormation(${formationCount})">X</button>
        <div class="mb-3">
            <label class="form_label formation_title">Intitulé de la formation</label>
            <input type="text" class="form_control" name="formation_title[${formationCount}]" id="formation_title_${formationCount}" required>
        </div>
        <div class="mb-3">
            <label class="form_label school_name">Établissement</label>
            <input type="text" class="form_control" name="school[${formationCount}]" id="school_${formationCount}" required>
        </div>
        <div class="mb-3">
            <label class="form_label date_start">Date d'entrée</label>
            <input type="date" class="form_control" name="start_date[${formationCount}]" id="start_date_${formationCount}" required>
        </div>
        <div class="mb-3">
            <label class="form_label date_end">Date de sortie</label>
            <input type="date" class="form_control" name="end_date[${formationCount}]" id="end_date_${formationCount}">
        </div>
        <div class="mb-3">
            <label class="form_label formation_description">Description</label>
            <textarea class="form_control" name="description[${formationCount}]" id="description_${formationCount}" required></textarea>
        </div>
        `
        const formationFieldset = document.getElementById('formation_fieldset');
        formationFieldset.appendChild(newFormation);
        formationCount++;
        updatePreview()
    });
    //#endregion
    //#region skills dynamic fields
    addskillButton.addEventListener('click', (e) => {
        e.preventDefault();
        let newSkill = document.createElement('div');
        newSkill.classList.add('skill-entry');
        newSkill.id = `skill_entry_${skillCount}`;
        newSkill.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <h4>Compétence n°${skillCount}</h4>
            <button type="button" class="btn btn-sm btn-danger" onclick="deleteSkill(${skillCount})">Supprimer</button>
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label class="form-label">Intitulé</label>
                <input type="text" class="form-control" name="skill_name[${skillCount}]" id="skill_name_${skillCount}" placeholder="ex: JavaScript" required>
            </div>
            <div class="col-md-6 mb-3">
                <label class="form-label">Niveau</label>
                <input list="levels" class="form-control" name="skill_level[${skillCount}]" id="skill_level_${skillCount}" placeholder="Choisir..." required>
            </div>
        </div>
        `;
        const skillFieldset = document.getElementById('skill_fieldset');
        skillFieldset.appendChild(newSkill);
        skillCount++;
        updatePreview()
    });
    //#endregion
    //#region prewiew generation function
    const formselected = document.getElementById('cv_form');
    formselected.addEventListener('input', () => {
        //#region General Information
        const previewContainer = document.getElementById('cv_preview');
        const formData = new FormData(formselected);
        let jobTitle = document.getElementById('preview_job_title');
        jobTitle.textContent = formData.get('pro_title') || 'Intitulé du poste';
        let surname = document.getElementById('preview_surname');
        surname.textContent = formData.get('surname') || 'Nom';
        let firstname = document.getElementById('preview_name');
        firstname.textContent = formData.get('name') || 'Prénom';
        let email = document.getElementById('preview_email');
        email.textContent = formData.get('mail_adress') || 'Adresse email';
        let phone = document.getElementById('preview_phone');
        phone.textContent = formData.get('phone_nbr') || 'Numéro de téléphone';
        let description = document.getElementById('preview_description');
        description.textContent = formData.get('pro_descripton') || 'Description professionnelle';
        //#endregion
        //#region Experiences
        const previewExperiences = document.getElementById("preview_experiences");
        previewExperiences.innerHTML = "<h5>Expériences Professionnelles</h5>";
        const experienceEntries = formselected.querySelectorAll('.experience-entry');
        experienceEntries.forEach((entry) => {
            // On extrait le numéro de l'ID (ex: "experience_entry_1" -> "1")
            const id = entry.id.replace('experience_entry_', '');

            // Récupération des données via FormData avec l'ID correct
            const expJobTitle = formData.get(`job_title[${id}]`) || 'Intitulé du poste';
            const expCompany = formData.get(`company[${id}]`) || 'Entreprise';
            const expStartDate = formData.get(`start_date[${id}]`) || '';
            const expEndDate = formData.get(`end_date[${id}]`) || 'Présent';
            const expDescription = formData.get(`job_description[${id}]`) || '';

            // 3. Construction du HTML pour cette expérience précise
            const expHTMLexperience = `
            <div class="experience-preview mb-3">
                <h6 class="fw-bold text-uppercase">${expJobTitle}</h6>
                <div class="text-primary">${expCompany}</div>
                <small class="text-muted">${expStartDate} - ${expEndDate}</small>
                <p style="white-space: pre-wrap;">${expDescription}</p>
            </div>
            `;

            // 4. Ajout au conteneur (qui a été vidé au début)
            previewExperiences.insertAdjacentHTML('beforeend', expHTMLexperience);
            
        });
        //#endregion
        //#region Formations preview
        const previewFormations = document.getElementById("preview_formations");
        previewFormations.innerHTML = "<h5>Formations</h5>";
        const formationEntries = formselected.querySelectorAll('.formation-entry');
        formationEntries.forEach((entry) => {
            const id = entry.id.replace('formation_entry_', '');
            const formFormationTitle = formData.get(`formation_title[${id}]`) || 'Intitulé de la formation';
            const formSchool = formData.get(`school[${id}]`) || 'Établissement';
            const formStartDate = formData.get(`start_date[${id}]`) || '';
            const formEndDate = formData.get(`end_date[${id}]`) || 'Présent';
            const formDescription = formData.get(`description[${id}]`) || '';
            const expHTMLformation = `
                <div class="formation-preview mb-3">
                    <h6 class="fw-bold text-uppercase">${formFormationTitle}</h6>
                    <div class="text-primary">${formSchool}</div>
                    <small class="text-muted">${formStartDate} - ${formEndDate}</small>
                    <p style="white-space: pre-wrap;">${formDescription}</p>
                </div>
                `;
            previewFormations.insertAdjacentHTML('beforeend', expHTMLformation);

        });
        //#endregion
        //#region Skills preview
        const previewSkills = document.getElementById("preview_skills");
        previewSkills.innerHTML = "<h5>Compétences</h5>";
        const skillEntries = formselected.querySelectorAll('.skill-entry');
        skillEntries.forEach((entry) => {
            const id = entry.id.replace('skill_entry_', '');
            const skillName = formData.get(`skill_name[${id}]`) || 'Compétence';
            const skillLevel = formData.get(`skill_level[${id}]`) || 'Moyen';
            const skillHTML = `
                <div class="skill-preview mb-2">
                    <strong>${skillName}</strong> - <span>Niveau:${skillLevel}</span>
                </div>
                `;
            previewSkills.insertAdjacentHTML('beforeend', skillHTML);
        });
        //#endregion
    });
    //#endregion
    //#region send preview to php on submit
    formselected.addEventListener('submit', (e) => {
        e.preventDefault();
        sendHTMLPreviewToPHP();
    });
    //#endregion
});
//#region delete fields functions
function deleteExperience(experienceId) {
    const experienceEntry = document.getElementById(`experience_entry_${experienceId}`);
    if (experienceEntry) {
        experienceEntry.remove();
        updatePreview()
    }
};
function deleteFormation(formationId) {
    const formationEntry = document.getElementById(`formation_entry_${formationId}`);
    if (formationEntry) {
        formationEntry.remove();
        updatePreview()
    }
}
function deleteSkill(skillId) {
    const skillEntry = document.getElementById(`skill_entry_${skillId}`);
    if (skillEntry) {
        skillEntry.remove();
        updatePreview()
    }
}
function updatePreview() {
    const event = new Event('input');
    document.getElementById('cv_form').dispatchEvent(event);
}
//#endregion

function sendHTMLPreviewToPHP(){
    const previewContainer = document.getElementById('cv_preview');
    const previewHTML = previewContainer.innerHTML;
    let exportHTML = `<!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generateur de CV</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="index.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="">
        ${previewHTML}
        </div>
    </body>
    </html>
    `;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('preview_html=' + encodeURIComponent(previewHTML));
}