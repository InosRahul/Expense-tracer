<template>
  <section class="section">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-centered">Update Expenses</h2>

        <form method="POST" @submit.prevent="signup">
          <div class="field">
            <label class="label">Amount</label>

            <p class="control">
              <input type="number" class="input" v-model="amount">
              <label class="label">Category</label>
              <input type="text" class="input" v-model="category">
              <label class="label">Date</label>
              <input type="date" class="input" v-model="date">
              <label class="label">Expense Name</label>
              <input type="text" class="input" v-model="expense_name">
            </p>
          </div>

          <p class="control">
            <button class="button is-primary is-fullwidth is-uppercase">Update Expenses</button>
          </p>
        </form>
      </div>
    </div>
    <read-expenses/>
  </section>
</template>

<script>
import { UPDATE_EXPENSES } from "../constants/graphql";
import ReadExpenses from "../components/ReadExpenses.vue";
export default {
  name: "UpdateExpenses",
  components: {
    ReadExpenses
  },
  data() {
    return {
      date: "",
      amount: null,
      expense_name: "",
      category: ""
    };
  },
  methods: {
    signup() {
      this.$apollo.mutate({
        mutation: UPDATE_EXPENSES,
        variables: {
          amount: this.amount,
          date: this.date,
          category: this.category,
          expense_name: this.expense_name
        }
      });
    }
  }
};
</script>

<style>
</style>
