<template>
    <v-container>
      <h3>{{ roomID }}</h3>
      <h3>{{ roomTitle }}</h3>
      <v-btn
        color="success"
        size="large"
        variant="elevated"
        block>
        Add Vote
      </v-btn>
    </v-container>  
  </template>
  
  <script lang="ts">
  import store from '@/store';
import { defineComponent } from 'vue';
  
  
  export default defineComponent({
    data() {
      return {
        roomTitle: "",
        roomID: 0,
        loading: false,
      }
    },
    mounted() {
      this.roomID = store.state.currentRoomID;
      this.roomTitle = store.state.currentRoomTitle;
    }
  })
  </script>
  