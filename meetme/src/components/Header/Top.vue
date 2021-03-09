<template>
  <div>
    <!--================Header Menu Area =================-->
    <header class="header_area">
      <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container box_1620">
            <Logo></Logo>
            <div
              class="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul class="nav navbar-nav menu_nav ml-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" :to="{ name: 'Home' }"
                    >صفحه اصلی</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'AboutUs' }"
                    >درباره ما</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'Services' }"
                    >سرویس ها</router-link
                  >
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >صفحات</a
                  >
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'PortfolioAll' }"
                        >نمونه کارها</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'Elements' }"
                        >عناصر</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item submenu dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >وبلاگ</a
                  >
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'Blog' }"
                        >وبلاگ</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{ name: 'SingleBlog' }"
                        >جزئیات وبلاگ</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" :to="{ name: 'Contact' }"
                    >تماس با ما</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <!--================Header Menu Area =================-->
  </div>
</template>
<script>
import Logo from "./Logo";
export default {
  name: "Top",
  components: {
    Logo,
  },
};
</script>
<style></style>