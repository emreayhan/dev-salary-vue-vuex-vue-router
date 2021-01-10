<template>
  <div id="app">
    <Header class="mb-4"/>
      <router-view />
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: EuclidCircularB,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1090px;
  margin: 60px auto;
}
</style>
