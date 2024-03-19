$(document).ready(function () {
    let response = []
    createModal()
    let button_comms = document.querySelectorAll('#comms')
    let myModal = document.getElementById('myLoginModal')
    let closeModal = document.getElementById('closeLoginModal')
    let path_comms = document.querySelectorAll('#path_comms')
    let input_response = document.getElementById('input_response')
    let button_show_comms = document.querySelectorAll('#show_comms')
    load_comments();
    displayComments(response)
    
    for (let i = 0; i < button_comms.length; i++) {
        button_comms[i].addEventListener('click', function () {
            path_comms[i].setAttribute('stroke', '#1DA1F2')
            let id_response = button_comms[i].className
            input_response.value = id_response
            myModal.classList.remove('hidden');
        })
        
        let comms_already_shown = false
        button_show_comms[i].addEventListener('click', () => {
            let comms_to_show = button_comms[i].getAttribute('class')
            let comms = document.querySelectorAll('#comment' + comms_to_show)
            if (comms_already_shown == false) {
                for (let j = 0; j < comms.length; j++) {
                    comms[j].classList.remove('hidden')
                }
                comms_already_shown = true
            } else {
                for (let j = 0; j < comms.length; j++) {
                    comms[j].classList.add('hidden')
                }
                comms_already_shown = false
            }
        })

        closeModal.addEventListener('click', function () {
            myModal.classList.add('hidden');
            setTimeout(() => {
                path_comms[i].setAttribute('stroke', 'currentColor')
            }, 500);
        });
    }

    function createModal() {
        let main = document.getElementById('tweet')
        const modal = $(`<div id="myLoginModal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div
                        class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Post your comment
                        </h3>
                        <button type="button" id="closeLoginModal"
                            class="end-2.5 text-red-400 bg-transparent hover:bg-gray-200 hover:text-red-400 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="authentication-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5">
                        <form class="space-y-4" method="POST" action="">
                            <div>
                                <label for="comment"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    comment</label>
                                <input type="text" name="comment" id="input_comment"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="What do you think about ?" required />
                                <input type="text" name="id_response" id="input_response" class="hidden"/>
                            </div>
                            <button type="submit"
                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEND</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>`)[0]
        main.appendChild(modal)
    }


    function load_comments() {
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET", "././controller/getComms.php", false)
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
            }
        }
        xhttp.send()
    }

    function displayComments(response) {
        response.forEach(element => {
            if (element[6] != null) {
                const comment = $(`<div id="comment` + element[6] + `" class="flex flex-col hidden">
            <div id="tweet_id_`+ element[6] + `" class="h-auto w-auto p-4 m-4 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white">
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            <div class="flex flex-wrap w-auto items-center">
            <img src="assets/pp_nav.jpg" class="w-12 h-12 rounded-full" alt="Profil's Icon">
            <h1 id="username0" class="flex flex-col font-bold m-2">`+ element[1] + `</h1>
            <span id="atUsername0" class="flex align-start ml-0 text-gray-500">`+ element[2] + `</span>
            <span id="date0" class="flex align-start ml-3 text-gray-500">`+ element[3] + `</span>
            <div class="flex flex-col justify">
            <div class="w-auto px-auto ml-5 mb-2">
            <p id="content">`+ element[4] + `</p>    
            </div>          
            </div>
            </div>
            </div>`)[0]
                document.getElementById('tweet_id_' + element[6]).childNodes[1].appendChild(comment)
            }
        });
    }
})
