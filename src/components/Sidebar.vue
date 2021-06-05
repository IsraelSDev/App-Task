<!--Barra de navegação Lateral do Dashboard -->
<template>
  <div class="sidebar">
    <div class="logo">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png" />
      </router-link>
    </div>
    <!--logo-->
    <div class="options-dash-wraper">
      <div class="options-dash">
        <router-link to="/">
          <div class="option actived">
            <font-awesome-icon class="icon" icon="chart-bar" />
            <p>Dashboard</p>
          </div>
          <!--option-->
        </router-link>
        <router-link to="/tasks">
          <div class="option">
            <font-awesome-icon class="icon" icon="check-circle" />
            <p>Tarefas</p>
          </div>
          <!--option-task-->
        </router-link>
        <router-link to="/settings">
          <div class="option">
            <font-awesome-icon class="icon" icon="cogs" />
            <p>Configurações</p>
          </div>
          <!--option-settings-->
        </router-link>
        <a class="toggle-btn">
          <h2>Button</h2>
        </a>
      </div>
      <!--options-dash-->
    </div>
    <!--options-dash-wraper-->
  </div>
  <!--Sidebar-->
</template>

<script>
/* Import da folha de estilos */
import {} from "./styles/sidebar.styl";

export default {
  name: "Sidebar",
  props: {},
  components: {},
  methods: {
    toggleCategories() {
      const btn = $(".toggle-btn");
      const cssCategories = $(".container-categories");
      $(btn).click(function (e) {
        e.preventDefault();
        $(".toggle").toggle(".toggle");
        $(cssCategories).toggle("600");
      });
      // alert("toggle");
    },
  },
  mounted() {
    this.toggleCategories();
  },
};
</script>
