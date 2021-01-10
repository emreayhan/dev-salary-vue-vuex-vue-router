
<template>
  <b-navbar toggleable="lg" type="light" class="navbar-horizantal">
    <b-navbar-brand class="navbar-brand" href="https://devsalary.tk">Developer Salary Survey</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form class="ml-auto">
          <router-link to="/" v-slot="{ href, route, navigate}">
            <li class="nav-item">
              <a class="nav-link nav-link-icon" :href="href" @click="navigate">HOME</a>
            </li>
          </router-link>
          <router-link to="/form" v-slot="{ href, route, navigate }">
            <li class="nav-item">
              <a class="nav-link nav-link-icon"  :href="href" @click="navigate">FORM</a>
            </li>
          </router-link>
          <router-link to="/list" v-slot="{ href, route, navigate }">
            <li class="nav-item">
              <a class="nav-link nav-link-icon"  :href="href" @click="navigate">LIST</a>
            </li>
          </router-link>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.navbar-brand {
  cursor: pointer;
  font-weight: 700;
}
@media only screen and (max-width: 600px) {
  .nav-item {
    margin-top: 2px;
    margin-left: 15px;
  }
}
</style>
