<template>
    <div>
        기본은 부트스트랩과 동일하다.
    </div>

    <div>기본적인 메인 레이아웃을 제외하고 다음과 같다</div>
    <v-container>
        <v-row>
            <v-col>
                <div class="bg-red"> ...컨텐츠</div>
            </v-col>
            <v-col>
                <div class="bg-red"> ...컨텐츠</div>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>
                <div class="bg-green"> ...컨텐츠</div>
            </v-col>
            <v-col>
                <div class="bg-green"> ...컨텐츠</div>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <div class="bg-red"> ...컨텐츠</div>
            </v-col>
            <v-col order="1">
                <div class="bg-red"> ...마지막 컨텐츠</div>
            </v-col>
        </v-row>
    </v-container>
    <div>container 속성 fluid 전체넓이</div>
    <div>row 속성</div>
    <div>no-gutters col의 패딩제거</div>
    <div>dense col의 패딩 줄임</div>
    <div>그외 정렬기능 있음</div>
    <v-btn color="success" href="https://vuetifyjs.com/en/api/v-row" target="_blank">링크</v-btn>
    <highlightjs autodetect :code="code" />
</template>

<style></style>

<script setup>
const code =
    `<v-container>
        <v-row>
            <v-col>
                <div class="bg-red"> ...컨텐츠</div>
            </v-col>
            <v-col>
                <div class="bg-red"> ...컨텐츠</div>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col>
                <div class="bg-green"> ...컨텐츠</div>
            </v-col>
            <v-col>
                <div class="bg-green"> ...컨텐츠</div>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <div class="bg-red"> ...컨텐츠</div>
            </v-col>
            <v-col>
                <div class="bg-red"> ...컨텐츠</div>
            </v-col>
        </v-row>
    </v-container>`
</script>