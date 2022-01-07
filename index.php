<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Jimmy Tzuc</title>
    <link rel="icon" type="image/x-icon" href="assets/img/favicon.png" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <!-- <link href="css/styles.css" rel="stylesheet" /> -->
    <link
      href="https://unpkg.com/tailwindcss@^2.2.16/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <script
      src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
      defer
    ></script>
</head>

<body class="dark:text-white dark:bg-gray-900 ">
  <header>
    <!-- Navigation-->
    <?php
        include 'nav.php';
    ?>
    <!-- Page Content-->
  </header>
  <main class="text-gray-100 bg-gray-700">
    <?php
        include 'body.php';
    ?>
  </main>
  <footer class="flex flex-col items-center p-3 text-gray-100 bg-indigo-900">
    <?php 
        include 'footer.php';
    ?>
  </footer>
</body>
  <!-- Core theme JS-->
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
  <script src="js/scripts.js"></script>
  
</html>
