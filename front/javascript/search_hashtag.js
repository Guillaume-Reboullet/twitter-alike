document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('newPost_container_hashtag')
    let tmp;
    let tmp0;
    let tweet_byHashtag = [];

    input.addEventListener('keyup', () => {
        if(input.value !== ""){
            deleteTweet();
            getAllTweet();
            getTweet_withHashtag();
            getTweet_byHashtag(tmp);
            if(tweet_byHashtag.length > 0 ){
                displayTweet(tweet_byHashtag, tmp0);
            }else{
                deleteTweet();
            }
        }else{
            deleteTweet();
        }
    })
    
    function getAllTweet() {
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET", "././controller/tweet_hashtag.php", false)
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
                tmp0 = response;
            }
        }
        xhttp.send()
    }

    function getTweet_withHashtag() {
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET", "../../controller/getHashtag_list.php", false)
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
                tmp = response;
            }
        }
        xhttp.send()
    }

        function getTweet_byHashtag(tmp) {
            tweet_byHashtag = []
            for (let i = 0; i < tmp.length; i++) {
                if (tmp[i]['hashtag'].trim() == "#"+input.value) {
                    tweet_byHashtag.unshift(tmp[i]['id'])
                }
            }
        }



        function displayTweet(tweet_byHashtag, tmp0) {
            tweet_byHashtag.forEach(element => {
                createTweet(tmp0, element)
            });
        }


        function createTweet(tmp0, element) {
            let main = document.getElementById('tweet')

            let div = document.createElement('div')
            div.setAttribute('class', 'flex flex-col')
            main.appendChild(div)

            let div1 = document.createElement('div')
            div1.setAttribute('class', 'h-auto w-auto p-4 m-4 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white')
            div.appendChild(div1)

            let div2 = document.createElement('div')
            div2.setAttribute('class', 'flex flex-wrap w-auto items-center')
            div1.appendChild(div2)

            let img = document.createElement('img')
            img.setAttribute('src', 'assets/pp_nav.jpg')
            img.setAttribute('class', "w-12 h-12 rounded-full")
            div2.appendChild(img)

            let h1 = document.createElement('h1')
            h1.setAttribute('class', 'flex flex-col font-bold m-2')
            div2.appendChild(h1)

            let span = document.createElement('span')
            span.setAttribute('class', 'inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-900 dark:text-blue-400')
            div2.appendChild(span)

            let svg = document.createElement('svg')
            svg.setAttribute('class', 'w-3 h-3')
            svg.setAttribute('aria-hidden', 'true')
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
            svg.setAttribute('fill', 'currentColor')
            svg.setAttribute('viewBox', '0 0 20 20')
            span.appendChild(svg)

            let path = document.createElement('path')
            path.setAttribute('fill', 'currentColor')
            path.setAttribute('style', 'display:inline-block; width: 25px; height: 25px;')
            path.setAttribute('d', 'm18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z')
            svg.appendChild(path)

            let path1 = document.createElement('path')
            path1.setAttribute('fill', '#fff')
            path1.setAttribute('style', 'display:inline-block; width: 25px; height: 25px;')
            path1.setAttribute('d', 'M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z')
            svg.appendChild(path1)

            let span1 = document.createElement('span')
            span1.setAttribute('class', 'sr-only')
            div2.appendChild(span1)

            let svg1 = document.createElement('svg')
            svg1.setAttribute('class', 'flex w-6 h-6 font-bold text-gray-500 m-2')
            svg1.setAttribute('aria-hidden', 'true')
            svg1.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
            svg1.setAttribute('fill', 'none')
            svg1.setAttribute('viewBox', '0 0 24 24')
            div2.appendChild(svg1)

            let path2 = document.createElement('path')
            path2.setAttribute('stroke', 'currentColor')
            path2.setAttribute('stroke-linecap', 'round')
            path2.setAttribute('stroke-width', '2')
            path2.setAttribute('d', 'M6 12h0m6 0h0m6 0h0')
            svg1.appendChild(path2)

            let div3 = document.createElement('div')
            div3.setAttribute('class', 'flex flex-col justify')
            div2.appendChild(div3)

            let div4 = document.createElement('div')
            div4.setAttribute('class', 'flex')
            div3.appendChild(div4)

            let span2 = document.createElement('span')
            span2.setAttribute('class', 'flex align-start ml-0 text-gray-500')
            div4.appendChild(span2)

            let span3 = document.createElement('span')
            span3.setAttribute('class', 'flex align-start ml-3 mb-10 p-2 text-lg text-gray-500 font-bold')
            div4.appendChild(span3)

            let span4 = document.createElement('span')
            span4.setAttribute('class', 'flex align-start ml-3 text-gray-500')
            div4.appendChild(span4)

            let div5 = document.createElement('div')
            div5.setAttribute('class', 'w-auto px-auto ml-5 mb-2')
            div3.appendChild(div5)

            let p = document.createElement('p')
            div5.appendChild(p)

            let div6 = document.createElement('div')
            div6.setAttribute('class', 'flex justify-center')
            div2.appendChild(div6)

            let img1 = document.createElement('img')
            img1.setAttribute('src', '#')
            img1.setAttribute('class', 'rounded-lg')
            let div7 = document.createElement('div')
            div7.setAttribute('class', 'w-auto mx-auto max-w-screen-xl md:flex md:items-center md:justify-between')
            div2.appendChild(div7)

            let ul = document.createElement('ul')
            ul.setAttribute('class', 'flex mt-4')
            div7.appendChild(ul)

            let li = document.createElement('li')
            ul.appendChild(li)

            let svg2 = document.createElement('svg')
            svg2.setAttribute('class', 'w-6 h-6 text-gray-400 text-sm dark:text-gray-500')
            svg2.setAttribute('aria-hidden', 'true')
            svg2.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
            svg2.setAttribute('fill', 'none')
            svg2.setAttribute('viewBox', '0 0 24 24')
            li.appendChild(svg2)

            let path3 = document.createElement('path')
            path3.setAttribute('stroke', 'currentColor')
            path3.setAttribute('stroke-linecap', 'round')
            path3.setAttribute('stroke-linejoin', 'round')
            path3.setAttribute('stroke-width', '2')
            path3.setAttribute('d', 'M16 10.5h0m-4 0h0m-4 0h0M5 5h14c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1h-6.6a1 1 0 0 0-.7.3L8.8 19c-.3.3-.8 0-.8-.4V17c0-.6-.4-1-1-1H5a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z')
            svg2.appendChild(path3)

            let li1 = document.createElement('li')
            li1.setAttribute('class', 'text-gray-600 font-medium text-sm dark:text-gray-500')
            ul.appendChild(li1)

            let li2 = document.createElement('li')
            ul.appendChild(li2)

            let svg3 = document.createElement('svg')
            svg3.setAttribute('class', 'w-6 h-6 text-gray-400 text-sm dark:text-gray-500')
            svg3.setAttribute('aria-hidden', 'true')
            svg3.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
            svg3.setAttribute('fill', 'none')
            svg3.setAttribute('viewBox', '0 0 24 24')
            li2.appendChild(svg3)

            let path4 = document.createElement('path')
            path4.setAttribute('stroke', 'currentColor')
            path4.setAttribute('stroke-linecap', 'round')
            path4.setAttribute('stroke-linejoin', 'round')
            path4.setAttribute('stroke-width', '2')
            path4.setAttribute('d', 'm16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3')
            svg3.appendChild(path4)

            let li3 = document.createElement('li')
            li3.setAttribute('class', 'text-gray-600 font-medium text-sm dark:text-gray-500')
            ul.appendChild(li3)

            let li4 = document.createElement('li')
            ul.appendChild(li4)

            let svg4 = document.createElement('svg')
            svg4.setAttribute('class', 'w-6 h-6 text-gray-400 text-sm dark:text-gray-500')
            svg4.setAttribute('aria-hidden', 'true')
            svg4.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
            svg4.setAttribute('fill', 'none')
            svg4.setAttribute('viewBox', '0 0 24 24')
            li4.appendChild(svg4)

            let path5 = document.createElement('path')
            path5.setAttribute('stroke', 'currentColor')
            path5.setAttribute('stroke-linecap', 'round')
            path5.setAttribute('stroke-linejoin', 'round')
            path5.setAttribute('stroke-width', '2')
            path5.setAttribute('d', 'M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z')
            svg4.appendChild(path5)

            let li5 = document.createElement('li')
            li5.setAttribute('class', 'text-gray-600 font-medium text-sm dark:text-gray-500')
            ul.appendChild(li5)

            let li6 = document.createElement('li')
            ul.appendChild(li6)

            let svg5 = document.createElement('svg')
            svg5.setAttribute('class', 'w-6 h-6 text-gray-400 text-sm dark:text-gray-500')
            svg5.setAttribute('aria-hidden', 'true')
            svg5.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
            svg5.setAttribute('fill', 'none')
            svg5.setAttribute('viewBox', '0 0 24 24')
            li6.appendChild(svg5)

            let path6 = document.createElement('path')
            path6.setAttribute('stroke', 'currentColor')
            path6.setAttribute('stroke-width', '2')
            path6.setAttribute('d', 'M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z')
            svg5.appendChild(path6)

            let path8 = document.createElement('path')
            path8.setAttribute('stroke', 'currentColor')
            path8.setAttribute('stroke-width', '2')
            path8.setAttribute('d', 'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z')
            svg5.appendChild(path8)

            let li7 = document.createElement('li')
            li7.setAttribute('class', 'text-gray-600 font-medium text-sm dark:text-gray-500')
            ul.appendChild(li7)

            let li8 = document.createElement('li')
            ul.appendChild(li8)

            let svg6 = document.createElement('svg')
            svg6.setAttribute('class', 'w-6 h-6 text-gray-400 text-sm dark:text-gray-500')
            svg6.setAttribute('aria-hidden', 'true')
            svg6.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
            svg6.setAttribute('fill', 'none')
            svg6.setAttribute('viewBox', '0 0 24 24')
            li8.appendChild(svg6)

            let path7 = document.createElement('path')
            path7.setAttribute('stroke', 'currentColor')
            path7.setAttribute('stroke-linecap', 'round')
            path7.setAttribute('stroke-linejoin', 'round')
            path7.setAttribute('stroke-width', '2')
            path7.setAttribute('d', 'M12 13V4M7 14H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2m-1-5-4 5-4-5m9 8h0')
            svg6.appendChild(path7)

            let hr = document.createElement('hr')
            hr.setAttribute('class', 'h-px my-8 bg-gray-200 border-0 dark:bg-gray-700')
            main.appendChild(hr)

            h1.innerHTML = tmp0[element - 1][1]
            span2.innerHTML = tmp0[element - 1][2]
            span4.innerHTML = tmp0[element - 1][3]
            p.innerHTML = tmp0[element - 1][4]
        }

        function deleteTweet(){
            let main = document.getElementById('tweet')
            main.innerHTML = ""
        }
});