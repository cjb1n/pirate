<template>
  <div>
    <div class="navbar">
      <a class="logo" href="/">
        <img src="https://awesomedev.s3.ap-northeast-2.amazonaws.com/images/awesome.png" >
      </a>
      <ul>
        <li class="font"><a href="/hotel"><b>호텔</b></a></li>
        <li class="font"><a href="/memberlist"><b>회원 정보</b></a></li>
        <li class="font"><a href="/signup"><b>회원가입</b></a></li>
        <li class="font"><a href="/login"><b>로그인</b></a></li>
      </ul>
      </div>
      <hr>
    <div>
      <div class="input-form col-md-12 mx-auto">
        <label for="title">아이디</label>
        <input
          type="text"
          placeholder="Enter your username."
          class="form-control"
          id="title"
          required
          v-model="login.title"
          name="title"
        />

        <div class="mb-4"></div>
        <label for="description">비밀번호</label>
        <input
          class="form-control"
          id="description"
          v-model="login.description"
          name="description"
        />
      <div class="mb-4"></div>
      <button @click="login" class="btn btn-primary btn-lg btn-block">
        로그인
      </button>
      </div>
      <div class="mb-4"></div>
      <footer class="my-3 text-center text-small">
      <p class="mb-1">&copy; 2022 AWeSome</p>
      </footer>
      <div class="col-md-6">

    </div>
    </div>
  </div>

  
</template>


<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorials-list",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
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

    TutorialDataService.findByTitle(this.login.title)

    let tutorials = this.tutorials
        for(let i = 0; i < this.tutorials.length; i++) {
          var tutorialtitle = tutorials[i].title
          console.log(tutorialtitle);
            if (this.login.title == tutorials[i].title && this.login.description == tutorials[i].description ) {
              alert("로그인에 성공하였습니다.")
              location.replace('http://localhost:8081/userlogin');
             }
           else if (this.login.title == tutorials[i].title && this.login.description != tutorials[i].description){
              console.log('')
              alert("아이디 또는 비밀번호를 확인해주세요")
            }
        }
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
     
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>

<style>
    template {
      min-height: 100vh;
      background: -webkit-gradient(linear, left bottom, right top, from(#ffffff), to(#ffffff));
      background: -webkit-linear-gradient(bottom left, #ffffff 0%, #ffffff 100%);
      background: -moz-linear-gradient(bottom left, #ffffff 0%, #ffffff 100%);
      background: -o-linear-gradient(bottom left, #ffffff 0%, #ffffff 100%);
      background: linear-gradient(to top right, #ffffff 0%, #ffffff 100%);
    }
    .input-form {
      max-width: 680px;
      margin-top: 80px;
      padding: 32px;
      background: #fff;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
      box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15)
    }
  body {
    margin: 0;
    min-width: 992px;
    font-family: "Helvetica";
  }
  .navbar{
    height: 60px;
    padding-left: 30px;
  }
  .logo{
    line-height: 60px;
    float: left;
  }
  .logo img{
    vertical-align: middle;
    height: 40px ;
  }
  .navbar li{
    list-style-type: none;
    float: left;
    margin-right: 30px;
  }
  .navbar a{
    text-decoration: none;
    color: black;
    font-style: bold;
    font-size: 13px;
  }
</style>
