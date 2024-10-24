<script setup>
import { ref } from 'vue';
import Buttonplay from './buttonplay.vue';
import {useRouter} from 'vue-router'

let router = useRouter()
let choix = ref("")
function redirect(params) {
  console.log(params);

  if (params==="jeu1") {
    router.push("/jeu1")
  }else if(params==="jeu2"){
    router.push("/jeu2")
  }else if(params==="jeu3"){
    router.push("/jeu3")
  }else{
    router.push("/jeu1")
  }
}

function auChoix(params) {
  choix.value = params
}
</script>

<template>
  <div class="parent">
    <div class="titre">
      <h1 id="plastic">FLAGS</h1>
      <h3>BY SUPERNICE.GAMES</h3>
    </div>
    <div class="grand">
      <div id="papa">
        <div class="container">
          <div class="circle" @click="auChoix('jeu1')">
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              enable-background="new 0 0 32 32"
              viewBox="0 0 32 32"
              id="take-decision"
            >
              <path
                fill="#455A64"
                d="M13.89 26.534c-.118 0-.237-.042-.332-.126l-1.4-1.244c-.758-.682-1.35-1.54-1.714-2.484L8.43 17.12c-.259-.717.067-1.5.759-1.823 1.079-.495 2.394-.035 2.936 1.014l1.531 3.079C13.876 19.07 14 18.687 14 18.29V6.5c0-1.103.897-2 2-2s2 .897 2 2v6.269c.294-.171.636-.269 1-.269.726 0 1.363.389 1.714.97C21.062 13.177 21.511 13 22 13c.871 0 1.614.56 1.888 1.339C24.206 14.125 24.589 14 25 14c1.103 0 2 .897 2 2v8.09c0 .771-.228 1.521-.658 2.168-.153.229-.465.291-.693.139-.23-.152-.292-.463-.139-.693.32-.481.49-1.039.49-1.613V16c0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5S23 16.276 23 16v-1c0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5S20 15.276 20 15v-.5c0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5S17 14.776 17 14.5v-8c0-.552-.449-1-1-1s-1 .448-1 1v11.79c0 .924-.442 1.803-1.182 2.352-.119.089-.271.118-.415.085-.144-.035-.265-.131-.331-.264l-1.84-3.7c-.299-.576-1.026-.832-1.624-.559-.213.1-.319.354-.238.576l2.01 5.55c.309.799.796 1.505 1.444 2.088l1.397 1.242c.207.184.225.5.042.706C14.165 26.478 14.028 26.534 13.89 26.534zM26.5 31c-.276 0-.5-.224-.5-.5V28H14v2.5c0 .276-.224.5-.5.5S13 30.776 13 30.5v-3c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5v3C27 30.776 26.776 31 26.5 31z"
              ></path>
              <g>
                <path
                  fill="#455A64"
                  d="M6.012,10.988c-2.75,0-4.988-2.237-4.988-4.988s2.238-4.988,4.988-4.988c0.85,0,1.69,0.219,2.43,0.632
					C8.683,1.778,8.77,2.083,8.635,2.324s-0.44,0.326-0.68,0.192c-0.592-0.33-1.263-0.505-1.942-0.505
					C3.813,2.012,2.024,3.801,2.024,6s1.789,3.988,3.988,3.988C8.211,9.988,10,8.199,10,6c0-0.138-0.007-0.273-0.021-0.407
					c-0.028-0.274,0.171-0.521,0.446-0.549c0.274-0.033,0.521,0.171,0.549,0.445C10.991,5.656,11,5.827,11,6
					C11,8.751,8.763,10.988,6.012,10.988z"
                ></path>
                <path
                  fill="#455A64"
                  d="M6.012 7.643c-.128 0-.256-.049-.354-.146L3.587 5.425c-.195-.195-.195-.512 0-.707s.512-.195.707 0l1.718 1.718 3.947-3.947c.195-.195.512-.195.707 0s.195.512 0 .707L6.366 7.496C6.268 7.594 6.14 7.643 6.012 7.643zM26 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5S28.757 11 26 11zM26 2c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S28.206 2 26 2z"
                ></path>
                <path
                  fill="#455A64"
                  d="M27.5,8c-0.128,0-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0
						l3,3c0.195,0.195,0.195,0.512,0,0.707C27.756,7.951,27.628,8,27.5,8z"
                ></path>
                <path
                  fill="#455A64"
                  d="M24.5,8c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l3-3
						c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707l-3,3C24.756,7.951,24.628,8,24.5,8z"
                ></path>
              </g>
              <g>
                <path
                  fill="#263238"
                  d="M13.89 26.534c-.118 0-.237-.042-.332-.126l-1.4-1.244c-.758-.682-1.35-1.54-1.714-2.484L8.43 17.12c-.259-.717.067-1.5.759-1.823 1.079-.495 2.394-.035 2.936 1.014l1.531 3.079C13.876 19.07 14 18.687 14 18.29V6.5c0-1.103.897-2 2-2s2 .897 2 2v6.269c.294-.171.636-.269 1-.269.726 0 1.363.389 1.714.97C21.062 13.177 21.511 13 22 13c.871 0 1.614.56 1.888 1.339C24.206 14.125 24.589 14 25 14c1.103 0 2 .897 2 2v8.09c0 .771-.228 1.521-.658 2.168-.153.229-.465.291-.693.139-.23-.152-.292-.463-.139-.693.32-.481.49-1.039.49-1.613V16c0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5S23 16.276 23 16v-1c0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5S20 15.276 20 15v-.5c0-.552-.449-1-1-1s-1 .448-1 1c0 .276-.224.5-.5.5S17 14.776 17 14.5v-8c0-.552-.449-1-1-1s-1 .448-1 1v11.79c0 .924-.442 1.803-1.182 2.352-.119.089-.271.118-.415.085-.144-.035-.265-.131-.331-.264l-1.84-3.7c-.299-.576-1.026-.832-1.624-.559-.213.1-.319.354-.238.576l2.01 5.55c.309.799.796 1.505 1.444 2.088l1.397 1.242c.207.184.225.5.042.706C14.165 26.478 14.028 26.534 13.89 26.534zM26.5 31c-.276 0-.5-.224-.5-.5V28H14v2.5c0 .276-.224.5-.5.5S13 30.776 13 30.5v-3c0-.276.224-.5.5-.5h13c.276 0 .5.224.5.5v3C27 30.776 26.776 31 26.5 31z"
                ></path>
                <g>
                  <path
                    fill="#263238"
                    d="M6.012,10.988c-2.75,0-4.988-2.237-4.988-4.988s2.238-4.988,4.988-4.988c0.85,0,1.69,0.219,2.43,0.632
					C8.683,1.778,8.77,2.083,8.635,2.324s-0.44,0.326-0.68,0.192c-0.592-0.33-1.263-0.505-1.942-0.505
					C3.813,2.012,2.024,3.801,2.024,6s1.789,3.988,3.988,3.988C8.211,9.988,10,8.199,10,6c0-0.138-0.007-0.273-0.021-0.407
					c-0.028-0.274,0.171-0.521,0.446-0.549c0.274-0.033,0.521,0.171,0.549,0.445C10.991,5.656,11,5.827,11,6
					C11,8.751,8.763,10.988,6.012,10.988z"
                  ></path>
                  <path
                    fill="#263238"
                    d="M6.012 7.643c-.128 0-.256-.049-.354-.146L3.587 5.425c-.195-.195-.195-.512 0-.707s.512-.195.707 0l1.718 1.718 3.947-3.947c.195-.195.512-.195.707 0s.195.512 0 .707L6.366 7.496C6.268 7.594 6.14 7.643 6.012 7.643zM26 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5S28.757 11 26 11zM26 2c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S28.206 2 26 2z"
                  ></path>
                  <path
                    fill="#263238"
                    d="M27.5,8c-0.128,0-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0
						l3,3c0.195,0.195,0.195,0.512,0,0.707C27.756,7.951,27.628,8,27.5,8z"
                  ></path>
                  <path
                    fill="#263238"
                    d="M24.5,8c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l3-3
						c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707l-3,3C24.756,7.951,24.628,8,24.5,8z"
                  ></path>
                </g>
              </g>
            </svg>

            <p class="desc">streak</p>
          </div>
          <div class="circles" @click="auChoix('jeu2')">
            <!-- <img src="C:\Users\evaelle.kpogla\Documents\flagRdc3\flag\src\assets\svg\icon alarme.png" alt="Image 2" /> -->

            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="64"
              height="64"
              enable-background="new 0 0 64 64"
              viewBox="0 0 64 64"
              id="clock"
            >
              <pattern
                id="a"
                width="32.186"
                height="33.457"
                x="-504"
                y="-672"
                overflow="visible"
                patternUnits="userSpaceOnUse"
                viewBox="0 -33.457 32.186 33.457"
              >
                <polygon
                  fill="none"
                  points="0 0 32.186 0 32.186 -33.457 0 -33.457"
                ></polygon>
                <polygon
                  fill="#A92A46"
                  points="32.186 0 0 0 0 -33.457 32.186 -33.457"
                ></polygon>
              </pattern>
              <pattern
                xlink:href="#a"
                id="b"
                patternTransform="translate(193.215 200.522)scale(1.0296)"
              ></pattern>
              <circle
                cx="31.285"
                cy="37.502"
                r="26.498"
                fill="url(#b)"
              ></circle>
              <circle cx="31.285" cy="37.502" r="21.16" fill="#EBEBEB"></circle>
              <circle cx="31.285" cy="20.346" r="2.574" fill="#455C6C"></circle>
              <circle cx="43.417" cy="25.371" r="2.574" fill="#455C6C"></circle>
              <circle cx="48.442" cy="37.502" r="2.574" fill="#455C6C"></circle>
              <circle cx="43.417" cy="49.634" r="2.574" fill="#455C6C"></circle>
              <circle cx="31.285" cy="54.659" r="2.574" fill="#455C6C"></circle>
              <circle cx="19.153" cy="49.634" r="2.574" fill="#455C6C"></circle>
              <circle cx="14.128" cy="37.502" r="2.574" fill="#455C6C"></circle>
              <circle cx="19.153" cy="25.371" r="2.574" fill="#455C6C"></circle>
              <circle cx="31.285" cy="37.502" r="1.501" fill="#455C6C"></circle>
              <polygon
                fill="#455C6C"
                points="30.427 37.502 31.285 26.827 32.143 37.502"
              ></polygon>
              <polygon
                fill="#455C6C"
                points="31.892 36.896 38.834 45.051 30.679 38.109"
              ></polygon>
              <g>
                <path
                  fill="#455C6C"
                  d="M20.299 10.286C13.562 13.002 8.072 18.149 4.904 24.64c-2.425-1.95-3.981-4.941-3.981-8.298 0-5.873 4.758-10.632 10.632-10.632C15.181 5.711 18.378 7.524 20.299 10.286zM63.077 16.342c0 3.826-2.019 7.177-5.05 9.053-2.939-6.474-8.161-11.695-14.635-14.635 1.876-3.031 5.227-5.05 9.053-5.05C58.319 5.711 63.077 10.469 63.077 16.342z"
                ></path>
              </g>
              <rect
                width="10.575"
                height="3.908"
                x="26.712"
                y="5.171"
                fill="#455C6C"
              ></rect>
              <rect
                width="10.575"
                height="1.263"
                x="26.712"
                fill="#455C6C"
              ></rect>
              <rect
                width="3.717"
                height="3.908"
                x="30.141"
                y="1.263"
                fill="#455C6C"
              ></rect>
            </svg>

            <p class="desc2">60sec</p>
          </div>

          <div class="circles" @click="auChoix('jeu3')">
            <img
              src="C:\Users\evaelle.kpogla\Documents\flagRdc3\flag\src\assets\svg\livre ouvert.png"
              alt="Image 3"
            />
              
            <p class="desc3">Learn</p>
            
          </div>
        </div>
      </div>
    </div>
    <p class="para">Play as long as you don't make a mistake.</p>

    <Buttonplay  @redirection="redirect" :cible="choix"  />
  </div>
