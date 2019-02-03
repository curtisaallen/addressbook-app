import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        users: [
            {
                id: 1,
                name: "Curtis Allen",
                phone: "(303) 234-5649",
                email: "curtisaallen@mail.com",
                title: "Web Developer"
            },
            {
                id: 2,
                name: "Neil Allen",
                phone: "(303) 234-5649",
                email: "neilallen@mail.com",
                title: "Web Developer"
            },
            {
                id: 3,
                name: "Alex Allen",
                phone: "(303) 234-5649",
                email: "alexallen@mail.com",
                title: "Web Developer"
            },
            {
                id: 4,
                name: "Ryan Allen",
                phone: "(303) 234-5649",
                email: "ryanallen@mail.com",
                title: "Web Developer"
            },
            {
                id: 5,
                name: "Nichola Allen",
                phone: "(303) 234-5649",
                email: "nicholallen@mail.com",
                title: "Web Developer"
            }
        ],
        userDeatils: []
    },
    mutations: {
        setUserDetails(state, id) {
            let user =  state.users.filter(function(item) {
                return item.id == id;
            });
            state.userDeatils = user;
        },
        removeUser(state, id) {
            let user =  state.users.filter((item) => {
                return item.id != id;
            });
            state.users = user;       
        },
        submitUser(state, user) {
           state.users.push(user);
        },
        editUser(state, payload) {
           let editUser = state.users.find((user) => {
            return user.id == payload.id
           })
           editUser.name = payload.name;
           editUser.email = payload.email;
           editUser.phone = payload.phone;
           editUser.title = payload.title;
        }
    },
    actions: {
        getUserDetails({ commit }, userId) {
            commit("setUserDetails", userId); 
        },
        removeUser({ commit }, userId) {
            commit("removeUser", userId); 
        },
        submitUser({ commit }, user) {
            commit("submitUser", user); 
        },
        editUser({ commit }, userId) {
            commit("editUser", userId); 
        }
    }
});