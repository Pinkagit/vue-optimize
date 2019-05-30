<template>
    <div class="about">
        <h1>This is an about page</h1>
        <i class="el-icon-share"></i>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
    </div>
</template>

<script>
export default {
    data: () => ({
        value1: ""
    })
};
</script>
