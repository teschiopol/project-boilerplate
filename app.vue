<script setup>
import { ref } from 'vue';

const products = ref([
  {author: 'pinco pallo', name: 'lallala', type: 'album', genere: 'rap'},
]);

</script>

<template>
    <div>
      <Card>
        <template #title><p class="text-center">Spotify Last Release</p></template>
        <template #content>
      <DataTable
          :value="products" tableStyle="min-width: 50rem" removableSort
          showGridlines paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
          paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="{first} to {last} of {totalRecords}">
        <Column field="author" sortable header="Author"></Column>
        <Column field="name" sortable header="Name"></Column>
        <Column field="type" sortable header="Type"></Column>
        <Column field="genere" sortable header="Genere"></Column>
      </DataTable>
        </template>
      </Card>
    </div>
</template>

<style>
:root {
  background-color: #f3f3f3;
}
</style>
