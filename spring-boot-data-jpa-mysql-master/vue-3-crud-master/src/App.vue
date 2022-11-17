<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">AWeSome</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/memberlist" class="nav-link">내 정보</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">회원가입</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">로그인</router-link>
        </li>
      </div>
    </nav>

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
