/**
 * @param url 图片绝对路径
 */
export const imageToBase64 = (url: string): Promise<string | Error> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'Anonymous'; //开启img的“跨域”模式
    img.src = url;
    img.onload = function () {
      canvas.height = img.height;
      canvas.width = img.width;
      ctx?.drawImage(img, 0, 0, img.width, img.height); //参数可自定义
      const dataURL = canvas.toDataURL('image/png', 1); //获取Base64编码
      resolve(dataURL);
    };
    img.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    };
  });
};

//  canvas.toDataURL(type, encoderOptions);
//  其中，`type` 参数是可选的，表示输出的图片格式，默认值为 `"image/png"`。其他可选值包括 `"image/jpeg"` 和 `"image/webp"`。
//  `encoderOptions` 参数也是可选的，表示输出图片的质量，取值范围为 0 到 1，仅在输出格式为 `"image/jpeg"` 或 `"image/webp"` 时有效。

// png: 无损压缩图片格式；
// jpeg：有损压缩图片格式；
// webp：既支持无损压缩，也支持有损压缩
