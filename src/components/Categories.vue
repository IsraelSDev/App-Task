<template>
  <div class="container-categories">
    <div class="categories-wraper">
      <div class="categories-title">
        <h3>Categorias</h3>
      </div>
      <!--categories-title-->
      <div class="categories-list">
        <ul>
          <li><a>Todas</a></li>
          <div class="urgent">
            <li><a>Urgentes</a></li>
            <div class="mark-urgent">
              <p>1</p>
            </div>
            <!--mark-urgent-->
          </div>
          <!--urgent-->
          <div class="important">
            <li><a>Importantes</a></li>
            <div class="mark-important">
              <p>2</p>
            </div>
            <!--mark-important-->
          </div>
          <!--important-->
          <li><a>Outras</a></li>
          <li><a>Finalizadas</a></li>
        </ul>
      </div>
      <!--categories-list-->
    </div>
    <!--categories-wraper-->
  </div>
  <!--container-categories-->
</template>
<script>
import {} from "./styles/categories.styl";

export default {
  name: "Categories",
  components: {},
};
</script>
