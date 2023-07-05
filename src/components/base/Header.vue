<template>
  <div class="header">
    <div class="inner">
      <div class="uscgs-title">USCGS</div>
      <div class="space"></div>
      <div class="static-nav">
        <div class="nav-item"><a href="/home">Home</a></div>
        <div class="nav-item"><a href="/about">About</a></div>
        <div class="nav-item"><a href="/poetry">Poetry</a></div>
        <div class="nav-item"><a href="/menu">Menu</a></div>
      </div>
      <div class="dropdown">
        <button class="dropdown-toggle">
          <img src="img/canoe.png" alt="canoe"/>
          <div class="page-name">{{ pageName }}</div>
        </button>
        <div class="dropdown-menu">
          <div class="nav-item"><a href="/home">Home</a></div>
          <div class="nav-item"><a href="/about">About</a></div>
          <div class="nav-item"><a href="/poetry">Poetry</a></div>
          <div class="nav-item"><a href="/menu">Menu</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'USCGSHeader',
  data() {
    return {
      pageName: document.title.slice(7),
    };
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      const dropdowns = document.querySelectorAll('.dropdown');

      // Close dropdowns when clicking outside
      document.addEventListener('click', (event) => {
        dropdowns.forEach((dropdown) => {
          const menu = dropdown.querySelector('.dropdown-menu');

          if (!dropdown.contains(event.target) && !menu.contains(event.target)) {
            dropdown.classList.remove('open');
          }
        });
      });

      // Toggle dropdowns when clicking toggle button
      dropdowns.forEach((dropdown) => {
        const toggleButton = dropdown.querySelector('.dropdown-toggle');
        toggleButton.addEventListener('click', () => {
          dropdown.classList.toggle('open');
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/core.scss";
@import "@/scss/color.scss";

@media (max-width: 700px) {
  .dropdown {
    display: inline-block !important;
  }

  .static-nav {
    display: none !important;
  }
}

.header {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: end;

  margin-top: 15px;

  .inner {
    width: min(1000px, 95%);

    display: flex;
    flex-direction: row;
    align-items: end;
    padding: 0 15px;

    .uscgs-title {
      color: $color-lightbrown-3;
      font-size: 42px;
      line-height: 42px;
      font-weight: 600;
    }

    .dropdown {
      position: relative;
      height: 42px;
      display: none;
    }

    .dropdown-toggle {
      position: relative;
      padding: 0;
      margin: 0;
      background: none;
      border: none;
      height: 42px;
      z-index: 1;

      img {
        height: 42px;
      }

      .page-name {
        position: absolute;
        color: $color-dark-1;
        top: 1px;

        font-size: 22px;
        font-weight: 550;
        line-height: 42px;

        width: 100%;
        text-align: center;
      }
      cursor: pointer;
    }
    .dropdown-menu {
      position: absolute;
      display: none;

      background-color: $color-darkbrown-3;
      border: 2px solid $color-lightbrown-5;
      top: 65%;
      width: 70%;
      padding-top: 10px;
      padding-bottom: 5px;
      border-radius: 5px;

      margin: 0 15%;

      z-index: 0;

      .nav-item {
        width: 100%;
        text-align: center;

        a {
          text-decoration: none;
          color: $color-dark-1;
          font-size: 18px;
        }
      }
    }

    .dropdown.open .dropdown-menu {
      display: block;
    }

    .static-nav {
      font-size: 22px;
      line-height: 22px;
      display: flex;
      flex-direction: row;

      .nav-item {
        margin-left: 25px;
      }

      a {
        color: $color-lightbrown-3;
      }

      a:hover {
        color: $color-lightbrown-5;
      }
    }
  }
}
</style>
