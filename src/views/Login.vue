<!-- Tela de Login --> 
<!-- Acessada inserindo "/login" na barra de pesquisa -->
<template>
  <div class="container-login">
    <div class="logo-part-wraper">
      <div class="logo-part-box">
        <img src="../assets/logo.png" />
        <p><strong>FACILITA</strong> TASKS</p>
        <h6>Gestão de tarefas pessoais</h6>
      </div>
      <!--logo-part-box-->
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
          <!--email-wraper-->
          <div class="password-wraper">
            <p>Senha:</p>
            <input type="password" required />
          </div>
          <!--password-wraper-->
          <input type="submit" value="Entrar" />
        </form>
        <div class="link-forgot-my-pass">
          <a href="#" target="_blank">Esqueci minha senha</a>
        </div>
        <!--link-forgot-my-pass-->
        <div class="remover">
          <a href="/home">Home >>></a>
        </div>
        <!--remover-->
      </div>
      <!--login-box-->
    </div>
    <!--login form-->
  </div>
</template>

<script>
/* Importando folha de Estilos */
import {} from "./styles/login.styl";

export default {
  name: "Login",
  components: {},
};
</script>
<style>
* {
  font-family: "Poppins", sans-serif;
}
</style>

