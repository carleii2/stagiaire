stockerimage(){
document.getElementById('imageInput').addEventListener('change', function () {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const base64Image = reader.result;
    localStorage.setItem('myImage', base64Image);
    console.log('Image stockée dans le localStorage');
  };

  reader.readAsDataURL(file); // Convertit en Base64
  const storedImage = localStorage.getItem('myImage');
if (storedImage) {
  const img = document.createElement('img');
  img.src = storedImage;
  document.body.appendChild(img);
}

});
