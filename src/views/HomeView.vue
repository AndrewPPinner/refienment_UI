<template>
  <v-container>
      <v-row no-gutters>
        <v-col>
          <v-sheet class="bg-grey-darken-4 pa-12" rounded>
            <h4 class="text-h5 font-weight-bold mb-4">Join Room</h4>
            <v-card class="mx-auto px-6 py-8" max-width="344">
              <!-- Add validation check that is a number -->
              <v-text-field v-model="roomID"
                label="Room ID"
                clearable type="text">
              </v-text-field>

              <v-text-field v-model="existingCode"
                label="Room Code"
                clearable type="text">
              </v-text-field>

              <br>

              <v-btn
                @click="JoinRoom()"
                :disabled="!roomID || !existingCode"
                color="success"
                size="large"
                variant="elevated"
                block>
                Join
              </v-btn>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-sheet class="bg-grey-darken-4 pa-12" rounded>
            <h4 class="text-h5 font-weight-bold mb-4">Create Room</h4>
            <v-card class="mx-auto px-6 py-8" max-width="344">
              <v-text-field v-model="roomTitle"
                label="Room Title"
                clearable type="text">
              </v-text-field>

              <v-text-field v-model="newCode"
                label="Room Code"
                clearable type="text">
              </v-text-field>

              <br>

              <v-btn
                @click="CreateRoom()"
                :disabled="!roomTitle || !newCode"
                color="success"
                size="large"
                variant="elevated"
                block>
                Create
              </v-btn>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>  
</template>

<script lang="ts">
import router from '@/router';
import RoomService from '@/services/RoomService';
import { defineComponent } from 'vue';


export default defineComponent({
  data() {
    return {
      roomTitle: "",
      newCode: "",
      roomID: "",
      existingCode: "",
      loading: false,
    }
  },
  methods: {
    async JoinRoom() {
      const res = await RoomService.JoinRoom(this.roomID, this.existingCode);
      console.log(res);
      router.push({name: "room"})
    },
    CreateRoom() {
      console.log("Create")
    }
  }
})
</script>
