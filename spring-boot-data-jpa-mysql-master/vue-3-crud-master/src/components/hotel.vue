<template>
    <div>
      <div class="navbar">
      <a class="logo" href="/">
        <img src="https://awesomedev.s3.ap-northeast-2.amazonaws.com/images/awesome.png" >
      </a>
      <ul>
        <li class="font"><a href="#"><b>숙소</b></a></li>
        <li class="font"><a href="/memberlist"><b>회원 정보</b></a></li>
        <li class="font"><a href="/signup"><b>회원가입</b></a></li>
        <li class="font"><a href="/login"><b>로그인</b></a></li>
      </ul>
      </div>
      <hr>
#####################################비로그인 호텔페이지 수정, 회원정보,회원가입##########################################################

          
          <div class="footer">
            <a href="#"><img src="https://awesomedev.s3.ap-northeast-2.amazonaws.com/images/facebook.png"></a>
            <a href="#"><img src="https://awesomedev.s3.ap-northeast-2.amazonaws.com/images/instagram.png"></a>
            <a href="#"><img src="https://awesomedev.s3.ap-northeast-2.amazonaws.com/images/kakao.png"></a>
          </div>
    </div>
</template>
  
  
  <script>
  </script>
  
  <style>
  * {
      box-sizing: border-box;
    }
    template {
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
    .navbar ul{
      float: right;
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
    .hero_header img{
      height: 450px;
      width: 100%;
    }
    body h1{
      text-align: center;
      margin-top: 60px;
      margin-bottom: 60px;
      font-size: 24px;
      font-style: bold;
      color: #545454;
    }
    .products {
      margin-left: auto;
      margin-right: auto;
      padding: 0;
      width: 740px;
      text-align: center;
    }
    .products img{
      width: 225px;
      height: 225px;
      margin-right: 20px;
      margin-bottom: 20px;
    }
    .products a{
      text-decoration: none;
      color: black;
      float: left;
      font-size: 16px;
    }
    .price{
      margin-top: 4px;
      margin-bottom: 80px;
    }
    .clearfix{
      clear: both;
    }
    .footer{
      text-align: center;
    }
    .footer img{
      margin-top: 40px;
      height: 20px;
      margin-bottom: 80px;
      margin-left: 10px;
      margin-right: 10px;
    }
  </style>