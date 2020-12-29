<template>
 <div>
  <div class="red">sdfsdf</div>
  <div class="red">{{kaikai}}</div>
 </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'AppComponent',
        data() {
            return {
                name: 'kaikai'
            }
        },
        mounted() {
            console.log(1111);
        }
    })
</script>

<style scoped>
    .red {
        color: red;
    }
</style>
