<!--Tela de adição de uma nova tarefa -->
<template>
  <div class="container-add-task">
    <a id="button-add-task">
      <img src="../assets/add-task.png" />
    </a>

    <div class="add-new-task">
      <div class="form-add-task">
        <div id="form-title" class="form-title">
          <h2>Cadastrar Tarefa</h2>
          <a id="btnClose"> x </a>
        </div>
        <!--form-title-->
        <form>
          <div class="title">
            <p>Título:</p>
            <input type="text" id="title-task" />
          </div>
          <!--title-->
          <div class="description">
            <p>Descrição:</p>
            <textarea class="description-box"></textarea>
          </div>
          <!--description-->
          <div class="options">
            <input type="radio" name="option" id="check" />
            <p>Urgente</p>
            <input type="radio" name="option" id="checks" />
            <p>Importante</p>
            <div class="input-submit">
              <a>
                <input type="submit" id="submit" value="Adicionar" />
              </a>
            </div>
            <!--input-submit-->
          </div>
          <!--options-->
        </form>
      </div>
      <!--form-add-task-->
    </div>
    <!--add-new-task-->
  </div>
  <!--container-add-task-->
</template>

<script>
/* Import da folha de Estilos */
import {} from "./styles/addtask.styl";

export default {
  name: "AddTask",
  props: {},
  components: {},
  methods: {
    allFunc() {
      /* Alterar a cor do Botão enviar */
      const el = document.querySelector("#title-task");
      const sub = $("#submit");
      const check = $("#check");
      const checks = $("#checks");
      const textArea = $(".description-box");

      $(check).on("click", () => {
        if (el.value.length > 0) {
          $(sub).css("background-color", "#16d08d");
        } else if (el.value.length == 0) {
          $(sub).css("background-color", "#a6c1d2");
        }
      });
      $(checks).on("click", () => {
        if (el.value.length > 0) {
          $(sub).css("background-color", "#16d08d");
        } else if (el.value.length == 0) {
          $(sub).css("background-color", "#a6c1d2");
        }
      });
      $(textArea).on("click", () => {
        if (el.value.length > 0) {
          $(sub).css("background-color", "#16d08d");
        } else if (el.value.length == 0) {
          $(sub).css("background-color", "#a6c1d2");
        }
      });
      /* Alterar a cor do Botão enviar ---END */

      /* Botão adc new Task */
      const btn = $("#button-add-task");
      const btnClose = $("#btnClose");
      const elAddNewTask = $(".add-new-task");
      $(btn).on("click", () => {
        $(elAddNewTask).fadeIn();
      });
      $(btnClose).on("click", () => {
        $(elAddNewTask).fadeOut();
      });

      /* Botão adc new Task --- END */
    },
  },
  mounted() {
    this.allFunc();
  },
};
</script>

<style lang="stylus">
.add-new-task {
}
</style>