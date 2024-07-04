// Função para alternar entre Português e Inglês
function toggleLanguage(lang) {
    const contentPtBr = document.querySelectorAll('.contentPtBr');
    const contentEnUs = document.querySelectorAll('.contentEnUs');

    const brazilImg = document.getElementById('brazilImg');
    const usaImg = document.getElementById('usaImg');

    const navbar = document.getElementById('navbarEight');
    
    if (lang === 'en-us') {
      contentPtBr.forEach(element => element.style.display = 'none');
      contentEnUs.forEach((element, index) => {
        if (index === 0){
          element.style.display = 'flex';
        }else{
           element.style.display = 'block';
        }
   
      });

      brazilImg.style.display = 'flex';
      usaImg.style.display='none';
      navbar.style.marginRight= '50px';

    } else {
      contentPtBr.forEach((element, index) => {
        if (index === 0) {
          element.style.display = 'flex'; // Primeiro elemento em flex
        } else {
          element.style.display = 'block';
        }
      });
      contentEnUs.forEach(element => element.style.display = 'none');
        
      brazilImg.style.display = 'none';
      usaImg.style.display='flex';
      navbar.style.marginRight= '50px';
    }
  }  