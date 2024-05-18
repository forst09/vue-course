<template>
    <div class="info">
        <h2>{{ name }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        },
        age: {
            type: String,
        }
    }
}
</script>