<template>
  <div class="body">
    <ul class="pods">
      <li v-for="podsjetnik in podsjetnici" v-bind:key="podsjetnik">{{ podsjetnik }}</li>
    </ul>
    <form class="card" v-on:submit.prevent="addpodsjetnik">
      <input v-model="podsjetnikText" placeholder="Napiši zadatak">
      <button type="submit">Dodaj podsjetnik</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      podsjetnici: [],
      podsjetnikText: '',
    };
  },
  methods: {
    addpodsjetnik: function () {
      this.podsjetnici = [...this.podsjetnici, this.podsjetnikText];
      localStorage.setItem('podsjetnici', JSON.stringify(this.podsjetnici));
    },
  },
  mounted: function () {
    const existingpodsjetnici = localStorage.getItem('podsjetnici');
    this.podsjetnici = JSON.parse(existingpodsjetnici) || [];
  }
};
</script>
<style>
.pods {
  border-radius: 25px;
    position: relative;
    padding: 25px 15px;
    background-color: #BBDBE6;
    margin: 50px 0;
    height: 200px;
    box-shadow: 0 2px 5px #ccc;
    text-align: center;
    font-size: 1.5rem;
}
.card {
    border-radius: 25px;
    position: relative;
    padding: 25px 15px;
    background-color: #BBDBE6;
    margin: 50px 0;
    height: 200px;
    box-shadow: 0 2px 5px #ccc;
    text-align: left;
  }
ul {
    list-style-type: none;
  }
  input {
    color:black;
    font-family: 'Rajdhani', sans-serif;
    background-color: #ccc;
    border-radius: 25px;
    position: relative;
    padding: 10px 10px;
    margin-left: 1rem;
    font-size: 0.9rem;
  }
  button {
    color:black;
    font-family: 'Rajdhani', sans-serif;
    background-color: #ccc;
    border-radius: 25px;
    position: relative;
    padding: 10px 10px;
    margin-left: 1rem;
    font-size: 0.9rem;
  }
  .body {
    font-family: 'Rajdhani', sans-serif;
    margin: 0 auto;
    padding: 25px;
    max-width: 400px;
    min-width: 400px;
    text-align: center;  
    color: black;
}
</style>
