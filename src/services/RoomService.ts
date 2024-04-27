import { CreateRoomRequest } from "@/models/CreateRoomRequest";
import { JoinRoomRequest } from "@/models/JoinRoomRequest";
import axios from "axios";
import store from "@/store";

const baseUri = process.env.NODE_ENV === "production" ? "https://andrewp.online/refinement/api/" : "http://localhost:9090/refinement/api/";


class RoomService {
    CreateRoom(request: CreateRoomRequest) {
        return axios.post(`${baseUri}generate_room`, request).then(res => {
            if (res.data.RoomId) {
                store.dispatch("setCurrentRoomID", res.data.RoomId);
                store.dispatch("setRoomCode", request.Password);
            }
            return;
        });
    }

    JoinRoom(roomID : string, code: string) {
        const request = new JoinRoomRequest();
        request.RoomID = roomID;
        request.Password = code;

        return axios.post(`${baseUri}room/join`, request)
        .then(res => {
            store.dispatch("setCurrentRoomID", res.data.Response.ID);
            store.dispatch("setRoomCode", request.Password);
            store.dispatch("setRoomTitle", res.data.Response.Title);
            return res.data.Response;
        })
        .catch(err => {
            store.dispatch("addError", err.message)
            return [];
        });
    }

    LeaveRoom() {
        store.dispatch("setCurrentRoomID", 0);
        store.dispatch("setRoomCode", "");
    }
}

export default new RoomService();