// site.js

function showImage(imageUrl, imageElement) {
    imageElement.src = imageUrl;
  }
  
  var gallery1 = document.querySelector('.gallery1 img');
  gallery1.addEventListener('click', function() {
    showImage('https://img.freepik.com/premium-photo/miniature-people-cycling-sushi-mountain_9273-306.jpg?w=826', gallery1);
  });
  
  var gallery2 = document.querySelector('.gallery2 img');
  gallery2.addEventListener('click', function() {
    showImage('https://img.freepik.com/free-photo/side-view-california-roll-with-crab-meat-cucumber-tobiko-caviar-ginger-soy-sauce-board_141793-4797.jpg?w=900&t=st=1682539282~exp=1682539882~hmac=c4c800457c8375947db2c72041ba936ef7276d729f7c00494d27e77f8630d073', gallery2);
  });
  

  