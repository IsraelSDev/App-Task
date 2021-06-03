<!--Tela de Delete de uma Tarefa -->
<template>
  <div class="delete-task">
    <div class="delete-task-box">
      <div class="img-trash">
        <img src="../assets/trash-icon.png" />
      </div>
      <h2>Tem certeza que deseja <span>excluir</span> esta tarefa?</h2>
      <h4>Esta ação não poderá ser desfeita.</h4>
      <div class="delete-options">
        <a class="delete-option">
          <button class="cancel">Cancelar</button>
        </a>
        <a class="delete-option">
          <button class="confirm">Confirmar</button>
        </a>
      </div>
      <!--img-trash-->
    </div>
    <!--delete-task-box-->
  </div>
  <!--container-delete-task-->
</template>
<script>
/* Import da folha de Estilos */
import {} from "./styles/deletetask.styl";

export default {
  name: "DeleteTask",
  props: {},
  components: {},
  methods: {
    closeOption() {
      const btnCancel = $(".cancel");
      const btnConfirm = $(".confirm");
      const deleteDisplay = $(".delete-task");
      $(btnCancel).on("click", () => {
        $(deleteDisplay).fadeOut();
      });
      $(btnConfirm).on("click", () => {
        $(deleteDisplay).fadeOut();
      });
    },
  },
  mounted() {
    this.closeOption();
  },
};
</script>