<!--Primeira tela, padrão do dashboard do sistema -->
<template>
  <div class="home">
    <Sidebar />
    <Navbar />
    <Categories />
    <TaskScreem />
    <AddTask />
    <DeleteTask />
  </div>
</template>

<script>
/* Import de Componentes */
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import TaskScreem from "../components/TaskScreem";
import AddTask from "../components/AddTask";
import DeleteTask from "../components/DeleteTask";

export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Categories,
    TaskScreem,
    AddTask,
    DeleteTask,
  },
};
</script>
<!--Reset da Tela para otimização -->
<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.home {
  font-family: 'Poppins', sans-serif;
  display: flex;
}
</style>