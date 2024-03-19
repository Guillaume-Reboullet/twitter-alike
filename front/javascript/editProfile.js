document.addEventListener('DOMContentLoaded', function () {
    let editProfile = document.getElementById("editProfile");
    let myProfileModal = document.getElementById("myProfileModal")
    let closeEdit = document.getElementById("closeProfileModal");

    editProfile.addEventListener('click', function () {
        myProfileModal.classList.remove('hidden');
    })

    closeEdit.addEventListener('click', function () {
        myProfileModal.classList.add('hidden');
    })
})