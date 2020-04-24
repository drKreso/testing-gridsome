<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1 class="text-green-600 font-bold text-3xl mt-8">Hello, world! {{title }}</h1>

    <p class="text-green-400 border-b-2 border-green-400 mt-2">Ovo je novi install</p>
    <Card />AAAAALIVE! Mijenjam source!
    <div v-for="edge in $page.technologies.edges" :key="edge.node.id">
      <h2>{{ edge.node.name }}</h2>
      <h2>{{ edge.node.id }}</h2>
    </div>MNILENOK123234
  </Layout>
</template>

<page-query>
query {
  technologies: allTechnologies {
    edges {
      node {
        id
        name
      }
    }
  }
}
</page-query>

<script>
import Card from "~/components/Card.vue";
export default {
  components: {
    Card
  },
  metaInfo: {
    title: "Hello, world!"
  },
  data: function() {
    return {
      title: "TESTING 123"
    };
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
