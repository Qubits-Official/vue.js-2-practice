<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUpperCase | toLowerCase }}</p>
                <p>{{ text.toUpperCase() }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add New Item</button>
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
                <app-list></app-list>
                <hr>
                <button @click="addNumbers">Add Numbers (App.vue)</button>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "./List.vue";
    import { fruitMixin } from "./fruitMixin.js";
    import { testMixin } from "./testMixin.js";

    export default {
        mixins: [fruitMixin, testMixin],
        data() {
            return {
                text: "Hello there!",
                a: 10,
                b: 9
            }
        },
        filters: {
            toUpperCase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
