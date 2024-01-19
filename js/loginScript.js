function showRegistration() {
    document.getElementById("loginForm").style.display = "none";
    
    document.getElementById("registrationSection").style.display = "block";
}

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  //Função que cria as bolas
  function createBall() {
    var ball = document.createElement('div');
    ball.classList.add('ball');
    document.body.appendChild(ball);

    var initialSize = getRandomBetween(1, 5);
    var initialX = getRandomBetween(0, window.innerWidth - initialSize);
    var initialY = getRandomBetween(0, window.innerHeight - initialSize);
    var initialSpeedX = getRandomBetween(-1, 0.5);
    var initialSpeedY = getRandomBetween(-1, 0.5);

    var x = initialX;
    var y = initialY;
    var speedX = initialSpeedX;
    var speedY = initialSpeedY;

    //propriedades dos pontinhos
    ball.style.width = initialSize + 'px';
    ball.style.height = initialSize + 'px';
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    //Função para fazer a bola mexer
    function animate() {
      x += speedX;
      y += speedY;

      if (x + initialSize > window.innerWidth || x < 0) {
        speedX = -speedX;
      }
      if (y + initialSize > window.innerHeight || y < 0) {
        speedY = -speedY;
      }

      ball.style.left = x + 'px';
      ball.style.top = y + 'px';

      requestAnimationFrame(animate);
    }

    animate();
  }

  //Cria o nmr de bolas opretendido
  for (var i = 0; i < 25; i++) {
    createBall();
  }