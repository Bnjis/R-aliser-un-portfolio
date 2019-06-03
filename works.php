<?php
    include 'header.php';
?>

<section class="grid gridMargin x3">
        <?php 
            for($i=1; $i <= 11; $i++) {
                $imageName = $i < 10 ? '0'. $i : $i;
                $imagePath = "medias/".$imageName.".jpg";
                $imageInfos = getimagesize($imagePath);
        ?>
                <a href="<?= $imagePath ?>" class="gridItem" data-w="<?= $imageInfos[0]; ?>" data-h="<?= $imageInfos[1]; ?>">
                    <img class="gridImg" src="<?= $imagePath ?>" alt="Alt Image <?= $i; ?>">
                </a>
        <?php
            }
        ?>
</section>

<?php
    include 'footer.php';
?>