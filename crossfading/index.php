<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/imageslider.css">
  <title>Slide Test</title>
</head>
<body>
  <!-- <h1>Slide Test</h1> -->
  <slider-container>
    <div class="shift left">&#8249;</div>
    <div class="shift right">&#8250;</div>
    <?php for($i=0;$i<5;$i++){ ?>
    <item>
      <text-pos>
        <text-wrap>
          <h3>Title <?= $i ?></h3>
          <p>No kasd ut et magna ipsum kasd, sed lorem duo et accusam, ea aliquyam erat dolores takimata sed takimata et,.</p>
        </text-wrap>
      </text-pos>
      <img src="https://picsum.photos/id/<?= $i ?>/600/400" alt="img 1">
    </item>
    <?php } ?>
    
  </slider-container>
 <script src="./js/imageslider.js"></script>
</body>
</html>