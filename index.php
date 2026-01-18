<?php

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generateur de CV</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="index.js"></script>
</head>
<body>
    <section class="input_container container-fluid mt-5 ">
        <form action="" method="post" class="row">

            <fieldset class="mb-4">
                <legend>Informations générales</legend>
                <section>
                    <label for="nom" class="form-label">Nom</label>
                    <input type="text" name="nom" id="nom" class="form-control">
                </section>
                <section>
                    <label for="prenom" class="form-label">Prénom</label>
                    <input type="text" name="prenom" id="prenom" class="form-control">
                </section>
                <section>
                    <label for="pro_title" class="form-label">Titre professionnel</label>
                    <input type="text" name="pro_title" id="pro_title" class="form-control">
                </section>
                <section>
                    <label for="mail_adress" class="form-label">Adresse email</label>
                    <input type="email" name="mail_adress" id="mail_adress" class="form-control">
                </section>
                <section>
                    <label for="phone_nbr" class="form-label">Numéro de téléphone</label>
                    <input type="text" name="phone_nbr" id="phone_nbr" class="form-control">
                </section>
                <section>
                    <label for="pro_descripton" class="form-label">Description</label>
                    <textarea type="text" name="pro_descripton" id="pro_descripton" class="form-control"></textarea>
                </section>
            </fieldset>

            <fieldset id="experience_fieldset" class="mb-4">
                <legend>Expériences professionnelles <button class="btn btn-primary mb-4" id="add_experience">+</button></legend>
            </fieldset>
            <fieldset id="formation_fieldset" class="mb-4">
                <legend>Formations <button class="btn btn-primary mb-4" id="add_formation">+</button></legend>
            </fieldset>
            <fieldset id="competence_fieldset" class="mb-4">
                <legend>Compétences <button class="btn btn-primary mb-4" id="add_competence">+</button></legend>
            </fieldset>
            <input type="submit" value="Générer le CV" class="btn btn-primary mb-4">
        </form>
    </section>
    <section class="pre_visualisation_container">
        <h2>Prévisualisation du CV</h2>
    </section>
</body>
</html>