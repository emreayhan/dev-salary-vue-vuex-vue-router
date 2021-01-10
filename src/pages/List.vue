<template>
  <div class="list">
    <h2 class="list-title">Katılımcılar</h2>
    <b-table
      class="table"
      no-footer-info
      no-sort-reset
      bordered
      small
      responsive
      empty-text="Form bulunamadı"
      show-empty
      :busy="isBusy"
      :fields="fields"
      :items="salaryListItems"
    >
      <template #cell(benefits)="{ value }">
        <div>
          <span>{{ value.toString().split(',').join(', ') }}</span>
        </div>
      </template>
      <template #cell(extraSupport)="{ value }">
        <div>
          <span>{{ value ? 'evet' : 'hayır' }}</span>
        </div>
      </template>
      <template #cell(remoteAllowed)="{ value }">
        <div>
          <span>{{ value ? 'evet' : 'hayır' }}</span>
        </div>
      </template>
      <template #cell(thinksToChangeJob)="{ value }">
        <div>
          <span>{{ value ? 'evet' : 'hayır' }}</span>
        </div>
      </template>
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle" />
          <strong>Yükleniyor...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "List",

  data() {
    return {
      isBusy: false,
      fields: [
        {
          key: "title",
          label: "Unvan",
          class: "text-center",
          tdClass: "p-1",
          sortable: true,
          _type: "string"
        },
        {
          key: "experience",
          label: "Deneyim",
          class: "text-center",
          tdClass: "p-1",
          sortable: true,
          _type: "string"
        },
        {
          key: "companyType",
          label: "Şirket Tipi",
          class: "text-center",
          tdClass: "p-1",
          _type: "string"
        },
        {
          key: "numberOfWorkers",
          label: "Çalışan Sayısı",
          class: "text-center",
          tdClass: "p-1",
          sortable: true,
          _type: "number"
        },
        {
          key: "benefits",
          label: "Yan Haklar",
          class: "text-center",
          tdClass: "p-1"
        },
        {
          key: "city",
          label: "Şehir",
          class: "text-center",
          tdClass: "p-1",
          sortable: true,
          _type: "string"
        },
        {
          key: "extraSupport",
          label: "Ekstra Yardım",
          class: "text-center",
          tdClass: "p-1",
          sortable: true,
          _type: "string"
        },
        {
          key: "remoteAllowed",
          label: "Remote Çalışma",
          class: "text-center",
          tdClass: "p-1",
          sortable: true,
          _type: "string"
        },
        {
          key: "thingsYouKnow",
          label: "Bildikleriniz",
          class: "text-center",
          tdClass: "p-1",
          sortable: true,
          _type: "string"
        },
        {
          key: "salary",
          label: "Maaş",
          class: "text-center",
          tdClass: "p-1",
          sortable: true,
          _type: "number"
        },
        {
          key: "thinksToChangeJob",
          label: "İş Değiştirme Durumu",
          class: "text-center",
          tdClass: "p-1",
          _type: "string"
        },
        {
          key: "happyRate",
          label: "Mutluluk Oranı (1-10)",
          class: "text-center",
          tdClass: "p-1",
          sortable: true,
          _type: "number"
        }
      ]
    };
  },

  async created() {
    try {
      this.isBusy = true;
      await this.getItems();
    } catch (error) {
      await this.$bvToast.toast(`Hata : ${error}`, {
        title: "Hata",
        variant: "error",
        solid: true,
        autoHideDelay: 10
      });
    } finally {
      this.isBusy = false;
    }
  },

  computed: {
    ...mapState(["salaryList"]),

    salaryListItems() {
      return this.salaryList.data;
    }
  },

  methods: {
    ...mapActions(["getItems"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-title {
  margin-top: 60px;
  margin-bottom: 50px;
  line-height: 1.1;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #222;
  font-size: 46px;
}
.table {
  background: #f8f4ea;
  border-radius: 40px;
  letter-spacing: 0.1px;
  font-size: 13.5px;
  font-weight: 500;
}
</style>
