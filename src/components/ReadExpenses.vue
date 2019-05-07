<template>
  <div>
    <table class="table is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <th>Amount</th>
        <th>Expense Name</th>
        <th>Date</th>
        <th>Category</th>
      </thead>
      <tbody>
        <tr v-for="items in expenses" :key="items.amount">
          <td>{{items.amount}}</td>
          <td>{{items.expense_name}}</td>
          <td>{{items.date}}</td>
          <td>{{items.category}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { READ_EXPENSES } from "../constants/graphql";
export default {
  date() {
    return {
      date: "",
      amount: null,
      category: "",
      expense_name: ""
    };
  },
  apollo: {
    // Simple query that will update the 'article' vue property
    expenses: {
      query: READ_EXPENSES
    }
  }
};
</script>

<style>
</style>
