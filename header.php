<?php
  function get_link($path){
	$base_dir = __DIR__;
    $protocol = empty($_SERVER['HTTPS']) ? 'http' : 'https';
    $domain = $_SERVER['SERVER_NAME'];
	$url = "${protocol}://${domain}${path}";
	return $url;
  }
?>
<!DOCTYPE html>

<html lang="fr" class="csstransitions">
  <head>
    <meta charset="utf-8" />

    <title>Un portfolio qui déchire</title>
    <meta name="description" content="Mon super Portfolio" />
    <meta name="author" content="Modulo" />

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet">

    <link rel="stylesheet" href="assets/vendors/photoswipe/photoswipe.css?v=1.0">
    <link rel="stylesheet" href="assets/vendors/photoswipe/default-skin/default-skin.css?v=1.0">

    <link rel="stylesheet" href="assets/css/main.min.css?v=1.0">
  </head>

  <body>
   <header>
       <a class="menu-btn">
          <span class="btn-box">
            <span class="btn-inner"></span>
          </span>
        </a>
       <nav>
        <ul class="menu -flex -flexColumn -flexJustifyCenter -flexAlignEnd">
            <li><a href="<?= get_link('/'); ?>" data-link="transition">Accueil</a></li>
            <li><a href="<?= get_link('/works.php'); ?>" data-link="transition">Works</a></li>
        </ul>
       </nav>
    </header>
    <main>
      <div class="main-content">