</template>
<style scoped>
h1 {
  margin: 0px;
  color: transparent;
  font-size: 100px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  text-align: center;
}
@keyframes plastic {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 200px;
  }
  100% {
    background-position: 0 0;
  }
}
#plastic {
  background: url('https://images.unsplash.com/photo-1605707159327-f43132f89a5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  text-align: center;
  animation-name: plastic;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
/* img {
  display: block;
  width: 100%;
  fill: transparent;
} */
.para {
  margin-left: 40%;
  margin-top: 15px;
}
.parent {
  height: 100vh;
  background: linear-gradient(to bottom, #33ccff 0%, #ffff99 100%);
}
.button {
  font-size: 50px;
  padding: 20px 40px;
  border: none;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 5%;
  margin-left: 45%;
}

.text {
  display: inline-block;
  background: linear-gradient(45deg, #7a2121, #f7f00f, #6bff6b);
  background: linear-gradient(45deg, #ff6b6b, #f7f00f, #6bff6b);
  -webkit-background-clip: text;

  color: transparent;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
.desc {
  position: absolute;
  color: rgb(4, 7, 9);
  text-shadow: 1px 1px 2px rgb(255, 255, 255), 0 0 25px , 0 0 5px rgb(224, 99, 99);
  bottom: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 23px;
}
.desc2 {
  position: absolute;
  bottom: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 23px;
  text-shadow: 1px 1px 2px rgb(255, 255, 255), 0 0 25px , 0 0 5px rgb(231, 102, 102);
  color: rgb(4, 7, 9);
}
.desc3 {
  position: absolute;
  bottom: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 23px;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.332), 0 0 25px , 0 0 5px rgba(244, 43, 43, 0.801);
  color: rgb(4, 7, 9);
}
.container {
  display: flex;
  justify-content: space-between;
  gap: 35px;
  position: relative;
}

.circle {
  background-color: white;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(228, 213, 213, 0.058);
  text-align: center;
  /* width: 20%; */
}
.circles {
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50%;
  width:250px;
  /* height: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  text-align: center;
  /* padding: 10%; */
  /* padding-top: 2%;
  padding-bottom: 2%; */
}
.grand {
  border-radius: 130px;
  padding-block: 15px;
  background-color: #ffffff3a;
  width: 45%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.titre {
  text-align: center;
}
</style>
