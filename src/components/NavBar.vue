<template>
    <nav>
        <ul>
            <li><router-link exact-active-class="active" to="/">Toi</router-link></li>
            <li><router-link exact-active-class="active" to="/home">Trang chủ</router-link></li>
            <li><router-link to="/about" exact-active-class="active">Giới thiệu</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    background: #333;
    padding: 10px;
    position: absolute;
    width: 100%;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

li {
    margin-right: 15px;
}

a {
    color: white;
    text-decoration: none;
}

.active {
    color: yellow;
    text-decoration: underline;
}
</style>
