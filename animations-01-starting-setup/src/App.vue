<template>
  <RouterView v-slot="slotProps">
    <Transition name="route"
      mode="out-in">
      <component :is="slotProps.Component"></component>
    </Transition>
  </RouterView>
</template>


<!-- <div class="container">
    <ListData></ListData>
  </div>
  <div class="container">
    <div class="block"
      :class="{ animate: animatedBlosk }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <Transition name="fade-button"
      mode="out-in">
      <button @click="showUsers"
        v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers"
        v-else>Hide Users</button>
    </Transition>
  </div>
  <base-modal @close="hideDialog"
    :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->

<script>
export default {
  // components: {
  //   ListData
  // },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlosk: false,
      paraIsVisible: false,
      usersAreVisible: false
    };
  },
  methods: {
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlosk = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    }
  },
};
</script>

<style>
@keyframes hehe {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.route-enter-active {
  animation: hehe 1s ease;
}
.route-leave-active {
  animation: hehe 1s ease reverse;
}

/* .route-enter-active,
.route-leave-active {
  transition: opacity 0.35s ease;
}

.route-enter-from,
.route-leave-active {
  opacity: 0;
} */
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

.para-enter-active {
  /* transition: opacity 5s ease, transform 5s ease; */
  animation: slide-fade 5s ease-out;
}

/* .v-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

.para-leave-active {
  /* transition: opacity 5s ease, transform 5s ease; */
  animation: slide-fade 5s ease-out;
}

/* .v-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
.fade-button-leave-active {
  transition: opacity 0.3s ease-in
}
</style>