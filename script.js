document.addEventListener('DOMContentLoaded', function() {
    // Create glitch blocks
    createGlitchBlocks();
    
    // Add advanced glitch effect to title
    setInterval(advancedGlitch, 2000);
    
    // Add RGB split effect
    setInterval(rgbSplit, 100);
    
    // Add digital artifacts
    setInterval(createDigitalArtifact, 300);
    
    // Create energy particles
    setInterval(createEnergyParticle, 100);
  });
  
  // Create glitch blocks for the title
  function createGlitchBlocks() {
    const glitchBlocksContainer = document.querySelector('.glitch-blocks');
    const title = document.querySelector('.cyberpunk-title');
    const titleRect = title.getBoundingClientRect();
    
    // Create 15 glitch blocks (increased from 10)
    for (let i = 0; i < 15; i++) {
      const block = document.createElement('div');
      block.classList.add('glitch-block');
      
      // Style the block
      block.style.position = 'absolute';
      block.style.backgroundColor = 'rgba(0, 255, 255, 0.2)';
      block.style.display = 'none';
      
      // Add to container
      glitchBlocksContainer.appendChild(block);
    }
  }
  
  // Advanced glitch effect - Enhanced
  function advancedGlitch() {
    const title = document.querySelector('.cyberpunk-title');
    const blocks = document.querySelectorAll('.glitch-block');
    const titleRect = title.getBoundingClientRect();
    
    // Show random blocks
    blocks.forEach(block => {
      block.style.display = 'none';
    });
    
    // Determine if we should trigger a major glitch
    const majorGlitch = Math.random() < 0.3;
    
    if (majorGlitch) {
      // Major glitch effect
      title.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) skew(${Math.random() * 5 - 2.5}deg)`;
      title.style.filter = `hue-rotate(${Math.random() * 30}deg) brightness(${1 + Math.random() * 0.5})`;
      
      // Add distortion effect
      if (Math.random() < 0.5) {
        title.style.clipPath = `polygon(
          0 ${Math.random() * 10}%, 
          ${100 - Math.random() * 10}% 0, 
          100% ${Math.random() * 10}%, 
          ${Math.random() * 10}% 100%
        )`;
        
        setTimeout(() => {
          title.style.clipPath = 'none';
        }, 50);
      }
      
      // Show more blocks for major glitch
      const blockCount = Math.floor(Math.random() * 8) + 5;
      for (let i = 0; i < blockCount; i++) {
        if (i < blocks.length) {
          const block = blocks[i];
          block.style.display = 'block';
          block.style.width = `${Math.random() * 100 + 50}px`;
          block.style.height = `${Math.random() * 20 + 5}px`;
          block.style.top = `${Math.random() * titleRect.height}px`;
          block.style.left = `${Math.random() * titleRect.width}px`;
          block.style.backgroundColor = getRandomGlitchColor(0.3);
          block.style.transform = `skew(${Math.random() * 20 - 10}deg)`;
          
          // Add animation to some blocks
          if (Math.random() < 0.3) {
            block.style.animation = `glitch-block-slide ${Math.random() * 0.2 + 0.1}s linear`;
            block.style.animationIterationCount = Math.floor(Math.random() * 3) + 1;
          }
        }
      }
      
      // Add chromatic aberration
      title.style.textShadow = `
        -${Math.random() * 5 + 2}px 0 rgba(255, 0, 0, 0.7), 
        ${Math.random() * 5 + 2}px 0 rgba(0, 255, 255, 0.7), 
        0 0 5px rgba(255, 255, 255, 0.5)
      `;
      
      // Reset after short duration
      setTimeout(() => {
        title.style.transform = 'translate(0, 0)';
        title.style.filter = 'none';
        title.style.textShadow = '0 0 2px rgba(0, 255, 255, 0.5)';
        
        blocks.forEach(block => {
          block.style.display = 'none';
          block.style.animation = 'none';
        });
      }, 150);
    } else {
      // Minor glitch effect
      if (Math.random() < 0.5) {
        title.style.transform = `translate(${Math.random() * 4 - 2}px, 0)`;
        
        setTimeout(() => {
          title.style.transform = 'translate(0, 0)';
        }, 50);
      }
      
      // Show fewer blocks for minor glitch
      if (Math.random() < 0.3) {
        const blockCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < blockCount; i++) {
          const block = blocks[Math.floor(Math.random() * blocks.length)];
          block.style.display = 'block';
          block.style.width = `${Math.random() * 50 + 20}px`;
          block.style.height = `${Math.random() * 10 + 2}px`;
          block.style.top = `${Math.random() * titleRect.height}px`;
          block.style.left = `${Math.random() * titleRect.width}px`;
          block.style.backgroundColor = getRandomGlitchColor(0.2);
          
          setTimeout(() => {
            block.style.display = 'none';
          }, 50);
        }
      }
    }
  }
  
  // Get random glitch color with improved palette
  function getRandomGlitchColor(alpha) {
    const colors = [
      `rgba(0, 255, 255, ${alpha})`,       // Cyan
      `rgba(255, 0, 255, ${alpha})`,       // Magenta
      `rgba(255, 255, 0, ${alpha})`,       // Yellow
      `rgba(0, 255, 0, ${alpha})`,         // Green
      `rgba(255, 0, 128, ${alpha})`,       // Pink
      `rgba(128, 0, 255, ${alpha})`        // Purple
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // RGB split effect - Enhanced
  function rgbSplit() {
    if (Math.random() < 0.08) {
      const title = document.querySelector('.cyberpunk-title');
      const intensity = Math.random() * 8 + 2;
      const redOffset = Math.random() * 5 - 2.5;
      const blueOffset = Math.random() * 5 - 2.5;
      
      title.style.textShadow = `
        ${-intensity + redOffset}px ${redOffset}px rgba(255, 0, 0, 0.7), 
        ${intensity + blueOffset}px ${blueOffset}px rgba(0, 255, 255, 0.7), 
        0 0 5px rgba(255, 255, 255, 0.5)
      `;
      
      // Add a slight distortion
      if (Math.random() < 0.3) {
        title.style.transform = `skew(${Math.random() * 2 - 1}deg, ${Math.random() * 2 - 1}deg)`;
      }
      
      setTimeout(() => {
        title.style.textShadow = '0 0 2px rgba(0, 255, 255, 0.5)';
        title.style.transform = 'skew(0deg, 0deg)';
      }, 100);
    }
  }
  
  // Create random digital artifacts - Enhanced
  function createDigitalArtifact() {
    if (Math.random() < 0.15) {
      const container = document.querySelector('.cyberpunk-container');
      const artifact = document.createElement('div');
      
      artifact.style.position = 'absolute';
      
      // Different types of artifacts
      const artifactType = Math.random();
      
      if (artifactType < 0.3) {
        // Horizontal line
        artifact.style.width = `${Math.random() * 100 + 50}px`;
        artifact.style.height = `${Math.random() * 5 + 1}px`;
      } else if (artifactType < 0.6) {
        // Vertical line
        artifact.style.width = `${Math.random() * 5 + 1}px`;
        artifact.style.height = `${Math.random() * 100 + 20}px`;
      } else if (artifactType < 0.8) {
        // Block
        artifact.style.width = `${Math.random() * 50 + 10}px`;
        artifact.style.height = `${Math.random() * 50 + 10}px`;
      } else {
        // Diagonal line
        artifact.style.width = `${Math.random() * 100 + 30}px`;
        artifact.style.height = `${Math.random() * 3 + 1}px`;
        artifact.style.transform = `rotate(${Math.random() * 180 - 90}deg)`;
      }
      
      artifact.style.top = `${Math.random() * 100}%`;
      artifact.style.left = `${Math.random() * 100}%`;
      artifact.style.backgroundColor = getRandomGlitchColor(Math.random() * 0.3 + 0.3);
      artifact.style.zIndex = '10';
      
      // Add blur to some artifacts
      if (Math.random() < 0.3) {
        artifact.style.filter = `blur(${Math.random() * 2}px)`;
      }
      
      container.appendChild(artifact);
      
      // Remove after short duration
      setTimeout(() => {
        container.removeChild(artifact);
      }, Math.random() * 200 + 50);
    }
  }
  
  // Create energy particles
  function createEnergyParticle() {
    if (Math.random() < 0.3) {
      const container = document.querySelector('.energy-particles');
      const particle = document.createElement('div');
      const title = document.querySelector('.cyberpunk-title');
      const titleRect = title.getBoundingClientRect();
      
      // Position particle near the title
      const posX = titleRect.left + Math.random() * titleRect.width;
      const posY = titleRect.top + Math.random() * titleRect.height;
      
      particle.style.position = 'absolute';
      particle.style.width = `${Math.random() * 4 + 1}px`;
      particle.style.height = `${Math.random() * 4 + 1}px`;
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = getRandomGlitchColor(0.8);
      particle.style.boxShadow = `0 0 ${Math.random() * 5 + 2}px ${getRandomGlitchColor(0.8)}`;
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.zIndex = '5';
      
      // Add animation
      particle.style.animation = `particle-float ${Math.random() * 2 + 1}s ease-out`;
      
      container.appendChild(particle);
      
      // Remove after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 3000);
    }
  }
  
  // Add dynamic style for particle animation
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes particle-float {
      0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translate(${Math.random() * 100 - 50}px, ${-Math.random() * 100 - 20}px) scale(0);
        opacity: 0;
      }
    }
    
    @keyframes glitch-block-slide {
      0% {
        transform: translateX(0) skew(var(--skew, 0deg));
      }
      100% {
        transform: translateX(${Math.random() < 0.5 ? '-' : ''}100%) skew(var(--skew, 0deg));
      }
    }
  `;
  document.head.appendChild(style);
  
  // Add some dynamic color changes to Saturn
  setInterval(() => {
    const saturn = document.querySelector('.saturn');
    
    // Randomly change Saturn's blue hue
    if (Math.random() < 0.2) {
      const blueHue = Math.floor(Math.random() * 40) + 200; // Blue range
      saturn.style.background = `radial-gradient(circle at 30% 30%, hsl(${blueHue}, 90%, 60%), hsl(${blueHue - 10}, 90%, 20%))`;
      saturn.style.boxShadow = `
        0 0 30px hsla(${blueHue}, 90%, 60%, 0.7),
        0 0 60px hsla(${blueHue}, 90%, 60%, 0.4),
        inset 0 0 40px rgba(0, 0, 0, 0.8)
      `;
    }
    
    // Randomly change ring's yellow hue
    if (Math.random() < 0.1) {
      const yellowHue = Math.floor(Math.random() * 20) + 40; // Yellow range
      const saturnRingFront = document.querySelector('.saturn-ring-front');
      const saturnRingBack = document.querySelector('.saturn-ring-back');
      
      const frontGradient = `linear-gradient(to bottom, 
        hsla(${yellowHue}, 100%, 50%, 0.1) 0%,
        hsla(${yellowHue}, 100%, 50%, 0.8) 20%,
        hsla(${yellowHue}, 100%, 50%, 1) 50%,
        hsla(${yellowHue}, 100%, 50%, 0.8) 80%,
        hsla(${yellowHue}, 100%, 50%, 0.1) 100%)`;
        
      const backGradient = `linear-gradient(to bottom, 
        hsla(${yellowHue}, 100%, 50%, 0.1) 0%,
        hsla(${yellowHue}, 100%, 50%, 0.6) 20%,
        hsla(${yellowHue}, 100%, 50%, 0.8) 50%,
        hsla(${yellowHue}, 100%, 50%, 0.6) 80%,
        hsla(${yellowHue}, 100%, 50%, 0.1) 100%)`;
      
      saturnRingFront.style.background = frontGradient;
      saturnRingBack.style.background = backGradient;
      
      saturnRingFront.style.boxShadow = `0 0 20px hsla(${yellowHue}, 100%, 50%, 0.7)`;
      saturnRingBack.style.boxShadow = `0 0 15px hsla(${yellowHue}, 100%, 50%, 0.5)`;
    }
  }, 2000);
  
  // VHS tracking effect
  setInterval(() => {
    if (Math.random() < 0.05) {
      const vhsEffect = document.querySelector('.vhs-effect');
      vhsEffect.style.opacity = '0.7';
      vhsEffect.style.transform = `translateY(${Math.random() * 10 - 5}px)`;
      
      setTimeout(() => {
        vhsEffect.style.opacity = '0.3';
        vhsEffect.style.transform = 'translateY(0)';
      }, 100);
    }
  }, 500);