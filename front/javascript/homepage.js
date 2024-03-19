document.addEventListener('DOMContentLoaded', function () {
    let newPost_container = document.getElementById("newPost_container");
    let newPost_length = document.getElementById("newPost_length");
    let newPost_button = document.getElementById("newPost_button");
    let span = document.getElementById("span");
    const maxNumChars = 140;
    let all_tweet = []
    let number_comments = []
    let number_retweet = []

    load_tweet()
    getNum_comments()
    getNum_retweet()

    function countCharacters() {
        let numOfChars = newPost_container.value.length;
        let count = maxNumChars - numOfChars;
        newPost_length.textContent = count + "/140";
        
        if (count < 0) {
            newPost_length.style.color = "red";
        } else if (count < 20) {
            newPost_length.style.color = "orange";
        } else {
            newPost_length.style.color = "gray";
        }
        if (numOfChars === 0) {
            newPost_button.classList.add("disabled");
        } else if (numOfChars > 140) {
            span.textContent = "Your tweet cannot exceed 140 characters !";
            newPost_button.classList.add("disabled");
        } else {
            newPost_button.classList.remove("disabled");
        }
    };
        newPost_container.addEventListener("keyup", countCharacters);
        
function load_tweet() {
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "././controller/getTweet.php", false)
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            all_tweet = JSON.parse(this.responseText);
            let i = 0
            all_tweet.forEach(element => {
                if (element[6] == null) {
                    createTweet(element, i)
                    i++
                }
            });
        }
    }
    xhttp.send()
}

function getNum_comments() {
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "././controller/getNum_Comms.php", false)
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            number_comments = JSON.parse(this.responseText);
        }
    }
    xhttp.send()
    number_comments.forEach(element => {
        document.getElementById('tweet_id_' + element[0]).childNodes[1].childNodes[13].childNodes[1].childNodes[3].innerHTML = element[1]

    });
}

function getNum_retweet() {
    const xhttp = new XMLHttpRequest()
    xhttp.open("GET", "././controller/getNum_rt.php", false)
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            number_retweet = JSON.parse(this.responseText);
        }
    }
    xhttp.send()
    number_retweet.forEach(element => {
        document.getElementById('tweet_id_' + element[0]).childNodes[1].childNodes[13].childNodes[1].childNodes[7].innerHTML = element[1]

    });
}

function createTweet(element, i) {
    let main = document.getElementById('tweet')
    const tweet = $(`<div class="flex flex-col space-y-4 space-x-4">
        <div id="tweet_id_`+ element[0] + `" class="p-4 m-4 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div class="flex flex-wrap w-auto items-center">
        <img src="assets/pp_nav.jpg" class="w-12 h-12 rounded-full" alt="Profil's Icon">
        <h1 id="username0" class="flex flex-col font-bold m-2">`+ element[1] + `</h1>
        <span class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-900 dark:text-blue-400">
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"/>
        <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"/>
        </svg>
        <span class="sr-only">Icon description</span>
        </span>
        <svg class="flex w-6 h-6 font-bold text-gray-500 m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h0m6 0h0m6 0h0"/>
        </svg>
        
        <div class="flex flex-col justify">
        <div class="flex">
        <span id="atUsername0" class="flex align-start ml-0 text-gray-500">`+ element[2] + `</span>
        <span class="flex align-start ml-3 mb-10 p-2 text-lg text-gray-500 font-bold">.</span>
        <span id="date0" class="flex align-start ml-3 text-gray-500">`+ element[3] + `</span>
        </div>          
        <div class="w-auto px-auto ml-5 mb-2">
        <p id="content`+ i + `"></p>    
        </div>          
        </div>
        <div class="flex justify-center">
        <!-- <img src="" class="rounded-lg" alt="Image d'un tweetos"> -->
        </div>
        
        <div class="w-auto mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
        <ul class="flex mt-4">  
        <li id="comms" class="`+ element[0] + `">
        <svg class="w-6 h-6 text-gray-400 text-sm dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path id="path_comms" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.5h0m-4 0h0m-4 0h0M5 5h14c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1h-6.6a1 1 0 0 0-.7.3L8.8 19c-.3.3-.8 0-.8-.4V17c0-.6-.4-1-1-1H5a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z"/>
        </svg>
        </li>
        <li id="show_comms" class="text-gray-600 font-medium text-sm dark:text-gray-500">0</li>
        <li id="retweet" class="`+ element[0] + `">
        <svg class="w-6 h-6 text-gray-400 text-sm  dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path id="path_retweet" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
        </svg>
        </li>
        <li id="show_rt" class="text-gray-600 font-medium text-sm dark:text-gray-500">0</li>
        <li>
        <svg class="w-6 h-6 text-gray-400 text-sm  dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"/>
        </svg>
        </li>
        <li class="text-gray-600 font-medium text-sm dark:text-gray-500">0</li>
        <li>
        <svg class="w-6 h-6 text-gray-400 text-sm  dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"/>
        <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg>
        </li>
        <li class="text-gray-600 font-medium text-sm dark:text-gray-500">0</li>
        <li>
        <svg class="w-6 h-6 text-gray-400 text-sm dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2m-1-5-4 5-4-5m9 8h0"/>
        </svg>
        </li>
        </ul>
        </div>
        </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">`)[0]
    main.appendChild(tweet)
    appendContent(element, i)
}

function appendContent(element, i) {
    let content_response = element[4]
    let p = document.getElementById('content' + i)
    let regexHashtag = /\#(.*?)(\s|$)/g
    let array_hashtag = content_response.match(regexHashtag)
    p.innerHTML = ""
    if (array_hashtag !== null) {
        array_hashtag.forEach(hashtag => {
            const params = new URLSearchParams({
                hashtag: hashtag.trim(),
            })
            content_response = content_response.replace(hashtag, '<a href="search.php?' + params + '" id="hashtag_link" style="color: skyblue">' + hashtag + '</a> ');
        });
    }
    let regexAt = /\@(.*?)(\s|$)/g
    let array_at = content_response.match(regexAt)
    if (array_at !== null) {
        array_at.forEach(at => {
            const params = new URLSearchParams({
                at: at.trim(),
            })
            content_response = content_response.replace(at, '<a href="profile.php?' + params + '" id="at_username_link" style="color: skyblue">' + at + '</a> ');
        });
    }
    p.innerHTML = content_response
}
});