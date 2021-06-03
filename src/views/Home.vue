<template>
  <div class="home">
    <Sidebar />
    <Navbar />
    <Categories />
    <TaskScreem />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import TaskScreem from "../components/TaskScreem";

export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
    Categories,
    TaskScreem,
  },
};
</script>
<style lang="stylus">
.home {
  display: flex;
}
</style>