<template>
    <div id="loading">
        <!-- <div class="loads">
            正在加载中...
        </div> -->
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'loading'
}
</script>

<style scoped>
#loading{
    width: 100%;
    height: 100%;
    background: #f3f5f9;
    /* background: rgba(255, 255, 255, 0.9); */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.spinner {
  /* margin: 100px auto; */
  width: 2rem;
  height: 1.2rem;
  text-align: center;
  font-size: 0.2rem;
}
 
.spinner > div {
  background-color: #f54440;
  opacity: 0.6;
  height: 100%;
  width: 0.12rem;
  display: inline-block;
  margin-right: 0.08rem;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>


