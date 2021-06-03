<template>
  <div class="container-login">
    <div class="logo-part-wraper">
      <div class="logo-part-box">
        <img src="../assets/logo.png" />
        <p><strong>FACILITA</strong> TASKS</p>
        <h6>Gestão de tarefas pessoais</h6>
      </div>
    </div>
    <!--logo-part-->
    <div class="form-login-wraper">
      <div class="login-box">
        <h3 class="title-form">Entre com seus dados de acesso.</h3>
        <form>
          <div class="email-wraper">
            <p>Nome de usuário ou e-mail:</p>
            <input type="text" required />
          </div>
          <div class="password-wraper">
            <p>Senha:</p>
            <input type="password" required />
          </div>
          <input type="submit" value="Entrar"/>
        </form>
        <div class="link-forgot-my-pass">
          <a href="#" target="_blank">Esqueci minha senha</a>
        </div>
        <div class="remover">
          <a href="/home">Home >>></a>
        </div>
      </div>
      <!--login-box-->
    </div>
    <!--login form-->
  </div>
</template>

<script>

import {} from './styles/login.styl';

export default {
  name: "Login",
  components: {},
};
</script>

