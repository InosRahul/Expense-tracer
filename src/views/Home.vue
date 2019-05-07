<template>
  <div>
    <div class="spinner" v-if="isLoading">
      <img src="../assets/loading.svg" alt="Loading">
    </div>
    <div class="text-center hero" v-if="!isLoading">
      <div v-if="!isAuthenticated">
        <h1 class="mb-4">Login to view Expensess</h1>
        <p class="lead">
          This is a sample application that demonstrates an Expense Manager with authentication flow for an SPA, using
          <a
            href="https://vuejs.org"
          >Vue.js</a> and making a authenticated GraphQL query to
          <a
            href="https://github.com/hasura/graphql-engine"
          >Hasura GraphQL Engine</a>
        </p>
      </div>
      <div v-if="isAuthenticated">
        <h1 class="mb-4">Expenses Done by me</h1>
        <read-expenses/>
        <span>
          <button>
            <router-link to="/addexpenses">ADD</router-link>
          </button>
        </span>
        <span>
          <button>
            <router-link to="/updateexpenses">UPDATE</router-link>
          </button>
        </span>
        <span>
          <button>
            <router-link to="/deleteexpenses">DELETE</router-link>
          </button>
        </span>
        <div class="chart">
          <bar-chart :chartData="chartData" :options="options" :width="200" :height="300"/>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import ReadExpenses from "../components/ReadExpenses.vue";
import graphql2chartjs from "graphql2chartjs";
import BarChart from "../components/BarChart.js";
import { CHART_QUERY } from "../constants/graphql";
export default {
  name: "home",
  components: {
    ReadExpenses,
    BarChart
  },

  methods: {
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.isLoading = false;
    }
  },
  beforeCreate() {
    this.isLoading = true;
  },
  mounted() {
    this.isLoading = false;
  },
  data() {
    return {
      isAuthenticated: false,
      isLoading: true,
      chartData: null,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: true
      }
    };
  },
  apollo: {
    // Simple query that will update the 'article' vue property
    expenses: {
      query: CHART_QUERY,
      result({ data }) {
        const g2c = new graphql2chartjs();
        g2c.add(data, "bar");
        this.chartData = g2c.data;
        this.loaded = true;
        //console.log(g2c.data)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.next-steps {
  .fa-link {
    margin-right: 5px;
  }
}
.spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
span {
  margin: 20px 20px 20px 20px;
  padding: 10px 10px 10px 10px;
}

.chart {
  border-radius: 10px;
  padding-top: 15%;
  margin-top: 10%;
}
</style>
