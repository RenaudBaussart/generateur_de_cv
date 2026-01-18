addEventListener('DOMContentLoaded', () => {});
const addExperienceButton = document.getElementById('add_experience');
const addFormationButton = document.getElementById('add_formation');
const addCompetenceButton = document.getElementById('add_competence');

addExperienceButton.addEventListener('click', (e) => {
    e.preventDefault();
    const experienceFieldset = document.getElementById('experience_fieldset');
    const newExperience = document.createElement('div');
    newExperience.innerHTML = `
        <div class="mb-3">
            <label class="form-label">Intitulé du poste</label>
            <input type="text" class="form-control" name="job_title[]" required>
        </div>`
    experienceFieldset.appendChild(newExperience);
});