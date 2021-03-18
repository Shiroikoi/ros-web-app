<template>
  <v-main>
    <v-tabs v-model="tab" color="#ffa726" background-color="#37474f" dark>
      <v-tab key="1">Robot State</v-tab>
      <v-tab key="2">Control Panel1</v-tab>
      <v-tab ket="3">Control Panel2</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item key="1">
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-skeleton-loader elevation="2" class="mx-auto" type="table-heading, list-item-two-line, image, table-tfoot"></v-skeleton-loader>
            </v-col>
            <v-col cols="6">
              <v-skeleton-loader elevation="2" class="mx-auto" type="table-heading, list-item-two-line, image, table-tfoot"></v-skeleton-loader>
            </v-col>
            <v-col cols="6">
              <v-skeleton-loader elevation="2" class="mx-auto" type="list-item-avatar"></v-skeleton-loader>
            </v-col>
            <v-col cols="6">
              <v-skeleton-loader elevation="2" class="mx-auto" type="list-item-avatar"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item key="2">
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-skeleton-loader
                elevation="2"
                class="mx-auto"
                type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
              ></v-skeleton-loader>
            </v-col>
            <v-col cols="6">
              <v-skeleton-loader
                elevation="2"
                class="mx-auto"
                type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item key="3">
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-skeleton-loader elevation="2" class="mx-auto" type="table-heading, list-item-two-line, image, table-tfoot"></v-skeleton-loader>
            </v-col>
            <v-col cols="6">
              <v-skeleton-loader elevation="2" class="mx-auto" type="table-heading, list-item-two-line, image, table-tfoot"></v-skeleton-loader>
            </v-col>
            <v-col cols="6">
              <v-skeleton-loader elevation="2" class="mx-auto" type="list-item-avatar"></v-skeleton-loader>
            </v-col>
            <v-col cols="6">
              <v-skeleton-loader elevation="2" class="mx-auto" type="list-item-avatar"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-main>
</template>
<script>
  export default {
    name: "Main",
    data: () => ({ tab: null, text: "123" }),
  };
</script>
