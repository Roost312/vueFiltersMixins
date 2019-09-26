<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button  v-listener="'blue'">blue</button>
                <button  v-listener="'red'">red</button>
                <button  v-listener="'green'">green</button>
                <button  v-listener:grow>grow</button>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <hr>
                <p>Type and see the text is reversed with a local filter</p>
                <input type="text" v-model="placerText">
                <p>{{ placerText | reverseText }}</p>
                <br>
                <hr>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>type and a global filter will count all characters(including spaces)</p>
                <input type="text" v-model="countedText">
                <p>{{ countedText | stringCount }}</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <br><br>
                <hr>
                <p>Computed reverse string</p>
                <input type="text" v-model="compText">
                <p>{{ reverseString }}</p>
                <br><br>
                <hr>
                <p>Computed counted string (now runs off computed function from mixin)</p>
                <input type="text" v-model="countText2">
                <p>{{ countString }}</p>
                <br>
                <br>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <app-mixin></app-mixin>
            </div>
        </div>
    </div>
</template>

<script>
//uses curly braces because the mixin is a single constant. Can pass as many as wanted in curly braces
import mixin from './mixin.vue'
import {stringMixin} from './stringMixin.js'

    export default {
        data () {
            return {
                placerText: '',
                countedText: '',
                compText: ''
                // ,
                // countText2: ''
            }
        },
        filters: {
            reverseText(text) {
                console.log("ran reverse string filter")
                return text = text.split('').reverse().join('');
            }
        },
        //computed only called and triggered when the direct data is used.
        //Filters get called anytime a method is called on the page
        computed: {
            reverseString() {
                console.log("ran reverse computed")
                return this.compText.split('').reverse().join('');
            }
            // ,
            // countString() {
            //     console.log("ran count computed")
            //     return this.countText2 + " (" + this.countText2.length + ")";
            // }
        },
        components: {
            appMixin: mixin
        },
        mixins: [stringMixin]
    }
</script>

<style>
</style>
