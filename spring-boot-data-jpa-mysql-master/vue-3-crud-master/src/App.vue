<template>
  <div id="app">
    <div class="navbar">
      <a class="logo" href="/">
        <img src="/assets/awesome.png" height="40px">
      </a>
      <ul>
        <li><a href="#">호텔</a></li>
        <li><a href="/memberlist">회원 정보</a></li>
        <li><a href="/signup">회원가입</a></li>
        <li><a href="/login">로그인</a></li>
      </ul>
    </div>


    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>


<script>
export default {
  name: "app"
};
</script>
