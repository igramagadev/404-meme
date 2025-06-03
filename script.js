document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const catEyes = document.querySelectorAll('.eye');
    const errorBox = document.querySelector('.error-box');


    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const numberLeft = document.querySelector('.number-left');
        const numberRight = document.querySelector('.number-right');
        const catContainer = document.querySelector('.cat-container');
        const okakText = document.querySelector('.okak');
        
        const moveXLeft = (mouseX - 0.5) * -30;
        const moveYLeft = (mouseY - 0.5) * -15;
        
        const moveXRight = (mouseX - 0.5) * 30;
        const moveYRight = (mouseY - 0.5) * -15;
        
        const moveCatX = (mouseX - 0.5) * 15;
        const moveCatY = (mouseY - 0.5) * 15;
        
        const moveOkakX = (mouseX - 0.5) * 10;
        const moveOkakY = (mouseY - 0.5) * 10;

        numberLeft.style.transform = `translate(${moveXLeft}px, ${moveYLeft}px)`;
        numberRight.style.transform = `translate(${moveXRight}px, ${moveYRight}px)`;

        catContainer.style.transform = `translateY(var(--float-y, 0px)) translate(${moveCatX}px, ${moveCatY}px)`;
        okakText.style.transform = `scale(var(--pulse-scale, 1)) translate(${moveOkakX}px, ${moveOkakY}px)`;

        const catShadow = document.querySelector('.cat-shadow');
        if (catShadow) {
            const shadowX = (mouseX - 0.5) * -10;
            catShadow.style.transform = `translateX(calc(-50% + ${shadowX}px))`;
        }

        const topLeft = document.querySelector('.top-left');
        const topRight = document.querySelector('.top-right');
        const bottomLeft = document.querySelector('.bottom-left');
        const bottomRight = document.querySelector('.bottom-right');
        
        topLeft.style.transform = `translate(${moveXLeft * 0.3}px, ${moveYLeft * 0.3}px)`;
        topRight.style.transform = `translate(${-moveXLeft * 0.3}px, ${moveYLeft * 0.3}px)`;
        bottomLeft.style.transform = `translate(${moveXLeft * 0.3}px, ${-moveYLeft * 0.3}px)`;
        bottomRight.style.transform = `translate(${-moveXLeft * 0.3}px, ${-moveYLeft * 0.3}px)`;
    });
    
    
    const button = document.querySelector('.btn');
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    

    const catContainer = document.querySelector('.cat-container');
    const okakText = document.querySelector('.okak');

    function updateAnimationVariables() {
        const floatY = Math.sin(Date.now() / 1000) * 10; 
        const pulseScale = 1 + Math.sin(Date.now() / 500) * 0.025; 
        
        catContainer.style.setProperty('--float-y', `${floatY}px`);
        okakText.style.setProperty('--pulse-scale', pulseScale);
        
        requestAnimationFrame(updateAnimationVariables);
    }
    
    updateAnimationVariables();

    setTimeout(() => {
        document.body.classList.add('loaded');

        setInterval(() => {
            const glitchOverlay = document.querySelector('.glitch-overlay');
            if (Math.random() > 0.95) {
                glitchOverlay.style.opacity = '0.2';
                
                setTimeout(() => {
                    glitchOverlay.style.opacity = '0.05';
                }, 100);
            }
        }, 2000);
    }, 300);

    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiPosition = 0;
    
}); 