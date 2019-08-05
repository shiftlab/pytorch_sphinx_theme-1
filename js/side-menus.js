window.sideMenus = {

  bind: function() {
    var rightMenuLinks = document.querySelectorAll("#pytorch-right-menu li");
    var rightMenuHasLinks = rightMenuLinks.length > 1;

    if (rightMenuHasLinks) {
      // Don't show the Shortcuts menu title text unless there are menu items
      document.getElementById("pytorch-shortcuts-wrapper").style.display = "block";
    }

    $(window).on('resize scroll', function(e) {
      sideMenus.handleNavBar();
    });
  },

  leftMenuIsFixed: function() {
    return document.getElementById("pytorch-left-menu").classList.contains("make-fixed");
  },

  handleNavBar: function() {
    var mainHeaderHeight = document.getElementById('header-holder').offsetHeight;
    var rightNavClasses = document.getElementById("pytorch-right-menu").classList;

    // If we are scrolled past the main navigation header fix the sub menu bar to top of page
    if (utilities.scrollTop() >= mainHeaderHeight) {
      document.getElementById("pytorch-left-menu").classList.add("make-fixed");
      document.getElementById("pytorch-page-level-bar").classList.add("left-menu-is-fixed");
      rightNavClasses.add("scrolling-fixed");
    } else {
      document.getElementById("pytorch-left-menu").classList.remove("make-fixed");
      document.getElementById("pytorch-page-level-bar").classList.remove("left-menu-is-fixed");
      rightNavClasses.remove("scrolling-fixed");
    }
  }

  /*expandClosestUnexpandedParentList: function (el) {
    var closestParentList = utilities.closest(el, "ul");

    if (closestParentList) {
      var closestParentLink = closestParentList.previousElementSibling;
      var closestParentLinkExists = closestParentLink &&
                                    closestParentLink.tagName === "A" &&
                                    closestParentLink.classList.contains("reference");

      if (closestParentLinkExists) {
        // Don't add expansion class to any title links
         if (closestParentLink.classList.contains("title-link")) {
           return;
         }

        closestParentList.style.display = "block";
        closestParentLink.classList.remove("not-expanded");
        closestParentLink.classList.add("expanded");
        sideMenus.expandClosestUnexpandedParentList(closestParentLink);
      }
    }
  }, */

  /*handleLeftMenu: function () {
    var windowHeight = utilities.windowHeight();
    var topOfFooterRelativeToWindow = document.getElementById("docs-tutorials-resources").getBoundingClientRect().top;

    if (topOfFooterRelativeToWindow >= windowHeight) {
      document.getElementById("pytorch-left-menu").style.height = "100%";
    } else {
      var howManyPixelsOfTheFooterAreInTheWindow = windowHeight - topOfFooterRelativeToWindow;
      var leftMenuDifference = howManyPixelsOfTheFooterAreInTheWindow;
      document.getElementById("pytorch-left-menu").style.height = (windowHeight - leftMenuDifference) + "px";
    }
  },*/

 /* handleRightMenu: function() {
    var rightMenuWrapper = document.getElementById("pytorch-content-right");
    var rightMenu = document.getElementById("pytorch-right-menu");
    var rightMenuList = rightMenu.getElementsByTagName("ul")[0];
    var article = document.getElementById("pytorch-article");
    var articleHeight = article.offsetHeight;
    var articleBottom = utilities.offset(article).top + articleHeight;
    var mainHeaderHeight = document.getElementById('header-holder').offsetHeight;

    if (utilities.scrollTop() < mainHeaderHeight) {
      rightMenuWrapper.style.height = "100%";
      rightMenu.style.top = 0;
      rightMenu.classList.remove("scrolling-fixed");
      rightMenu.classList.remove("scrolling-absolute");
    } else {
      if (rightMenu.classList.contains("scrolling-fixed")) {
        var rightMenuBottom =
          utilities.offset(rightMenuList).top + rightMenuList.offsetHeight;

        if (rightMenuBottom >= articleBottom) {
          rightMenuWrapper.style.height = articleHeight + mainHeaderHeight + "px";
          rightMenu.style.top = utilities.scrollTop() - mainHeaderHeight + "px";
          rightMenu.classList.add("scrolling-absolute");
          rightMenu.classList.remove("scrolling-fixed");
        }
      } else {
        rightMenuWrapper.style.height = articleHeight + mainHeaderHeight + "px";
        rightMenu.style.top =
          articleBottom - mainHeaderHeight - rightMenuList.offsetHeight + "px";
        rightMenu.classList.add("scrolling-absolute");
      }

      if (utilities.scrollTop() < articleBottom - rightMenuList.offsetHeight) {
        rightMenuWrapper.style.height = "100%";
        rightMenu.style.top = "";
        rightMenu.classList.remove("scrolling-absolute");
        rightMenu.classList.add("scrolling-fixed");
      }
    }

    var rightMenuSideScroll = document.getElementById("pytorch-side-scroll-right");
    var sideScrollFromWindowTop = rightMenuSideScroll.getBoundingClientRect().top;

    rightMenuSideScroll.style.height = utilities.windowHeight() - sideScrollFromWindowTop + "px";
  }*/
};
