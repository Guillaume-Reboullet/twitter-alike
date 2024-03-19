document.addEventListener('DOMContentLoaded', function () {
    let searchBtnProfile = document.getElementById('searchBtnProfile');
    let searchBtnHashtag = document.getElementById('searchBtnHashtag');
    let inputProfile = document.getElementById('newPost_container2');
    let inputHashtag = document.getElementById('newPost_container_hashtag2');

    searchBtnProfile.addEventListener('click', function () {
        if (inputProfile.classList.contains('hidden')) {
            inputProfile.classList.remove('hidden');
            inputHashtag.classList.add('hidden');
        }
    });
    searchBtnHashtag.addEventListener('click', function () {
        if (inputHashtag.classList.contains('hidden')) {
            inputHashtag.classList.remove('hidden');
            inputProfile.classList.add('hidden');
        }
    })
});