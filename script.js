window.addEventListener('scroll', function() {
  const profileText = document.querySelector('.animated-profile');
  const position = profileText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (position < screenPosition) {
    profileText.style.opacity = '1';
    profileText.style.transform = 'translateY(0)';
  }
});

document.querySelector('.animated-profile').style.css
