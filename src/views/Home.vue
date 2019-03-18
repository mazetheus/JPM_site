<template>
  <div>
    <banner></banner>
    <b-container class="home" fluid>
      <nos></nos>
      <fazemos></fazemos>
      <clientes></clientes>
      <contato></contato>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Fazemos from '@/components/Fazemos.vue'
import Nos from '@/components/Nos.vue'
import Contato from '@/components/Contato.vue'
import Clientes from '@/components/Clientes.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Banner,
    Nos,
    Fazemos,
    Clientes,
    Contato,
    Footer,
  }
}
</script>

<style type="text/css" scoped>
</style>