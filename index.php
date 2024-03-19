<?php
//Inscription//
include ("./back/connexion.php");
if (isset($_POST["Username"])) {
    $nom = $_POST['Username'];
}
if (isset($_POST["accountName"])) {
    $pseudo = $_POST['accountName'];
}
if (isset($_POST["email"])) {
    $email = $_POST['email'];
    }
if (isset($_POST["password"])) {
    $password = $_POST['password'];
    }
if (isset($_POST["mois_naissance"])) {
    $mois = $_POST['mois_naissance'];
    }
if (isset($_POST["jour_naissance"])) {
    $jour = $_POST['jour_naissance'];
    }
if (isset($_POST["annee_naissance"])) {
    $annee = $_POST['annee_naissance'];
    }

$con = new Connexion('twitter');
if(isset($nom) && isset($pseudo) && isset($email) && isset($password) && isset($mois) && isset($jour) && isset($annee)){
    $con->register($nom, $pseudo, $email, $password, $jour, $mois, $annee);
    $con->logIn($email, $password);
}
if(isset($email) && isset($password)){
    $con->logIn($email, $password);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="front/css/output.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet" />
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="front/css/style.css">
    <script src="front/javascript/home.js"></script>
    <!-- <script src="front/javascript/homepage.js"></script> -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="front/javascript/home_jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
    <title>Twitter</title>
</head>

<body>
    <main class="flex flex-col w-auto h-auto">


        <section class="bg-white dark:bg-gray-900">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="mb-4 text-3xl font-extrabold dark:text-white md:text-5xl lg:text-6xl">This is
                        <span
                            class="text-current text-4xl font-black bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            where things happen.
                    </h1>
                    </span>
                    <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Sign in right now.</p>
                    <button id="accountModal"
                        class="me-2 mb-2 px-5 py-2.5 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button">
                        Create your account
                    </button>

                    <!-- Main modal -->
                    <div id="newAccountModal" tabindex="-1" aria-hidden="true"
                        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                        data-modal-target="newAccountModal">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <!-- Modal content -->
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <!-- Modal header -->
                                <div
                                    class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Sign in to our platform
                                    </h3>
                                    <button type="button" id="closeAccountModal"
                                        class="end-2.5 text-red-400 bg-transparent hover:bg-gray-200 hover:text-red-400 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-hide="newAccountModal">
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
                                            <label for="Username"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                            <input for="Username" name="Username" id="Username"
                                                class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="Lenny" required />
                                        </div>
                                        <div>
                                            <label for="accountName"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account's
                                                name</label>
                                            <input type="accountName" name="accountName" id="accountName"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="@LennyK" required />
                                        </div>
                                        <div>
                                            <label for="email"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                email</label>
                                            <input type="email" name="email" id="newEmail"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <label for="password"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                password</label>
                                            <input type="password" name="password" id="newPassword"
                                                placeholder="••••••••"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                required />
                                        </div>

                                        <div class="row">
                                            <label for="date"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                birthdate</label>
                                        </div>
                                        <div>
                                            <label for="mois_naissance"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Month</label>
                                            <select name="mois_naissance" id="mois_naissance"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white">
                                                <option value="01" name="mois_naissance" id="mois_naissance">January
                                                </option>
                                                <option value="02" name="mois_naissance" id="mois_naissance">February
                                                </option>
                                                <option value="03" name="mois_naissance" id="mois_naissance">March
                                                </option>
                                                <option value="04" name="mois_naissance" id="mois_naissance">April
                                                </option>
                                                <option value="05" name="mois_naissance" id="mois_naissance">May
                                                </option>
                                                <option value="06" name="mois_naissance" id="mois_naissance">June
                                                </option>
                                                <option value="07" name="mois_naissance" id="mois_naissance">July
                                                </option>
                                                <option value="08" name="mois_naissance" id="mois_naissance">August
                                                </option>
                                                <option value="09" name="mois_naissance" id="mois_naissance">September
                                                </option>
                                                <option value="10" name="mois_naissance" id="mois_naissance">October
                                                </option>
                                                <option value="11" name="mois_naissance" id="mois_naissance">November
                                                </option>
                                                <option value="12" name="mois_naissance" id="mois_naissance">December
                                                </option>
                                            </select>
                                            </label>
                                            <!-- </div> -->
                                            <label for="jour_naissance"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Day</label>
                                            <select name="jour_naissance" id="jour_naissance"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white">
                                            </select>
                                            </label>
                                            <!-- </div> -->
                                            <!-- <div> -->
                                            <label for="annee_naissance"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                                            <select name="annee_naissance" id="annee_naissance"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white">
                                            </select>
                                        </div>
                                        <div class="flex justify-between">
                                            <a href="#"
                                                class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                                                Password?</a>
                                        </div>
                                        <button type="submit"
                                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create
                                            your account</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id="loginModal"
                        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button">
                        Login
                    </button>
                    <div id="myLoginModal" tabindex="-1" aria-hidden="true"
                        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <!-- Modal header -->
                                <div
                                    class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        Log in to our platform
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
                                            <label for="email"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                email</label>
                                            <input type="email" name="email" id="loginEmail"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <label for="password"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                password</label>
                                            <input type="password" name="password" id="loginPassword"
                                                placeholder="••••••••"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                required />
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input id="remember" type="checkbox" value=""
                                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                                </div>
                                                <label for="remember"
                                                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                                                    me</label>
                                            </div>
                                            <a href="#"
                                                class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                                                Password?</a>
                                        </div>
                                        <button type="submit"
                                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                                            to your account</button>
                                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">Not
                                            registered? <a href="#"
                                                class="text-blue-700 hover:underline dark:text-blue-500">Create
                                                account</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:mt-0 lg:col-span-5 lg:flex">
                        <svg class="w-auto h-auto dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z" />
                        </svg>
                    </div>
                </div>
        </section>
    </main>
</body>

</html>