<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>

        <link rel="stylesheet" href="./css/app.css">
    </head>
    <body>
        <div class="wrapper">
            <h1>Image Resolution Enhancement</h1>
            <h2>The minimum pixel width and height is 500 x 500. by Refinitive Documentation</h2>
            <h2>Recommend minimum resolution of 600 DPI. (PPI) API return minimum 350 DPI</h2>
            <div class="form-input">
                <label for="img_upload">Upload Image</label>
                <input type="file" id="img_upload" accept="image/*">

                <div class="row">
                    
                    {{-- Original Image --}}
                    <div class="preview">
                        <p>Original Image</p>
                        <p id="ori_Resolution">** resolution **</p>
                        <img id="ori_img">
                    </div>

                    <div>
                        <button id="enhanceBtn">Enhance Resolution</button>
                        <p id="model_used">** used model **</p>
                    </div>
                    
                    {{-- Result Image --}}
                    <div class="result">
                        <p>Result Image</p>
                        <p id="res_Resolution">** resolution **</p>
                        <img id="res_img">
                    </div>
                </div>

                {{-- Use canvas feature to change image dpi (image meta data) --}}
                <canvas id="cv" style="display:none"></canvas>

            </div>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="./js/app.js"></script>
    </body>
</html>
