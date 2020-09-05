<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li 
                v-for="(fruit, index) in filteredFruits" 
                :key="index"
            >
                {{ fruit }}
            </li>
        </ul>
        <hr>
        <button @click="addNumbers">Add Numbers (List.vue)</button>
    </div>
</template>

<script>
    import { fruitMixin } from "./fruitMixin.js";
    import { testMixin } from "./testMixin.js";

    export default {
        mixins: [fruitMixin, testMixin],
        created() {
            console.log("Inside List Created Hook");
        }
    }
</script>

<style>

</style>
