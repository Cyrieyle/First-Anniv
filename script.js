const DEFAULT_PASSWORD = 'iloveyou';

document.addEventListener('DOMContentLoaded', ()=>{
  const pwForm = document.getElementById('pwForm');
  if(pwForm){
    pwForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const val = document.getElementById('password').value || '';
      if(val === DEFAULT_PASSWORD){
        localStorage.setItem('unlocked','1');
        location.href = 'surprise.html';
      } else {
        document.getElementById('error').textContent = 'Wrong password. Try again ❤️';
      }
    });
    return;
  }

  // Surprise page logic
  const yesBtn = document.getElementById('yesBtn');
  const notYetBtn = document.getElementById('notYetBtn');
  const readyBtn = document.getElementById('readyBtn');
  const topImage = document.getElementById('topImage');
  const message = document.getElementById('message');

  if(yesBtn && notYetBtn && topImage && message){
    yesBtn.addEventListener('click', ()=> location.href = 'main.html');
    notYetBtn.addEventListener('click', ()=>{
      // change image and message
      topImage.src = 'assets/heart2.svg';
      message.textContent = 'AWWW OKAYYY PO BABYYYY TAKE YOUR TIME PO HEHE';
      document.getElementById('controls').style.display = 'none';
      document.getElementById('waiting').style.display = 'block';
    });
  }

  if(readyBtn){
    readyBtn.addEventListener('click', ()=> location.href = 'main.html');
  }

  // If landing directly on surprise/main without unlocking, redirect to index
  if(location.pathname.endsWith('surprise.html') || location.pathname.endsWith('main.html')){
    if(!localStorage.getItem('unlocked')) location.href = 'index.html';
  }

  // Another Surprise button handler
  const extraBtn = document.getElementById('extraSurprise');
  const modal = document.getElementById('surpriseModal');
  if(extraBtn && modal){
    extraBtn.addEventListener('click', ()=>{
      modal.style.display = 'block';
      setTimeout(()=> modal.style.display = 'none',2500);
    });
  }
});
