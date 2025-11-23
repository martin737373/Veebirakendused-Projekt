import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-09-29",
        avatar:
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
        image:
          "https://www.treehugger.com/thmb/8prXW_VPkoaoGFuWVup1CdPwt3k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-604576095-235a5fa8df3c476dadba5290ab6c33e0.jpg",
        text: "Exploring the beauty of Sequoia National Park was an unforgettable experience. The trees make you feel both small and inspired.",
        likes: 0,
      },
      {
        id: 2,
        author: "Jane Doe",
        date: "2025-09-30",
        avatar:
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
        image: "",
        text: "Finally started my journey into web development! Excited to learn more about HTML, CSS, and JavaScript.",
        likes: 0,
      },
      {
        id: 3,
        author: "Will Doe",
        date: "2025-10-01",
        avatar:
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
        image: "",
        text: "Coffee, code, and creativity — that's how my day goes when working on front-end design ideas.",
        likes: 0,
      },
      {
        id: 4,
        author: "Brad Doe",
        date: "2025-10-02",
        avatar:
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
        image: "",
        text: "Hiking through nature helps me clear my mind and come up with better solutions for coding problems.",
        likes: 0,
      },
      {
        id: 5,
        author: "Kate Doe",
        date: "2025-10-03",
        avatar:
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
        image: "",
        text: "I love the challenge of transforming plain text into beautiful layouts with CSS.",
        likes: 0,
      },
      {
        id: 6,
        author: "Alex Doe",
        date: "2025-10-04",
        avatar:
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
        image: "",
        text: "Started experimenting with responsive design today. It's fun to make websites look great on any screen size!",
        likes: 0,
      },
      {
        id: 7,
        author: "Lara Doe",
        date: "2025-10-05",
        avatar:
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
        image: "",
        text: "Writing cleaner, more readable code is my main goal this semester.",
        likes: 0,
      },
      {
        id: 8,
        author: "Mia Doe",
        date: "2025-10-06",
        avatar:
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
        image: "",
        text: "Using Git and GitHub in a team project for the first time — version control is a lifesaver!",
        likes: 0,
      },
      {
        id: 9,
        author: "Leo Doe",
        date: "2025-10-07",
        avatar:
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
        image: "",
        text: "Testing different color schemes to make our website more visually appealing.",
        likes: 0,
      },
      {
        id: 10,
        author: "Nina Doe",
        date: "2025-10-08",
        avatar:
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
        image: "",
        text: "Finally got the layout looking just right! Next goal: make it interactive with JavaScript.",
        likes: 0,
      },
    ],
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
