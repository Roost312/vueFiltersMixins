<template>
    <div>
        <p>Mixin in seperate component</p>
            <input type="text" v-model="countText2">
        <p>{{ countString }}</p>
    </div>
</template>


<script>
import {stringMixin} from './stringMixin.js'

export default {
    mixins: [stringMixin]
}
</script>
