<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Lightbox</title>
</head>

<body>
    <div class="lbx-gallery">
        <?php for ($i = 10; $i <= 15; $i++) { ?>
            <a class="lbx-item" href="https://picsum.photos/id/<?= $i ?>/800/600"><img src="https://picsum.photos/id/<?= $i ?>/300/200" alt="test"></a>
        <?php } ?>
    </div>
    <script src="js/default.js"></script>
</body>

</html>