<template>
  <div>
    <h2 class="form-title">Formu Doldurun ve Anketimize Katılın</h2>
    <b-row class="form">
      <b-col class="d-flex justify-content-center">
        <b-form @submit.prevent>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group label="Çalıştığınız iş yerindeki ünvanınız?" class="form-label">
                <b-form-select v-model="mySalary.title" :options="titleOptions"></b-form-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group label="Toplam iş tecrübeniz nedir?" class="form-label">
                <b-form-select v-model="mySalary.experience" :options="experienceOptions"></b-form-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group label="Çalıştığım şirket ..." class="form-label">
                <b-form-select v-model="mySalary.companyType" :options="companyTypeOptions"></b-form-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col col="12">
              <b-form-group label="Şirketinizde kaç kişi çalışıyor?" class="form-label">
                <b-form-select v-model="mySalary.numberOfWorkers" :options="numberOfWorkersOptions"></b-form-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group label="Şirketinizin size sunduğu yan haklar?" class="form-label">
                <b-form-checkbox
                  v-model="mySalary.benefits"
                  v-for="option in benefitsOptions"
                  :key="option"
                  :value="option"
                  class="text-left ml-3"
                >{{ option }}</b-form-checkbox>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group
                label="Çalıştığınız iş yeri size ekstra destekler sağlıyor mu?"
                class="form-label"
              >
                <b-form-select v-model="mySalary.extraSupport" :options="yesNoOptions"></b-form-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group
                label="Çalıştığınız iş yeri evden çalışmanıza izin veriyor mu?"
                class="form-label"
              >
                <b-form-select v-model="mySalary.remoteAllowed" :options="yesNoOptions"></b-form-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group
                label="Kullandığınız programlama dilleri veya araçlar"
                class="form-label"
              >
                <b-form-input v-model="mySalary.thingsYouKnow" />
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group label="Hangi şehirde yaşıyorsunuz?" class="form-label">
                <b-form-input v-model="mySalary.city" />
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group label="Aldığınız maaş miktarı? (Net Ücret)" class="form-label">
                <b-form-select v-model="mySalary.salary" :options="salaryOptions"></b-form-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group
                label="Bu şartlar ile iş değişikliği yapmayı düşünüyor musunuz?"
                class="form-label"
              >
                <b-form-select v-model="mySalary.thinksToChangeJob" :options="yesNoOptions"></b-form-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="mb-4">
            <b-col cols="12">
              <b-form-group label="İş yerinizde ne kadar mutlusunuz?" class="form-label">
                <b-form-radio-group
                  v-model="mySalary.happyRate"
                  :options="happyRateOptions"
                  plain
                  name="plain-inline"
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row class="d-flex justify-content-center">
            <button
              :disabled="disableIfOneOfFieldsIsEmpty"
              class="submit-btn"
              @click="submitForm('success')"
            >Gönder</button>
          </b-form-row>
          <div
            class="empty-fields-warning"
            v-if="disableIfOneOfFieldsIsEmpty"
          >Uyarı: Tüm alanları doldurmadan formu gönderemezsiniz...</div>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>




