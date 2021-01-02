<html lang="en">
    <head>
        <title>Pix_OP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Pix_OP</h1>
        <div class="contentImg">
            <img class="img" id="inputImg" src="">
            <img class="img" id="outputImg" src="">
        </div>
        <div id="buttons">
            <input type="file" name="file" id="upload" accept="image/*" width="500" height="600" class="pix_butt" onchange="updateImageDisplay">
            <input type="number" id="pix_size" min="1" max="2147483647">
            <button class="pix_butt" id="pixelizate">Pixelizate</button>
        </div>
        <div id="downloads">
            <p>Download</p>
            <button id="png_d" >png</button>
            <button id="jpeg_d" >jpeg</button>
            <button id="webp_d" >webp</button>
        </div>
        <script src="script.js"></script>
    </body>
</html>