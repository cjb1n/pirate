<template>
  <div class="submit-form">
    <div>
      <div class="form-group">
        <label for="title">아이디</label>
        <input
          type="text"
          placeholder="Enter your username."
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">비밀번호</label>
        <input
          class="form-control"
          id="description"
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <button @click="login" class="btn btn-success">
        로그인
      </button>
    </div>
  </div>
</template>


<script>
import TutorialDataService from "../services/TutorialDataService";


export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      // tutorials: [],
      // currentTutorial: null,
      // currentIndex: -1,
      // title: "",
      // submitted: false
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    login(){
      if (this.tutorial.title == "최정빈") {
        location.replace('http://localhost:8081/memberlist');
      }
      else{
        console.log(this.tutorial.title)
      }
    },
    
    checklogin() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description
      };

      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
     
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
