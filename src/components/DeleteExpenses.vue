<template>
  <section class="section">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-centered">Delete Expenses</h2>

        <form method="POST" @submit.prevent="signup">
          <div class="field">
            <p class="control">
              <label class="label">Date</label>
              <input type="date" class="input" v-model="date">
            </p>
          </div>

          <p class="control">
            <button class="button is-primary is-fullwidth is-uppercase">Delete Expenses</button>
          </p>
        </form>
      </div>
    </div>
    <read-expenses/>
  </section>
</template>

<script>
import { DELETE_ALL } from "../constants/graphql";
import ReadExpenses from "../components/ReadExpenses.vue";
export default {
  name: "DeleteExpenses",
  components: {
    ReadExpenses
  },
  data() {
    return {
      date: ""
    };
  },
  methods: {
    signup() {
      this.$apollo.mutate({
        mutation: DELETE_ALL,
        variables: {
          date: this.date
        }
      });
    }
  }
};
</script>

<style>
</style>
