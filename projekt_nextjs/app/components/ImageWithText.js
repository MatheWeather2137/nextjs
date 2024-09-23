// components/ImageWithText.js
function ImageWithText({ imageUrl, text }) {
    return (
        <div><img src={imageUrl} alt={text} style={{ width: '500px', height: '300px' }} /><p>{text}</p></div>  );
    }export default ImageWithText;
    