<template>
    <div>뷰티파이는 전연 변수가 있다.</div>
    <div>강제로 수정하는 방법이 있지만 전처리기에서 미리 만들수있다.</div>

    <div>아래의 경로에 scss파일을 만든후 등록후 뷰티파이 scss 변수를 찾아서 수정하면된다.</div>
    <highlightjs autodetect :code="code" />
</template>

<script setup>
const code = `// Vite/Nuxt
vuetify({
  styles: { configFile: 'src/settings.scss' }
})

// Webpack/Vue CLI
new VuetifyPlugin({
  styles: { configFile: 'src/settings.scss' }
})`
</script>