<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";
export default {
  name: "Form",

  data() {
    return {
      mySalary: {
        title: null,
        experience: null,
        companyType: null,
        numberOfWorkers: null,
        benefits: [],
        city: null,
        extraSupport: null,
        remoteAllowed: null,
        thingsYouKnow: null,
        salary: null,
        thinksToChangeJob: null,
        happyRate: null
      }
    };
  },

  created() {
    this.getItems();
  },

  computed: {
    ...mapState(["salaryList"]),
    titleOptions() {
      const options = [
        "Frontend Developer",
        "Backend Developer",
        "Tester",
        "DevOps"
      ];
      return options;
    },
    experienceOptions() {
      const options = ["0-2", "2-4", "4-6", "6-8", "8-10", "10+"];
      return options;
    },
    companyTypeOptions() {
      const options = [
        "Kurumsal",
        "Startup",
        "Dijital / Reklam Ajansı",
        "Outsource",
        "Freelance",
        "Yurtdışı Remote"
      ];
      return options;
    },
    numberOfWorkersOptions() {
      const options = [
        "1-10",
        "10-25",
        "25-50",
        "50-100",
        "100-250",
        "250-500",
        "500-1000",
        "1000+"
      ];
      return options;
    },
    benefitsOptions() {
      const options = [
        "Yemek Kartı",
        "Özel Sağlık Sigortası",
        "Ulaşım Ücreti/Servis",
        "Eğitim Bütçesi",
        "Stock Option",
        "Yurtiçi / Yurtdışı konferanslara katılım bütçesi"
      ];
      return options;
    },
    yesNoOptions() {
      const options = [
        { text: "evet", value: true },
        { text: "hayır", value: false }
      ];
      return options;
    },
    salaryOptions() {
      const options = [
        "2.000 TL - 4.000 TL",
        "4.000 TL - 6.000 TL",
        "6.000 TL - 8.000 TL",
        "8.000 TL - 10.000 TL",
        "10.000 TL - 12.000 TL",
        "12.000 TL - 14.000 TL",
        "14.000 TL - 16.000 TL",
        "16.000 TL - 18.000 TL",
        "18.000 TL - 20.000 TL",
        "20.000 TL - 22.000 TL",
        "22.000+ TL"
      ];
      return options;
    },
    happyRateOptions() {
      const options = [
        { text: "1", value: "1" },
        { text: "2", value: "2" },
        { text: "3", value: "3" },
        { text: "4", value: "4" },
        { text: "5", value: "5" },
        { text: "6", value: "6" },
        { text: "7", value: "7" },
        { text: "8", value: "8" },
        { text: "9", value: "9" },
        { text: "10", value: "10" }
      ];
      return options;
    },
    disableIfOneOfFieldsIsEmpty() {
      return Object.values(this.mySalary).some(
        value => value == null || (Array.isArray(value) && value.length === 0)
      );
    },
    itemsLength() {
      return this.salaryList.data.length;
    }
  },

  methods: {
    ...mapActions(["sendForm", "getItems"]),
    async submitForm() {
      const newSalary = { ...this.mySalary, ID: this.itemsLength + 1 };
      try {
        await this.sendForm(newSalary);

        await this.$bvToast.toast("Form başarılı bir şekilde gönderilmiştir.", {
          title: "Başarılı",
          variant: "success",
          solid: true,
          autoHideDelay: 10
        });
        setTimeout(() => {
          router.push({ name: "List" });
        }, 2000);
      } catch (error) {
        await this.$bvToast.toast("Form gönderilirken bir hata oluştu.", {
          title: "Hata",
          variant: "error",
          solid: true,
          autoHideDelay: 10
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  border: none;
  background-color: #e3e1fa;
  border-radius: 60px;
  padding: 30px;
}

.form-title {
  margin-top: 60px;
  margin-bottom: 50px;
  line-height: 1.1;
  letter-spacing: -1.1px;
  font-weight: 500;
  color: #222;
  font-size: 46px;
}
.form-label {
  letter-spacing: 0.7px;
  font-size: 14px;
  font-weight: 500;
  color: #222;
}
.empty-fields-warning {
  margin-top: 5px;
  letter-spacing: 0.5px;
  font-size: 12px;
  font-weight: 200;
  color: #222;
}
.submit-btn {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  background: #9b59b6;
  border: none;
}
.submit-btn:hover {
  font-size: 18px;
  font-weight: 700;
  color: #e7c5f5;
  padding: 10px 20px;
  border-radius: 10px;
  background: #8b33ad;
  cursor: pointer;
}
.submit-btn:disabled,
.submit-btn[disabled]{
  background-color: #e7c5f5;
  color: #7c7c7c;
}

</style>
