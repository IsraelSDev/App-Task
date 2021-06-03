<template>
  <div class="home">
    <Sidebar />
    <Navbar />
    <Categories />
    <TaskScreem />
    <AddTask display="none" />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import TaskScreem from "../components/TaskScreem";
import AddTask from "../components/AddTask";

export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Categories,
    TaskScreem,
    AddTask,
  },
};
</script>
<style lang="stylus">
.home {
  display: flex;
}
</style>