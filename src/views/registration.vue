<template>
    <form class="regform">
        <h1>Your Name</h1>
        <input type="text" placeholder="First Name">
        <input type="text" placeholder="Last Name">
        <input type="checkbox" placeholder="Male">
        <input type="checkbox" placeholder="Female">
        <h1>Login details</h1>
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Password">
        <input type="submit" value="JOIN NOW">
    </form>
</template>

<style scoped>
.regform{
    display: flex;
    flex-direction: column;
}
</style>