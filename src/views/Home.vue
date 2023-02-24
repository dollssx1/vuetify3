<template>
    <v-container>
        <v-row>
            <v-col v-for="menu in menuList" cols="3">
                <v-card :loading="loading" :title="menu.title" :text="menu.text" variant="outlined">
                    <v-card-actions>
                        <v-btn block variant="outlined" color="info" :to="menu.to">{{ menu.btn ? menu.btn : '이동' }}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import menuList from "@/plugins/menuList"
const loading = ref(true);

onMounted(() => {
    loading.value = false
})

</script>
