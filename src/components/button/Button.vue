<template>
    <el-button v-bind="$attrs">
        <slot></slot>
    </el-button>
</template>

<script>
export default {
    name: 'rs-button',
    data() {
        return {
        }
    }
}
</script>
