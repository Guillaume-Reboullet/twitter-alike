document.addEventListener('DOMContentLoaded', function () {
    let response = []
    function load_atUsername() {
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET", "././controller/atUsername.php", false)
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
            }
        }
        xhttp.send()
    }
    load_atUsername()

    function autocompletion(field, values) {
        field.addEventListener('input', () => {
            let regexAt = /\@(.*?)(\s|$)/g
            let val = field.value.match(regexAt)
            if (val != undefined && val != null) {
                val.forEach(element => {
                    element = element.substr(1)
                    if (document.getElementById('newPost_containerautocomplete-list') != null) {
                        document.getElementById('newPost_containerautocomplete-list').remove()
                        let a = document.createElement("DIV")
                        a.setAttribute("id", field.id + "autocomplete-list")
                        a.setAttribute("class", "autocomplete-items")
                        field.parentNode.appendChild(a)
                        for (i = 0; i < values.length; i++) {
                            if (values[i][0].substr(0, element.length).toLowerCase() == element.toLowerCase()) {
                                let b = document.createElement("DIV")
                                b.innerHTML = "<strong>" + values[i][0].substr(0, element.length) + "</strong>"
                                b.innerHTML += values[i][0].substr(element.length)
                                b.innerHTML += "<input type='hidden' value='" + values[i][0] + "'>"
                                b.addEventListener("click", function () {
                                    let previous_text_length = field.value.length - element.length
                                    field.value = field.value.substr(0, previous_text_length) + this.getElementsByTagName("input")[0].value
                                    closeAllLists()
                                });
                                a.appendChild(b)
                            }
                        }
                    } else {
                        let a = document.createElement("DIV")
                        a.setAttribute("id", field.id + "autocomplete-list")
                        a.setAttribute("class", "autocomplete-items")
                        field.parentNode.appendChild(a)
                        for (i = 0; i < values.length; i++) {
                            if (values[i][0].substr(0, element.length).toLowerCase() == element.toLowerCase()) {
                                let b = document.createElement("DIV")
                                b.innerHTML = "<strong>" + values[i][0].substr(0, element.length) + "</strong>"
                                b.innerHTML += values[i][0].substr(element.length)
                                b.innerHTML += "<input type='hidden' value='" + values[i][0] + "'>"
                                b.addEventListener("click", function () {
                                    let previous_text_length = field.value.length - element.length
                                    field.value = field.value.substr(0, previous_text_length) + this.getElementsByTagName("input")[0].value
                                    closeAllLists()
                                });
                                a.appendChild(b)
                            }
                        }
                    }
                });
            } else {
                if(document.getElementById('newPost_containerautocomplete-list')!=null){
                    document.getElementById('newPost_containerautocomplete-list').remove()
                }
            }
        });
        function closeAllLists() {
            let x = document.querySelectorAll(".autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
        return
    }

    let newPost_container = this.getElementById('newPost_container')
    autocompletion(newPost_container, response);
});