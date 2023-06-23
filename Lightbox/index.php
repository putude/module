<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/lightbox.css">
  <title>Lightbox</title>
</head>
<body>
  <h1>Lightbox Simple</h1>
  <div class="lbx-container">
    <?php for($i=10;$i<=15;$i++){?>
      <a class="lbx-item" href="https://picsum.photos/id/<?= $i ?>/800/600"><img src="https://picsum.photos/id/<?= $i ?>/300/200" alt="test"></a>
       <?php } ?>
  </div>

  <script src="js/Lightbox.js"></script>
</body>
</html>