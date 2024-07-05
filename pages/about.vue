<template>
    <div class="content-container">
        <h1>
        {{ $t('About.title') }}
        </h1>
        <p>{{ $t('About.message') }}</p>
        <NuxtLink to="/">{{ $t('About.home-page') }}</NuxtLink>
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
</style>