const images = [
    { src: './images/image1.jpg', alt: 'Image 1' },
    { src: './images/image2.jpg', alt: 'Image 2' },
    { src: './images/image3.jpg', alt: 'Image 3' },
    { src: './images/image4.jpg', alt: 'Image 4' },
    { src: './images/image5.jpg', alt: 'Image 5' },
    { src: './images/image6.jpg', alt: 'Image 6' },
    { src: './images/image7.jpg', alt: 'Image 7' },
    { src: './images/image8.jpg', alt: 'Image 8' },
    { src: './images/image9.jpg', alt: 'Image 9' },
    { src: './images/image10.jpg', alt: 'Image 10' },
    { src: './images/image11.jpg', alt: 'Image 11' },
    { src: './images/image12.jpg', alt: 'Image 12' },
    { src: './images/image13.jpg', alt: 'Image 13' },
    { src: './images/image14.jpg', alt: 'Image 14' },
    { src: './images/image15.jpg', alt: 'Image 15' },
    { src: './images/image16.jpg', alt: 'Image 16' },
    { src: './images/image17.jpg', alt: 'Image 17' },
    { src: './images/image18.jpg', alt: 'Image 18' },
    { src: './images/image19.jpg', alt: 'Image 19' },
  ];
  
  let currentImageIndex = 0;
  
  // Generate the gallery dynamically
  const gallery = document.querySelector('.gallery');
  images.forEach((image, index) => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');
    div.innerHTML = `<img src="${image.src}" alt="${image.alt}" onclick="openModal(${index})">`;
    gallery.appendChild(div);
  });
  
  // Open the modal to show the clicked image
  function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modal.style.display = 'block';
    modalImage.src = images[index].src;
    modalImage.alt = images[index].alt;
  }
  
  // Close the modal
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  // Change the displayed image in the modal
  function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    const modalImage = document.getElementById('modal-image');
    modalImage.src = images[currentImageIndex].src;
    modalImage.alt = images[currentImageIndex].alt;
  }
  