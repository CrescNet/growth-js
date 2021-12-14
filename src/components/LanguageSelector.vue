<template>
  <q-select
    dense
    dark
    emit-value
    map-options
    v-model="$root.$i18n.locale"
    display-value="Language"
    :options="[
      { value: 'de', label: 'DE' },
      { value: 'en', label: 'EN' },
    ]"
  />
</template>