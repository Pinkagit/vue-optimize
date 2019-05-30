<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">about</router-link>
        </div>
        <div>
            <p>
                If Element is successfully added to this project, you'll see an
                <code
                    v-text="'<el-button>'"
                ></code>
                below
            </p>
            <el-button>el-button</el-button>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "app",
    components: {}
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
