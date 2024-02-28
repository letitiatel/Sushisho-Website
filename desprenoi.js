window.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery');
  
    galleryItems.forEach(item => {
      const image = item.querySelector('img');
  
      image.addEventListener('click', () => {
        const newImageUrl = 'https://img.freepik.com/free-photo/professional-chef-wear-black-with-sushi-rolls-restaurant-japanese-traditional-food_627829-6744.jpg?w=826&t=st=1685958055~exp=1685958655~hmac=02b6f0dc3d675e6b2117aa3e013a57d3055dbeef9032320aff24de9192eb016b'; // Înlocuiți 'URL_IMAGINE_NOUA' cu URL-ul imaginii pe care doriți să o afișați în locul celei inițiale
  
        image.src = newImageUrl;
      });
    });
  });
  
  