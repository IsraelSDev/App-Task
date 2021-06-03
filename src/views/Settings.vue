<!--Tela de Configurações do DashBoard --> 
<template>
  <div class="about">
    <Sidebar />
    <Navbar />

    <div class="about-content">
      <h1>Settings</h1>
    </div>
  </div>
</template>

<script>
/* Import de Componentes */
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default {
  components: {
    Sidebar,
    Navbar,
  },
};
</script>
<style lang="stylus">
.about-content {
  margin-top: 6%;
  width: 100%;
}
</style>