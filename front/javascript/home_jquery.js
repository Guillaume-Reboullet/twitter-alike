$(document).ready(function () {
let nom = $("#Username")
let mail = $("#newEmail")
let jour = $("#jour_naissance")
let mois = $("#mois_naissance")
let annee = $("#annee_naissance")
let mdp = $("#newPassword")
let pseudo = $("#accountName")

function name() {
    let lastnameValue = nom.val()
    if (lastnameValue.length == 0) {
        nom.removeClass("blue")
        nom.addClass("error_css_input")
        return false
    } else if (lastnameValue.length > 50) {
        nom.val(lastnameValue.substring(0, 50))
        nom.removeClass("blue")
        nom.addClass("error_css_input")
        return false
    } else {
        nom.removeClass("error_css_input")
        nom.addClass("blue")
        return true
    }
}

function focus(event) {
    event.data.nom.addClass("blue")
}

function blur(element) {
    element.data.nom.removeClass("blue")
}

nom.on('focus', { nom: nom }, focus)
nom.on('blur', { nom: nom }, blur)
nom.on('input', name)

function email() {
    let emailValue = mail.val()
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailValue)) {
        mail.removeClass("blue")
        mail.addClass("error_css_input")
        return false
    } else {
        mail.removeClass("error_css_input")
        mail.addClass("blue")
        return true
    }
}

mail.on('input', email)
mail.on('focus', { nom: mail }, focus)
mail.on('blur', { nom: mail }, blur)
jour.on('focus', { nom: jour }, focus)
jour.on('blur', { nom: jour }, blur)
mois.on('focus', { nom: mois }, focus)
mois.on('blur', { nom: mois }, blur)
annee.on('focus', { nom: annee }, focus)
annee.on('blur', { nom: annee }, blur)
mdp.on('focus', { nom: mdp }, focus)
mdp.on('blur', { nom: mdp }, blur)
pseudo.on('focus', { nom: pseudo }, focus)
pseudo.on('blur', { nom: pseudo }, blur)  
});