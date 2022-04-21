<script>
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/counter";
import axios from "axios";
// const url = "http://localhost:3001/"
const url = "https://ichill.herokuapp.com/";
export default {
  data() {
    return {
      email: "",
      amount: "",
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["donation"]),
    async donate() {
      try {
        const { data } = await axios.post(`${url}donation`, {
          email: this.email,
          amount: this.amount,
        });
        console.log(data);
        await snap.pay(data.token);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <!-- Donate Form -->

  <form
    v-on:submit.prevent="donate"
    style="margin-left: 10px; margin-right: 10px; background-color: yellowgreen"
  >
    <div style="display: flex; justify-content: center; margin-top: 10px">
      <p>Donate for us, to keep this app stay live :)</p>
    </div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Email"
        aria-label="Username"
        v-model="email"
      />
      <span class="input-group-text"></span>
      <input
        type="text"
        class="form-control"
        placeholder="Amount"
        aria-label="Server"
        v-model="amount"
      />
      <button type="submit">Make Donation</button>
    </div>
  </form>
</template>
