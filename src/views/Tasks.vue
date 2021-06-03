<template>
  <div class="about">
    <Sidebar />
    <Navbar />
    <div class="about-content">
      <h1>Tasks</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
export default {
  components: {
    Sidebar,
    Navbar
  },
};
    Navbar
</script>
<style lang="stylus">
.about {
  display: flex;
  flex-wrapper: wrap
}
</style>