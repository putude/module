<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/carousel.css">
  <title>Carousel</title>
</head>
<body>
  <div class="carousel-container">
    <div class="carousel-slide">
      <?php for($i=1;$i<=5;$i++){?>
         <div class="carousel-content"> <img src="https://picsum.photos/id/<?= $i ?>/600/400" alt="img 1"> <div class="carousel-text">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis commodi aperiam saepe ipsum illo architecto dolorum eaque, expedita aliquid tenetur tempora, perferendis natus deserunt. Expedita maiores alias quidem maxime.</p>
         </div> </div>
        <?php } ?>
    </div>
    <div class="shift left">&#8249;</div>
    <div class="shift right">&#8250;</div>
  </div>
  <script src="./js/Carousel.js"></script>
</body>
</html>