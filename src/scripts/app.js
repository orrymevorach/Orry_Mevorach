const app = {};

app.smoothScroll = function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchorTag => {
    $(anchorTag).on("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};

app.onSubmit = function () {
  $("input[type=submit]").on("click", function () {
    console.log("submit click works");
    $("form").css({ display: "none" });
    $(".footer-text-to-hide").hide();
    $(".footer-text").append(`<h1>Thank You!</h1>`);
    $(".footer-text").append(
      `<p class="footer-email-sent-paragraph">I look forward to chatting with you.</p>`
    );
  });
};

app.hamburgerMenu = function () {
  $(".hamburger-menu").on("click", () => {
    $(".responsive-nav").toggle({ display: "flex" });
    $(".responsive-background").toggle({ display: "block" });
  });
};

app.navLine = function () {
  if ($(document).width() >= 900) {
    $(".section-home .home-link").on("mouseover", () => {
      $(".nav-style-line-home").css({ transform: "rotate(90deg)" });
    });

    $(".section-home .home-link").on("mouseleave", () => {
      $(".nav-style-line-home").css({ transform: "rotate(0deg)" });
    });

    $(".section-home .about-link").on("mouseover", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(90deg)",
        left: "95px",
      });
    });

    $(".section-home .about-link").on("mouseleave", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(0deg)",
        left: "30px",
      });
    });

    $(".section-home .skills-link").on("mouseover", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(90deg)",
        left: "165px",
      });
    });

    $(".section-home .skills-link").on("mouseleave", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(0deg)",
        left: "30px",
      });
    });

    $(".section-home .portfolio-link").on("mouseover", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(90deg)",
        left: "247px",
      });
    });

    $(".section-home .portfolio-link").on("mouseleave", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(0deg)",
        left: "30px",
      });
    });

    $(".section-home .contact-link").on("mouseover", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(90deg)",
        left: "343px",
      });
    });

    $(".section-home .contact-link").on("mouseleave", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(0deg)",
        left: "30px",
      });
    });

    // nav-style-line animation === ABOUT SECTION ===
    $(".section-about .home-link").on("mouseover", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(90deg)",
        left: "35px",
      });
    });

    $(".section-about .home-link").on("mouseleave", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(0deg)",
        left: "95px",
      });
    });

    $(".section-about .about-link").on("mouseover", () => {
      $(".nav-style-line-about").css({ transform: "rotate(90deg)" });
    });

    $(".section-about .about-link").on("mouseleave", () => {
      $(".nav-style-line-about").css({ transform: "rotate(0deg)" });
    });

    $(".section-about .skills-link").on("mouseover", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(90deg)",
        left: "165px",
      });
    });

    $(".section-about .skills-link").on("mouseleave", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(0deg)",
        left: "95px",
      });
    });

    $(".section-about .portfolio-link").on("mouseover", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(90deg)",
        left: "247px",
      });
    });

    $(".section-about .portfolio-link").on("mouseleave", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(0deg)",
        left: "95px",
      });
    });

    $(".section-about .contact-link").on("mouseover", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(90deg)",
        left: "343px",
      });
    });

    $(".section-about .contact-link").on("mouseleave", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(0deg)",
        left: "95px",
      });
    });

    // nav-style-line animation === SKILLS SECTION ===
    $(".section-skills .home-link").on("mouseover", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(90deg)",
        left: "35px",
      });
    });

    $(".section-skills .home-link").on("mouseleave", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(0deg)",
        left: "165px",
      });
    });

    $(".section-skills .about-link").on("mouseover", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(90deg)",
        left: "95px",
      });
    });

    $(".section-skills .about-link").on("mouseleave", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(0deg)",
        left: "165px",
      });
    });

    $(".section-skills .skills-link").on("mouseover", () => {
      $(".nav-style-line-skills").css({ transform: "rotate(90deg)" });
    });

    $(".section-skills .skills-link").on("mouseleave", () => {
      $(".nav-style-line-skills").css({ transform: "rotate(0deg)" });
    });

    $(".section-skills .portfolio-link").on("mouseover", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(90deg)",
        left: "247px",
      });
    });

    $(".section-skills .portfolio-link").on("mouseleave", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(0deg)",
        left: "165px",
      });
    });

    $(".section-skills .contact-link").on("mouseover", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(90deg)",
        left: "343px",
      });
    });

    $(".section-skills .contact-link").on("mouseleave", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(0deg)",
        left: "165px",
      });
    });

    // nav-style-line animation === PORTFOLIO SECTION ===
    $(".section-portfolio .home-link").on("mouseover", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(90deg)",
        left: "35px",
      });
    });

    $(".section-portfolio .home-link").on("mouseleave", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(0deg)",
        left: "247px",
      });
    });

    $(".section-portfolio .about-link").on("mouseover", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(90deg)",
        left: "95px",
      });
    });

    $(".section-portfolio .about-link").on("mouseleave", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(0deg)",
        left: "247px",
      });
    });

    $(".section-portfolio .skills-link").on("mouseover", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(90deg)",
        left: "165px",
      });
    });

    $(".section-portfolio .skills-link").on("mouseleave", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(0deg)",
        left: "247px",
      });
    });

    $(".section-portfolio .portfolio-link").on("mouseover", () => {
      $(".nav-style-line-portfolio").css({ transform: "rotate(90deg)" });
    });

    $(".section-portfolio .portfolio-link").on("mouseleave", () => {
      $(".nav-style-line-portfolio").css({ transform: "rotate(0deg)" });
    });

    $(".section-portfolio .contact-link").on("mouseover", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(90deg)",
        left: "343px",
      });
    });

    $(".section-portfolio .contact-link").on("mouseleave", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(0deg)",
        left: "247px",
      });
    });

    // nav-style-line animation === CONTACT SECTION ===
    $(".section-contact .home-link").on("mouseover", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(90deg)",
        left: "35px",
      });
    });

    $(".section-contact .home-link").on("mouseleave", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(0deg)",
        left: "343px",
      });
    });

    $(".section-contact .about-link").on("mouseover", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(90deg)",
        left: "95px",
      });
    });

    $(".section-contact .about-link").on("mouseleave", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(0deg)",
        left: "343px",
      });
    });

    $(".section-contact .skills-link").on("mouseover", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(90deg)",
        left: "165px",
      });
    });

    $(".section-contact .skills-link").on("mouseleave", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(0deg)",
        left: "343px",
      });
    });

    $(".section-contact .portfolio-link").on("mouseover", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(90deg)",
        left: "247px",
      });
    });

    $(".section-contact .portfolio-link").on("mouseleave", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(0deg)",
        left: "343px",
      });
    });

    $(".section-contact .contact-link").on("mouseover", () => {
      $(".nav-style-line-contact").css({ transform: "rotate(90deg)" });
    });

    $(".section-contact .contact-link").on("mouseleave", () => {
      $(".nav-style-line-contact").css({ transform: "rotate(0deg)" });
    });
  } else if ($(document).width() < 900) {
    // nav-style-line animation === HOME SECTION ===
    $(".section-home .home-link").on("mouseover", () => {
      $(".nav-style-line-home").css({ transform: "rotate(90deg)" });
    });

    $(".section-home .home-link").on("mouseleave", () => {
      $(".nav-style-line-home").css({ transform: "rotate(0deg)" });
    });

    $(".section-home .about-link").on("mouseover", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(90deg)",
        left: "88px",
      });
    });

    $(".section-home .about-link").on("mouseleave", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(0deg)",
        left: "29px",
      });
    });

    $(".section-home .skills-link").on("mouseover", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(90deg)",
        left: "148px",
      });
    });

    $(".section-home .skills-link").on("mouseleave", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(0deg)",
        left: "29px",
      });
    });

    $(".section-home .portfolio-link").on("mouseover", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(90deg)",
        left: "222px",
      });
    });

    $(".section-home .portfolio-link").on("mouseleave", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(0deg)",
        left: "29px",
      });
    });

    $(".section-home .contact-link").on("mouseover", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(90deg)",
        left: "305px",
      });
    });

    $(".section-home .contact-link").on("mouseleave", () => {
      $(".nav-style-line-home").css({
        transform: "rotate(0deg)",
        left: "29px",
      });
    });

    // nav-style-line animation === ABOUT SECTION ===
    $(".section-about .home-link").on("mouseover", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(90deg)",
        left: "29px",
      });
    });

    $(".section-about .home-link").on("mouseleave", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(0deg)",
        left: "88px",
      });
    });

    $(".section-about .about-link").on("mouseover", () => {
      $(".nav-style-line-about").css({ transform: "rotate(90deg)" });
    });

    $(".section-about .about-link").on("mouseleave", () => {
      $(".nav-style-line-about").css({ transform: "rotate(0deg)" });
    });

    $(".section-about .skills-link").on("mouseover", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(90deg)",
        left: "148px",
      });
    });

    $(".section-about .skills-link").on("mouseleave", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(0deg)",
        left: "88px",
      });
    });

    $(".section-about .portfolio-link").on("mouseover", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(90deg)",
        left: "222px",
      });
    });

    $(".section-about .portfolio-link").on("mouseleave", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(0deg)",
        left: "88px",
      });
    });

    $(".section-about .contact-link").on("mouseover", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(90deg)",
        left: "305px",
      });
    });

    $(".section-about .contact-link").on("mouseleave", () => {
      $(".nav-style-line-about").css({
        transform: "rotate(0deg)",
        left: "88px",
      });
    });

    // nav-style-line animation === SKILLS SECTION ===
    $(".section-skills .home-link").on("mouseover", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(90deg)",
        left: "29px",
      });
    });

    $(".section-skills .home-link").on("mouseleave", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(0deg)",
        left: "148px",
      });
    });

    $(".section-skills .about-link").on("mouseover", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(90deg)",
        left: "88px",
      });
    });

    $(".section-skills .about-link").on("mouseleave", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(0deg)",
        left: "148px",
      });
    });

    $(".section-skills .skills-link").on("mouseover", () => {
      $(".nav-style-line-skills").css({ transform: "rotate(90deg)" });
    });

    $(".section-skills .skills-link").on("mouseleave", () => {
      $(".nav-style-line-skills").css({ transform: "rotate(0deg)" });
    });

    $(".section-skills .portfolio-link").on("mouseover", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(90deg)",
        left: "222px",
      });
    });

    $(".section-skills .portfolio-link").on("mouseleave", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(0deg)",
        left: "148px",
      });
    });

    $(".section-skills .contact-link").on("mouseover", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(90deg)",
        left: "305px",
      });
    });

    $(".section-skills .contact-link").on("mouseleave", () => {
      $(".nav-style-line-skills").css({
        transform: "rotate(0deg)",
        left: "148px",
      });
    });

    // nav-style-line animation === PORTFOLIO SECTION ===
    $(".section-portfolio .home-link").on("mouseover", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(90deg)",
        left: "29px",
      });
    });

    $(".section-portfolio .home-link").on("mouseleave", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(0deg)",
        left: "222px",
      });
    });

    $(".section-portfolio .about-link").on("mouseover", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(90deg)",
        left: "88px",
      });
    });

    $(".section-portfolio .about-link").on("mouseleave", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(0deg)",
        left: "222px",
      });
    });

    $(".section-portfolio .skills-link").on("mouseover", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(90deg)",
        left: "148px",
      });
    });

    $(".section-portfolio .skills-link").on("mouseleave", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(0deg)",
        left: "222px",
      });
    });

    $(".section-portfolio .portfolio-link").on("mouseover", () => {
      $(".nav-style-line-portfolio").css({ transform: "rotate(90deg)" });
    });

    $(".section-portfolio .portfolio-link").on("mouseleave", () => {
      $(".nav-style-line-portfolio").css({ transform: "rotate(0deg)" });
    });

    $(".section-portfolio .contact-link").on("mouseover", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(90deg)",
        left: "305px",
      });
    });

    $(".section-portfolio .contact-link").on("mouseleave", () => {
      $(".nav-style-line-portfolio").css({
        transform: "rotate(0deg)",
        left: "222px",
      });
    });

    // nav-style-line animation === CONTACT SECTION ===
    $(".section-contact .home-link").on("mouseover", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(90deg)",
        left: "29px",
      });
    });

    $(".section-contact .home-link").on("mouseleave", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(0deg)",
        left: "305px",
      });
    });

    $(".section-contact .about-link").on("mouseover", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(90deg)",
        left: "88px",
      });
    });

    $(".section-contact .about-link").on("mouseleave", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(0deg)",
        left: "305px",
      });
    });

    $(".section-contact .skills-link").on("mouseover", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(90deg)",
        left: "148px",
      });
    });

    $(".section-contact .skills-link").on("mouseleave", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(0deg)",
        left: "305px",
      });
    });

    $(".section-contact .portfolio-link").on("mouseover", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(90deg)",
        left: "222px",
      });
    });

    $(".section-contact .portfolio-link").on("mouseleave", () => {
      $(".nav-style-line-contact").css({
        transform: "rotate(0deg)",
        left: "305px",
      });
    });

    $(".section-contact .contact-link").on("mouseover", () => {
      $(".nav-style-line-contact").css({ transform: "rotate(90deg)" });
    });

    $(".section-contact .contact-link").on("mouseleave", () => {
      $(".nav-style-line-contact").css({ transform: "rotate(0deg)" });
    });
  }
};

// if window gets resized, call app.navline function again so that it doesn't look funny
app.resize = function () {
  $(window).resize(function () {
    app.navLine();
  });
};

app.init = function () {
  console.log("hello orry");
  app.smoothScroll();
  app.onSubmit();
  app.hamburgerMenu();
  app.navLine();
  app.resize();
};

$(document).ready(() => {
  app.init();
});
