<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" anotherProp="blya"></slot>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                goals: ['hehe', 'not hehe']
            }
        }
    }
</script>