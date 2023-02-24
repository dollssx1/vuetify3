<script setup></script>

<template>
  <div>
    <p>별칭 만들기</p>
    <p>
      vuetify.js에 자주 쓰는 컴퍼넌트를 뷰티파이 컴퍼넌트 기반으로
      재조합할수있다.
    </p>
    <MyButton>재조합한 Mybutton 컴퍼넌트</MyButton>
    <p>
      <code> aliases: { MyButton: VBtn, }, </code>
    </p>
    <p>
      <code>
        defaults: { MyButton: { color: 'primary', variant: 'tonal', }, VBtn: {
        color: 'secondary', variant: 'flat', }, VCard: { MyButton: { color:
        'secondary' }, VBtn: { color: 'primary' }, }, },</code
      >
    </p>
    <VBtn>text</VBtn>
  </div>

  <p>아직 컬러나 텍스트영역미숙 배운후 다시작성</p>
</template>
