<!--Tela de Pesquisa, e View das Tarefas -->
<template>
  <div class="container-tasks-screem">
    <div class="taskscreem-wraper">
      <h1>Minhas Tarefas</h1>
      <h3>
        Olá <span class="task-info-span name-info">Israel Soares</span>, você
        tem <span class="task-info-span tasks-count">4 tarefas</span> pendentes.
      </h3>
      <div class="searchBar">
        <input type="text" placeholder="Buscar Tarefas" />
        <font-awesome-icon class="icon" icon="search" />
      </div>
      <!--searchBar-->
      <TaskBar
        title="Planejar o desenvolvimento do app TodoList"
        placeCategorie="Urgente"
        categorie="categorie-urgent"
        checked="checked"
      />
      <TaskBar
        title="Criar projeto Vue.js"
        placeCategorie="Importante"
        categorie="categorie-important"
      />
      <TaskBar
        title="Montar telas HTML/CSS"
        placeCategorie="Importante"
        categorie="categorie-important"
      />
      <TaskBar title="Separar componentes" />
      <TaskBar title="Programar componentes" />
    </div>
    <!--taskscreem-wraper-->
  </div>
  <!--container-tasks-screem-->
</template>

<script>
/* Import da folha de Estilos */
import {} from "./styles/taskscreem.styl";

/* Import de Componentes */
import TaskBar from "./TaskBar.vue";

export default {
  name: "TaskScreem",
  components: { TaskBar },
};
</script>
