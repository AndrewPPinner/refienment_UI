<template>
    <v-container>
      <h3>{{ roomID }}</h3>
      TESTSTETS
    </v-container>  
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
    data() {
      return {
        roomTitle: "",
        roomID: "",
        loading: false,
      }
    },
    // async mounted() {
    
    // },
    methods: {
      JoinRoom() {
        console.log("Join")
      },
      CreateRoom() {
        console.log("Create")
      }
    }
  })
  </script>
  