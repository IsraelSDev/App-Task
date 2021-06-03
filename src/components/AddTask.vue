<template>
  <div class="container-add-task">
    <a href="">
      <img src="../assets/add-task.png" />
    </a>

    <div class="add-new-task">
      <div class="form-add-task">
        <div id="form-title" class="form-title">
          <h2>Cadastrar Tarefa</h2>
          <a href="/"> x </a>
        </div>
        <!--form-title-->
        <form>
          <div class="title">
            <p>Título:</p>
            <input type="text" />
          </div>
          <!--title-->
          <div class="description">
            <p>Descrição:</p>
            <textarea class="description-box"></textarea>
          </div>
          <!--description-->
          <div class="options">
            <input type="radio" name="option" />
            <p>Urgente</p>
            <input type="radio" name="option" />
            <p>Importante</p>
            <div class="input-submit">
              <a>
                <input type="submit" value="Adicionar" />
              </a>
            </div>
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
import {} from "./styles/addtask.styl";
export default {
  name: "AddTask",
  props: {},
  components: {},
};
</script>

<style lang="stylus">
.add-new-task {
}
</style>