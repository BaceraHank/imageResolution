import Upscaler from 'upscaler';
import {changeDpiDataUrl} from 'changeDPI';

const uploadImage = document.getElementById('img_upload');
const enhanceButton = document.getElementById('enhanceBtn');

var src = null;
var ori_image_width = 0;
var ori_image_height = 0;

// -------------------------------------------------------- //
// --------------------- Upload Image --------------------- //
// -------------------------------------------------------- //
uploadImage.addEventListener('change', (event) => {
    if(event.target.files.length > 0){
        // display uploaded image
        src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("ori_img");
        preview.src = src;
        preview.style.display = "block";

        // get and display uploaded image resolution
        var ori_img_size = new Image();
        ori_img_size.src = src;
        ori_img_size.onload = function() {
            ori_image_width = this.width;
            ori_image_height = this.height;
            document.getElementById('ori_Resolution').innerHTML = ori_image_width + "x" + ori_image_height;
        };
    }
});

// -------------------------------------------------------- //
// --------------- Enhance image resolution --------------- //
// -------------------------------------------------------- //
enhanceButton.addEventListener('click', (event) => {

  // -------------------------------------------------------- //
  // Machine Learning Model for enhance image resolution      //
  //--------------------------------------------------------- //
  // const MODELS = {                                         //
  //     'div2k/rdn-C3-D10-G64-G064-x2' // x2                 //
  //     'div2k/rdn-C3-D10-G64-G064-x3' // x3                 //
  //     'div2k/rdn-C3-D10-G64-G064-x4' // x4                 //
  //     'idealo/psnr-small'            // x2                 //
  //     'idealo/gans'                  // default x4         //
  // }                                                        //
  // -------------------------------------------------------- //

    const upscaler = new Upscaler({
        // apply above model for different scale
        model: 'div2k/rdn-C3-D10-G64-G064-x2',
    });
    
    // Upscale image
    upscaler.upscale(src).then(upscaledImage => {
        // display result image and print base64 on console.
        res_img.src = upscaledImage;
        console.log(upscaledImage.slice(22));

        // get and display result image resolution and change image dpi
        var res_img_size = new Image();

        res_img_size.src = upscaledImage;
        res_img_size.onload = function() {
            document.getElementById('res_Resolution').innerHTML = this.width + "x" + this.height;
        };
    });
});



// -------------------------------------------------------- //
// ------------- Change Image DPI information ------------- //
// -------------------------------------------------------- //
// --------------- Doesn't work just a note --------------- //
// -------------------------------------------------------- //

// // Upscale image
// upscaler.upscale(src).then(upscaledImage => {
//   // display result image
//   res_img.src = upscaledImage;
//   console.log(upscaledImage.slice(22));

//   // get and display result image resolution and change image dpi
//   var res_img_size = new Image();
  
//   // [canvas] use to change image dpi information
//   var cv = $("#cv").get(0);
//   var ctx = cv.getContext("2d");

//   res_img_size.src = upscaledImage;
//   res_img_size.onload = function() {
//       document.getElementById('res_Resolution').innerHTML = this.width + "x" + this.height;

//       cv.width = this.width;
//       cv.height = this.height;
      
//       ctx.drawImage(res_img_size, 0, 0, this.width, this.height);

//       var dataUrl = cv.toDataURL('image/png', 0.92);
//       var changeddpi = changeDpiDataUrl(dataUrl, 400);

//       // Show result image in base64 format
//       console.log(changeddpi.slice(22));
//   };
// });