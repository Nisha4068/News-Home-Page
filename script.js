document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Add smooth scroll behavior here if needed
    });
  });

  // Add click effects to articles
  const articles = document.querySelectorAll(
    ".sidebar-article h4, .article-content h4"
  );

  articles.forEach((article) => {
    article.addEventListener("click", function () {
      // Add click animation
      this.style.transform = "scale(0.98)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  // CTA Button animation
  const ctaButton = document.querySelector(".cta-button");

  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
      e.preventDefault();

      // Create ripple effect
      const ripple = document.createElement("span");
      ripple.style.position = "relative";
      ripple.style.display = "inline-block";
      ripple.style.width = "100%";
      ripple.style.height = "100%";
      ripple.style.background = "rgba(255, 255, 255, 0.3)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s linear";

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }

  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe featured articles
  const featuredArticles = document.querySelectorAll(".featured-article");
  featuredArticles.forEach((article) => {
    article.style.opacity = "0";
    article.style.transform = "translateY(20px)";
    article.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(article);
  });

  // Add hover effects to navigation
  const navMenu = document.querySelector(".nav-menu");
  if (navMenu) {
    navMenu.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.02)";
    });

    navMenu.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }

  // Add typing effect to hero title (optional)
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = "";

    let i = 0;
    const typeWriter = function () {
      if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };

    // Start typing effect after page load
    setTimeout(typeWriter, 500);
  }
});

// Add CSS animation for ripple effect
const style = document.createElement("style");
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
