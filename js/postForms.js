document.getElementById('contactForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a true email.');
      event.preventDefault(); // 阻止表单提交
    }
  });