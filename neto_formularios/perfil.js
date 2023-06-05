function previewImage(event) {
  const input = event.target;
  const preview = document.getElementById("imagePreview");

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = document.createElement("img");
      image.src = e.target.result;
      image.alt = "Preview da Imagem";
      image.classList.add("thumbnail");

      preview.innerHTML = "";
      preview.appendChild(image);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.innerHTML = "";
  }
}

 

