<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { setAuthentication } from '@/router'; 
const router = useRouter()

const user = ref(null)
const userEmail = ref('')
const password = ref('')
const userExist = ref(false)
const data = ref([])

async function fetchUser() {
  const resp = await fetch('/users.json')
  data.value = await resp.json()
  console.log(data.value)
}

async function connectUser() {
  const user = data.value.find(el => el.email === userEmail.value);
  if (user && password.value === user.password) {
    setAuthentication(true); 
    setTimeout(() => {
    userEmail.value = "";
    password.value = "";
    router.push('/home'); 
  }, 4000);

  } else {
    alert("Vous avez entré un mauvais mot de passe👀👀");
  }
}


function submit() {
  connectUser()
}

onMounted(() => {
  fetchUser()
})
</script>

<template>
  <div class="main-container">
    <div>
    </div>
    <div class="login-container">
      <h2>Connexion</h2>
      <form @submit.prevent="submit">
        <label for="login__username"
          ><svg class="icon">
            <use xlink:href="#icon-user"></use></svg
        ></label>
        <input
          type="email"
          v-model="userEmail"
          placeholder="Votre email"
          required
        />
        <label for="login__password"
          ><svg class="icon">
            <use xlink:href="#icon-lock"></use></svg
        ></label>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <div class="remember-me">
          <input type="checkbox" id="remember" />
          <label for="remember">Remember me</label>
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <div class="forgot-password">
        <a href="#">Mot de passe oublier?</a>
      </div>
      <div class="sign-up">
        <p>Vous êtes nouveau ici? <RouterLink>S'inscrire</RouterLink></p>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" class="icons">
    <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
      <path
        d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"
      />
    </symbol>
    <symbol id="icon-lock" viewBox="0 0 1792 1792">
      <path
        d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"
      />
    </symbol>
    <symbol id="icon-user" viewBox="0 0 1792 1792">
      <path
        d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"
      />
    </symbol>
  </svg>
</template>

<style scoped>
.main-container {
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: Arial, sans-serif;
  background:linear-gradient(#00c6ff, #0072ff, #0000ff);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 100%;
}
.login-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  width: 300px;
}
h2 {
  color: white;
  text-align: center;
  margin-bottom: 30px;
}
input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
}
input[type='email']::placeholder,
input[type='password']::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0a178d;
  color: white;
  cursor: pointer;
  margin-top: 20px;
}
.remember-me {
  color: white;
  margin: 15px 0;
}
.forgot-password,
.sign-up {
  text-align: center;
  margin-top: 15px;
}
.forgot-password a,
.sign-up a {
  color: white;
  text-decoration: none;
}
.icon {
  block-size: 1em;
  fill: var(--iconFill);
  inline-size: 1em;
  vertical-align: middle;
}
</style>
