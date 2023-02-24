<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <VBtn color="success">text</VBtn>
      <div class="text-white">
        제일 기본적인 구성
        <div>v-app아래</div>
        <div>v-navigation-drawer , v-app-bar , v-main</div>
        <div>이중에서 v-main아래 기본 컨테츠가 들어간다</div>
      </div>
      <highlightjs autodetect :code="code" />
    </v-main>
  </v-app>
</template>

<script setup>
  import { useDisplay } from "vuetify";
  import { ref, onMounted } from "vue";

  const { mobile } = useDisplay();

  onMounted(() => {
    console.log(mobile.value); // false
  });

  const drawer = ref(false);
  const code = `<v-app id="inspire">  // v-app 최상위
    <v-navigation-drawer v-model="drawer">  
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>   // v-main 안쪽에 메인 컨텐츠가 들어간다
      <!--  -->
    </v-main>
  </v-app>`;
</script>
