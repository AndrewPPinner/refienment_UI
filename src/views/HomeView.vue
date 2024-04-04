<template>
  <div>
    Work In Progress
    <input type="text"/>
    <button>Join Room</button>

    <br/>

    <button>Create Room</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
