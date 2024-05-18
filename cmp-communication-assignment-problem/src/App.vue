<template>
  <section>
    <active-user :name="this.name"
      :age="this.age"></active-user>
    <user-data @update-info="updateUserInfo"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    updateUserInfo(name, age) {
      this.name = name;
      this.age = age;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: sans-serif;
  background-color: black;
  color: white;
}
label {
  margin-right: 16px
}
input {
  padding: 4px 8px;
}
div+div {
  margin-top: 24px;
}
.inputs {
  margin-top: 36px;
}
.info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 60px;
}
h2,
h3 {
  margin: unset;
}
</style>
