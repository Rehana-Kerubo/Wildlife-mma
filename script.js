
  function toggleVideo() {
    const v = document.getElementById('vid');
    const b = document.getElementById('btn');
    if (v.style.display === 'none') {
      v.style.display = 'block';
      v.play();
      b.textContent = 'Hide Video';
    } else {
      v.pause();
      v.style.display = 'none';
      b.textContent = 'Show & Play Video';
    }
  }
