<!--Barra de Tarefas -->
<template>
  <div :class="checked" class="task-bar">
    <div class="check-box"></div>
    <!--check-box-->
    <h2 class="task-title">{{ title }}</h2>
    <div :class="categorie" class="task-categorie">
      <p>{{ placeCategorie }}</p>
    </div>
    <!--task-categorie-->
    <a class="task-click">
      <div class="task-op">
        <div class="nav-task">
          <div class="edit-option">
            <div class="pointer" />
            <!--pointer-->
            <p>Editar</p>
            <div class="img-nav">
              <img src="../assets/task-options-open.png" />
            </div>
            <!--img-nav-->
          </div>
          <!--edit-option-->
          <div class="remove-option">
            <div class="pointer" />
            <p>Excluir</p>
            <div class="delete-task">
              <DeleteTask />
            </div>
          </div>
          <!--remove-option-->
        </div>
        <!--nav-task-->
      </div>
      <!--task-op-->
    </a>
  </div>
  <!--task-bar-->
</template>

<script>
/* Import da folha de Estilos */
import {} from "./styles/taskbar.styl";

/* Import de Componentes */
import DeleteTask from "./DeleteTask";

export default {
  name: "TaskBar",
  components: {
    DeleteTask,
  },
  props: {
    title: String,
    placeCategorie: String,
    categorie: String,
    checked: String,
  },
  methods: {
    funcDelete() {
      const deleteDisplay = $(".delete-task");
      const btnOpenDeleteOption = $(".remove-option");

      $(btnOpenDeleteOption).on("click", () => {
        $(deleteDisplay).fadeIn();
      });
    },
  },
  mounted() {
    this.funcDelete();
  },
};
</script>
