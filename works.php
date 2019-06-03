<?php
    include 'header.php';
?>

<section class="grid gridMargin x3">
        <?php 
            for($i=1; $i <= 11; $i++) {
                $imageName = $i < 10 ? '0'. $i : $i;
                $imagePath = "medias/".$imageName.".jpg";
        ?>
                <a href="<?= $imagePath ?>" class="gridItem">
                    <img class="gridImg" src="<?= $imagePath ?>" alt="Alt Image <?= $i; ?>">
                </a>
        <?php
            }
        ?>
</section>

<?php
    include 'footer.php';
?>