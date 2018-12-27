import {MAX_IMAGE_HEIGHT,MAX_IMAGE_QUALITY,MAX_IMAGE_WIDTH} from "../constants/index"
import ImageCompressor from "image-compressor.js"

export const renderUploadImage = (file, name) => {
    return new Promise((resolve, reject) => {
        new ImageCompressor(file, {
            quality: MAX_IMAGE_QUALITY,
            maxWidth: MAX_IMAGE_WIDTH,
            maxHeight: MAX_IMAGE_HEIGHT,
            convertSize: 0,
            success(result) {
                result.name = name+"_img.jpg";
                resolve(result);
            },
            error(e) {
                return reject(e);
            },
        })
    })
}