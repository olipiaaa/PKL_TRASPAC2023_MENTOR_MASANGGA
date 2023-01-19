<template>
    <div :class="`taks ${taks.done ? 'is-complete' : ''}`">
    <div class="content">{{  taks.content }}</div>
    <div class="buttons">
        <button>{{ taks.done ? 'Undo' : 'Done' }}</button>
        <button class="delete">Delete</button>
     </div>
    </div>
</template>

<script>
export default {
    props: ['task']
}
</script>

<style>

</style>