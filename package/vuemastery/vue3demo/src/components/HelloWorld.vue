<script>
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUpdated, onDeactivated, onUnmounted, onMounted, ref, watch } from 'vue'
import eventApi from './eventApi'
import usePromise from './helloworld'
export default {
    beforeCreate() {
      console.log('component is onMounted!!!')
    },
    setup () {
    const count = ref(0)
    const searchInput = ref('')
    const getEvents = usePromise(search => eventApi.getEventCount(search.value))
    onMounted(() => {
      console.log('component is onMounted!!!')
    })

    onBeforeMount(() => {
      console.log('component is onBeforeMount!!!')
    })
    onBeforeUpdate(() => {
      console.log('component is onBeforeUpdate!!!')
    })
    onUpdated(() => {
      console.log('component is onBeforeUpdate!!!')
    })
    onBeforeUnmount(() => {
      console.log('component is onBeforeUnmount!!!')
    })
    onUnmounted(() => {
      console.log('component is onUnmounted!!!')
    })
    onActivated(() => {
      console.log('component is onActivated!!!')
    })
    onDeactivated(() => {
      console.log('component is onDeactivated!!!')
    })
    watch(searchInput, () => {
      if (searchInput.value !== '') {
        getEvents.createPromise(searchInput)
      } else {
        getEvents.results.value = null
      }
    })
    watch(getEvents.results, () => {
      if (getEvents.results.value) {
        count.value = getEvents.results.value
      }
    })
    return { getEvents, searchInput, count }
  }
}
</script>

<template>
  <button type="button" @click="count++">count is {{ count }}</button>
  <div class="card">
    <input v-model="searchInput" />
    <div>当前输入loading的结果：{{getEvents.loading}}</div>
    <div>当前输入error的结果：{{getEvents.error}}</div>
    <div>当前输入results的结果：{{getEvents.results}}</div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
