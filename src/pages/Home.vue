<template>
  <div class="home">
    <div class="purpose-section">
      <h2 class="purpose-section-title">Amaç</h2>
      <div class="purpose-section-body">
        Bu proje yazılımcıların bilgi, birikim ve tecrübelerine göre maaş analizlerinin yapılması,
        bizlerin memnuniyeti ve şirketlerimizin durumunu ölçmek için yapılmıştır.
      </div>
    </div>

    <div class="purpose-section-links">
      <div>
        <router-link to="/form" v-slot="{href, route, navigate}">
          <li class="purpose-section-list">
            <a
              :href="href"
              @click="navigate"
            >Developer Salary 2020 anketini doldurmak için tıklayınız!</a>
          </li>
        </router-link>

        <router-link to="/list" v-slot="{href, route, navigate}">
          <li class="purpose-section-list">
            <a :href="href" @click="navigate">Listeyi görmek için tıklayınız!</a>
          </li>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.purpose-section {
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
}
.purpose-section-title {
  margin-top: 60px;
  margin-bottom: 50px;
  line-height: 1.1;
  letter-spacing: .5px;
  font-weight: 500;
  color: #222;
  font-size: 46px;
}
.purpose-section-body {
  margin-bottom: 80px;
}
.purpose-section-links {
  background:#fceaec;
  border-radius: 60px;
  padding: 200px;
}
@media only screen and (max-width: 600px) {
  .purpose-section-links {
    padding: 100px;
  }
}
.purpose-section-list {
  list-style-type: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 3;
}
@media only screen and (max-width: 600px) {
  .purpose-section-list  {
    font-size: 18px;
    line-height: 1.9;
    margin-bottom: 18px;
  }
}
.purpose-section-list a {
  color: #f57380;
  font-size: 1.2em;
}
.purpose-section-list a:hover {
  text-decoration: none;
  color: #f55e6e;
}
</style>
