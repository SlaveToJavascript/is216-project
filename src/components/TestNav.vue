<template>
  <!-- Component -->
  <div class="navbar-component">
    <!-- Class `area` is a container -->
    <div class="navbar area">
      <!-- Logo -->
      <a href="#" class="brand">
        <img src="@/assets/images/logo.jpg" alt="STUD" />
      </a>
      <!-- List of links -->
      <nav role="navigation" id="navigation" class="list">
        <a href="#" class="item -link">Home</a>
        <a href="#" class="item -link">Articles</a>
        <a href="#" class="item -link">Projects</a>
        <a href="#" class="item -link">Resources</a>
        <a href="#" class="item -link">About me</a>
      </nav>
      <!-- Button to toggle the display menu  -->
      <button data-collapse data-target="#navigation" class="toggle">
        <!-- Hamburger icon -->
        <span class="icon"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted: function() {
    (function() {
      // Definition of caller element
      var getTriggerElement = function(el) {
        var isCollapse = el.getAttribute("data-collapse");
        if (isCollapse !== null) {
          return el;
        } else {
          var isParentCollapse = el.parentNode.getAttribute("data-collapse");
          return isParentCollapse !== null ? el.parentNode : undefined;
        }
      };

      // A handler for click on toggle button
      var collapseClickHandler = function(event) {
        var triggerEl = getTriggerElement(event.target);
        // If trigger element does not exist
        if (triggerEl === undefined) {
          event.preventDefault();
          return false;
        }

        // If the target element exists
        var targetEl = document.querySelector(
          triggerEl.getAttribute("data-target")
        );
        if (targetEl) {
          triggerEl.classList.toggle("-active");
          targetEl.classList.toggle("-on");
        }
      };

      // Delegated event
      document.addEventListener("click", collapseClickHandler, false);
    })(document, window);
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  -webkit-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
}
.area {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  -webkit-box-align: stretch;
  align-items: stretch;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 768px) {
  .area {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .area {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .area {
    width: 1140px;
  }
}
.navbar-component {
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
}
.navbar-component > .navbar {
  -webkit-box-pack: justify;
  justify-content: space-around;
}
.navbar > .brand {
  display: inline-block;
  width: 6vw;
  color: #777;
  margin: 10px;
}
.navbar > .toggle {
  outline: none;
  border: 0;
  display: inline-block;
  background-color: transparent;
  background-image: none;
  vertical-align: middle;
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 22px;
}
@media (min-width: 768px) {
  .navbar > .toggle {
    display: none;
  }
}
.navbar > .toggle > .icon {
  position: relative;
  margin-top: 8px;
  margin-bottom: 8px;
}
.navbar > .toggle > .icon,
.navbar > .toggle > .icon:before,
.navbar > .toggle > .icon:after {
  display: block;
  width: 24px;
  height: 3px;
  -webkit-transition: background-color 0.3s linear,
    -webkit-transform 0.3s linear;
  transition: background-color 0.3s linear, -webkit-transform 0.3s linear;
  transition: background-color 0.3s linear, transform 0.3s linear;
  transition: background-color 0.3s linear, transform 0.3s linear,
    -webkit-transform 0.3s linear;
  background-color: #555555;
}
.navbar > .toggle > .icon:before,
.navbar > .toggle > .icon:after {
  position: absolute;
  content: "";
}
.navbar > .toggle > .icon:before {
  top: -8px;
}
.navbar > .toggle > .icon:after {
  top: 8px;
}
.navbar > .toggle.-active > .icon {
  background-color: transparent;
}
.navbar > .toggle.-active > .icon:before {
  -webkit-transform: translateY(8px) rotate(45deg);
  transform: translateY(8px) rotate(45deg);
}
.navbar > .toggle.-active > .icon:after {
  -webkit-transform: translateY(-8px) rotate(-45deg);
  transform: translateY(-8px) rotate(-45deg);
}
.navbar > .list {
  display: none;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
}
@media (min-width: 768px) {
  .navbar > .list {
    display: -webkit-box;
    display: flex;
  }
}
@media (max-width: 768px) {
  .navbar > .list {
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    border-top: 1px solid #ddd;
    background-color: #fff;
  }
}
.navbar > .list.-on {
  display: -webkit-box;
  display: flex;
}
.navbar > .list > .item {
  display: block;
  flex-shrink: 0;
  height: 64px;
  line-height: 64px;
  padding-left: 22px;
  padding-right: 22px;
  text-transform: uppercase;
  color: #555;
  font-size: 14px;
}
.navbar > .list > .item.-link {
  line-height: 68px;
  color: #555;
  border-bottom: 4px solid transparent;
}
.navbar > .list > .item.-link.-active,
.navbar > .list > .item.-link:hover,
.navbar > .list > .item.-link:focus {
  color: #333;
  border-bottom-color: #673ab7;
}
</style>
