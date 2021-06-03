<template>
  <div class="home">
    <Sidebar />
    <Navbar />
    <Categories />
    <TaskScreem />
    <AddTask display="none" />
    <DeleteTask />
  </div>
</template>

<script>
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
<style lang="stylus">
.home {
  display: flex;
}
</style>