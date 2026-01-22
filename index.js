addEventListener('DOMContentLoaded', () => {
    const addExperienceButton = document.getElementById('add_experience');
    const addFormationButton = document.getElementById('add_formation');
    const addSkillButton = document.getElementById('add_skill');
    let experienceCount = 1;
    let formationCount = 1;
    let skillCount = 1;
    //#region Exp dynamic fields
    addExperienceButton.addEventListener('click', (e) => {
        e.preventDefault();
        let newExperience = document.createElement('div');
        newExperience.id = `experience_entry_${experienceCount}`;
        newExperience.classList.add('experience-entry','needs-validation','was-validated');
        newExperience.innerHTML = `
        <h4>Expérience Professionnelle</h4>
        <button id="delete_exp_${experienceCount}" class="btn btn-danger mb-4" onclick="deleteExperience(${experienceCount})">X</button>
        <div class="mb-3 position-relative mb-5">
            <label class="form_label job_title">Intitulé du poste</label>
            <input type="text" class="form_control" name="job_title[${experienceCount}]" id="job_title_${experienceCount}" required>
            <div class="valid-tooltip">
                  Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                  Oups, ce champ est obligatoire.
                </div>
        </div>

        <div class="mb-3 position-relative mb-5">
            <label class="form_label company_name">Entreprise</label>
            <input type="text" class="form_control" name="company[${experienceCount}]" id="company_${experienceCount}" required>
            <div class="valid-tooltip">
                  Génial, ça semble correct !
            </div>
            <div class="invalid-tooltip">
                  Oups, ce champ est obligatoire.
            </div>
        </div>

        <div class="mb-3 position-relative mb-5">
            <label class="form_label date_start">Date d'entrée</label>
            <input type="date" class="form_control" name="start_date[${experienceCount}]" id="start_date_${experienceCount}" required>
            <div class="valid-tooltip">
                  Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                  Oups, ce champ est obligatoire.
                </div>
            </div>
        </div>

        <div class="mb-3 position-relative mb-5">
            <label class="form_label date_end">Date de sortie</label>
            <input type="date" class="form_control" name="end_date[${experienceCount}]" id="end_date_${experienceCount}">
            <div class="valid-tooltip">
                  Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                  Oups, ce champ est obligatoire.
                </div>
            </div>
        </div>

        <div class="mb-3 position-relative mb-5">
            <label class="form_label job_description">Description</label>
            <textarea class="form_control" name="job_description[${experienceCount}]" id="job_description_${experienceCount}" required></textarea>
            <div class="valid-tooltip">
                  Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                  Oups, ce champ est obligatoire.
                </div>
            </div>
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
        newFormation.classList.add('experience-entry','needs-validation','was-validated');
        newFormation.innerHTML = `
        <h4>Formation</h4>
        <button id="delete_formation_${formationCount}" class="btn btn-danger mb-4" onclick="deleteFormation(${formationCount})">X</button>
        <div class="mb-3 position-relative mb-5">
            <label class="form_label formation_title">Intitulé de la formation</label>
            <input type="text" class="form_control" name="formation_title[${formationCount}]" id="formation_title_${formationCount}" required>
            <div class="valid-tooltip">
                  Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                  Oups, ce champ est obligatoire.
                </div>
            </div>
        </div>

        <div class="mb-3 position-relative mb-5">
            <label class="form_label school_name">Établissement</label>
            <input type="text" class="form_control" name="school[${formationCount}]" id="school_${formationCount}" required>
            <div class="valid-tooltip">
                  Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                  Oups, ce champ est obligatoire.
                </div>
            </div>
        </div>

        <div class="mb-3 position-relative mb-5">
            <label class="form_label date_start">Date d'entrée</label>
            <input type="date" class="form_control" name="start_date[${formationCount}]" id="start_date_${formationCount}" required>
            <div class="valid-tooltip">
                  Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                  Oups, ce champ est obligatoire.
                </div>
            </div>
        </div>

        <div class="mb-3 position-relative mb-5">
            <label class="form_label date_end">Date de sortie</label>
            <input type="date" class="form_control" name="end_date[${formationCount}]" id="end_date_${formationCount}">
            <div class="valid-tooltip">
                  Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                  Oups, ce champ est obligatoire.
                </div>
            </div>
        </div>

        <div class="mb-3 position-relative mb-5">
            <label class="form_label formation_description">Description</label>
            <textarea class="form_control" name="description[${formationCount}]" id="description_${formationCount}" required></textarea>
            <div class="valid-tooltip">
                  Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                  Oups, ce champ est obligatoire.
                </div>
            </div>
        </div>
        `
        const formationFieldset = document.getElementById('formation_fieldset');
        formationFieldset.appendChild(newFormation);
        formationCount++;
        updatePreview()
    });
    //#endregion
    //#region skills dynamic fields
    addSkillButton.addEventListener('click', (e) => {
        e.preventDefault();
        let newSkill = document.createElement('div');
        newSkill.classList.add('experience-entry','needs-validation','was-validated');
        newSkill.id = `skill_entry_${skillCount}`;
        newSkill.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <h4>Compétence n°${skillCount}</h4>
            <button type="button" class="btn btn-sm btn-danger" onclick="deleteSkill(${skillCount})">Supprimer</button>
        </div>
        <div class="row">
            <div class="col-md-6 position-relative mb-5">
                <label class="form-label">Intitulé</label>
                <input type="text" class="form-control" name="skill_name[${skillCount}]" id="skill_name_${skillCount}" placeholder="ex: JavaScript" required>
                <div class="valid-tooltip">
                      Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                      Oups, ce champ est obligatoire.
                </div>
            </div>

            <div class="col-md-6 position-relative mb-5">
                <label class="form-label">Niveau</label>
                <input list="levels" class="form-control" name="skill_level[${skillCount}]" id="skill_level_${skillCount}" placeholder="Choisir..." required>
                <div class="valid-tooltip">
                      Génial, ça semble correct !
                </div>
                <div class="invalid-tooltip">
                      Oups, ce champ est obligatoire.
                </div>
            </div>

            <datalist id="levels">
                <option value="Débutant">
                <option value="Intermédiaire">
                <option value="Avancé">
            </datalist>
        </div>
        `;
        const skillFieldset = document.getElementById('skill_fieldset');
        skillFieldset.appendChild(newSkill);
        skillCount++;
        updatePreview()
    });
    //#endregion
 //#region preview generation function
const formselected = document.getElementById('cv_form');
formselected.addEventListener('input', () => {
    //#region General Information
    const formData = new FormData(formselected);
    document.getElementById('preview_job_title').textContent = formData.get('pro_title') || 'Intitulé du poste';
    document.getElementById('preview_surname').textContent = formData.get('surname') || 'Nom';
    document.getElementById('preview_name').textContent = formData.get('name') || 'Prénom';
    document.getElementById('preview_email').textContent = formData.get('mail_adress') || 'Adresse email';
    document.getElementById('preview_phone').textContent = formData.get('phone_nbr') || 'Numéro de téléphone';
    document.getElementById('preview_description').textContent = formData.get('pro_descripton') || 'Description professionnelle';
    //#endregion
    //#region Experiences
    const previewExperiences = document.getElementById("preview_experiences");
    previewExperiences.innerHTML = "<h5 style='border-bottom: 1px solid #333; padding-bottom: 5px;'>Expériences Professionnelles</h5>";
    
    const experienceEntries = formselected.querySelectorAll('.experience-entry');
    experienceEntries.forEach((entry) => {
        const id = entry.id.replace('experience_entry_', '');

        const expJobTitle = formData.get(`job_title[${id}]`) || 'Intitulé du poste';
        const expCompany = formData.get(`company[${id}]`) || 'Entreprise';
        const expStartDate = formData.get(`start_date[${id}]`) || '';
        const expEndDate = formData.get(`end_date[${id}]`) || 'Présent';
        const expDescription = formData.get(`job_description[${id}]`) || '';

        const expHTMLexperience = `
        <table style="width: 100%; margin-bottom: 15px; table-layout: fixed; border-collapse: collapse;">
            <tr>
                <td style="vertical-align: top;">
                    <div style="font-weight: bold; text-transform: uppercase; font-size: 11pt;">${expJobTitle}</div>
                    <div style="color: #007bff; font-weight: bold;">${expCompany}</div>
                    <div style="color: #666; font-size: 9pt; margin-bottom: 5px;">${expStartDate} - ${expEndDate}</div>
                    <div style="white-space: pre-wrap; font-size: 10pt;">${expDescription}</div>
                </td>
            </tr>
        </table>
        `;
        previewExperiences.insertAdjacentHTML('beforeend', expHTMLexperience);
    });
    //#endregion
    //#region Formations
    const previewFormations = document.getElementById("preview_formations");
    previewFormations.innerHTML = "<h5 style='border-bottom: 1px solid #333; padding-bottom: 5px;'>Formations</h5>";
    const formationEntries = formselected.querySelectorAll('.formation-entry');
    formationEntries.forEach((entry) => {
        const id = entry.id.replace('formation_entry_', '');
        const formFormationTitle = formData.get(`formation_title[${id}]`) || 'Intitulé de la formation';
        const formSchool = formData.get(`school[${id}]`) || 'Établissement';
        const formStartDate = formData.get(`start_date[${id}]`) || '';
        const formEndDate = formData.get(`end_date[${id}]`) || 'Présent';
        const formDescription = formData.get(`description[${id}]`) || '';

        const expHTMLformation = `
        <table style="width: 100%; margin-bottom: 15px; table-layout: fixed; border-collapse: collapse;">
            <tr>
                <td style="vertical-align: top;">
                    <div style="font-weight: bold; text-transform: uppercase; font-size: 11pt;">${formFormationTitle}</div>
                    <div style="color: #007bff; font-weight: bold;">${formSchool}</div>
                    <div style="color: #666; font-size: 9pt; margin-bottom: 5px;">${formStartDate} - ${formEndDate}</div>
                    <div style="white-space: pre-wrap; font-size: 10pt;">${formDescription}</div>
                </td>
            </tr>
        </table>
        `;
        previewFormations.insertAdjacentHTML('beforeend', expHTMLformation);
    });
    //#endregion
    //#region Skills
    const previewSkills = document.getElementById("preview_skills");
    previewSkills.innerHTML = "<h5 style='border-bottom: 1px solid #333; padding-bottom: 5px;'>Compétences</h5>";
    
    const skillEntries = formselected.querySelectorAll('.skill-entry');
    skillEntries.forEach((entry) => {
        const id = entry.id.replace('skill_entry_', '');
        const skillName = formData.get(`skill_name[${id}]`) || 'Compétence';
        const skillLevel = formData.get(`skill_level[${id}]`) || 'Moyen';

        const skillHTML = `
        <table style="width: 100%; margin-bottom: 5px; border-collapse: collapse;">
            <tr>
                <td style="width: 70%; font-size: 10pt;"><strong>${skillName}</strong></td>
                <td style="width: 30%; font-size: 10pt; text-align: right; color: #666;">Niveau: ${skillLevel}</td>
            </tr>
        </table>
        `;
        previewSkills.insertAdjacentHTML('beforeend', skillHTML);
    });
    //#endregion
});
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
         <table id="cv_preview" style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
        ${previewHTML}
        </table>
    </body>
    </html>
    `;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/index.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'blob';
    xhr.onload = function() {
        if (xhr.status === 200) {
            const blob = new Blob([xhr.response], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'cv_generated.pdf';
            link.click();
        } else {
            console.error('Erreur lors de la génération du PDF');
        }
    };
    xhr.send('html_content=' + encodeURIComponent(exportHTML));
}