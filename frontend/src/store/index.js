import { createStore } from "vuex";
import postsData from "../assets/data/posts.json";

// Import posts from JSON
const initializePosts = () => {
  return postsData.record.map((post) => ({
    ...post,
    likes: 0,
  }));
};

export default createStore({
  state: {
    posts: initializePosts(),
  },
  getters: {
    getAllPosts(state) {
      return state.posts;
    },
    getPost: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
  },
  mutations: {
    likePost(state, postId) {
      const post = state.posts.find((p) => p.id === postId);
      if (post) {
        post.likes++;
      }
    },
    resetAllLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
  actions: {
    likePost({ commit }, postId) {
      commit("likePost", postId);
    },
    resetAllLikes({ commit }) {
      commit("resetAllLikes");
    },
  },
  modules: {},
});
