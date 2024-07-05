<script setup>
const { setLocale } = useI18n()
</script>

<template>
  <div class="content-container">
    <h1>
      {{ $t('Home.title') }}
    </h1>
    <p>{{ $t('Home.message') }}</p>
    <NuxtLink to="/about">{{ $t('Home.about-page') }}</NuxtLink>
    <div>
      <span>Switch language to: </span>
      <button @click="setLocale('en')">English</button>
      <button @click="setLocale('fr')">French</button>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: Arial, sans-serif;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 4rem;
  margin-bottom: 0;
  color: #03BB73;
}

p {
  font-size: 2rem;
  margin-bottom: 1rem;
}

a {
    font-size: 1.3rem;
    color: #03BB73;
    margin-bottom: 2rem;
}

button {
  font-size: 1.5rem;
  background-color: #03BB73;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-inline-end: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
}
</style>