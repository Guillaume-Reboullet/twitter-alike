document.addEventListener("DOMContentLoaded", function () {

    EmojiButton(document.querySelector('#emojiButton'), function (emoji) {
        document.querySelector('input').value += emoji;
    });
});
