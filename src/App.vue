<script setup lang="ts">
import  Maincomponent  from "./components/Main.component.vue";
import Aboutcomponent from "./components/About.component.vue";
import SkillsComponent from "./components/Skills.component.vue";
import ProjectComponent from "./components/Project.component.vue";
import ContactComponent from "./components/Contact.component.vue";
import Navcomponent from "./components/Nav.component.vue"
import Toast from 'primevue/toast'
</script>

<template>
  <Navcomponent></Navcomponent>
  <Maincomponent></Maincomponent>
  <Aboutcomponent></Aboutcomponent>
  <SkillsComponent></SkillsComponent>
  <ProjectComponent></ProjectComponent>
  <ContactComponent></ContactComponent>
  <Toast />
</template>

<style scoped>
</style>
