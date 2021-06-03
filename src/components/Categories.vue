<template>
  <div class="container-categories">
    <div class="categories-wraper">
      <div class="categories-title">
        <h3>Categorias</h3>
      </div>
      <!--categories-title-->
      <div class="categories-list">
        <ul>
          <li class="active"><a >Todas</a></li>
          <li><a>Urgentes </a><span class="mark-urgent">1</span></li>
          <li><a>Importantes </a><span class="mark-important">2</span></li>
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
