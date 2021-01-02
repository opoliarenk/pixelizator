const pixelizator = document.getElementById("pixelizate");
const png_d = document.getElementById("png_d");
const jpeg_d = document.getElementById("jpeg_d");
const webp_d = document.getElementById("webp_d");
upload.addEventListener('change', updateImageDisplay);

pixelizator.addEventListener('click', async function () {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    if (fileField.files[0] != null && fileField.files[0].size > 0) {
        const pix_size = document.getElementById("pix_size").value;

        if (pix_size < 0 || pix_size > 2147483647)
            alert("Choose 'Pixel size' from 1 to maximum of your image size");
        else {
            formData.append("file", fileField.files[0]);
            try {
                let response = await fetch('http://localhost:8080/Servlet', {
                    method: 'POST',
                    body: formData,
                    enctype: "multipart/form-data",
                    headers: {'pix_size': pix_size}
                });
                if (response.ok && pix_size > 0) {
                    const json = await response.json();
                    document.getElementById('outputImg').setAttribute("src", "data:image/png;base64," + json.imageForOutput);
                    alert("Pixelization done")
                }
            } catch (error) {
                console.error('wrong response', error);
            }
        }
    }
    else
        alert("You should to choose file")
});

// function setSize(input) {
//     let totalBytes = input.files[0].size;
//     let res;
//
//     if (totalBytes < 1000000)
//         res = `${(totalBytes / 1000).toFixed(2)} KB`;
//     else
//         res = `${(totalBytes / 1000000).toFixed(2)} MB`;
//     size.textContent = `size: ${res}`;
// }

png_d.addEventListener('click', function () {
    download('pixOp.png');
})

jpeg_d.addEventListener('click', function () {
    download('pixOp.jpeg');
})

webp_d.addEventListener('click',  function () {
    download('pixOp.webp');
})

function download(fileName) {
    if (document.getElementById("outputImg").src !== 'http://localhost:8080/pixelizator/') {
        let downloadTag = document.createElement('a');
        downloadTag.setAttribute('download', fileName);
        downloadTag.setAttribute('href', document.getElementById("outputImg").src);
        downloadTag.click();
        downloadTag.remove();
    }
}

function updateImageDisplay(event) {
    document.getElementById('inputImg').src = URL.createObjectURL(event.target.files[0]);
}



