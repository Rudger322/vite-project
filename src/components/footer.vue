<script setup>

</script>

<template>
<footer>
    <div class="footer_copyright">© 2021  Brand  All Rights Reserved.</div>
    <div class="footer_social">
        <div class="footer_social_block">
            <img src="../assets/facebook.svg" alt="Logo" class="footer_social_block_face"/>
        </div>
        <div class="footer_social_block">
            <img src="../assets/instagram.svg" alt="Logo" class="footer_social_block_inst"/>
        </div>
        <div class="footer_social_block">
            <img src="../assets/pinterest.svg" alt="Logo" class="footer_social_block_pint"/>
        </div>
        <div class="footer_social_block">
            <img src="../assets/twiter.svg" alt="Logo" class="footer_social_block_twit"/>
        </div>
    </div>
</footer>
</template>



<style scoped>
footer{
    flex-shrink: 0;
    height: 79px;
    background-color: #222222;
    width: 100vw;
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
}
.footer_copyright{
    color: #FBFBFB;
}
.footer_social{
    width: 148px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer_social_block{
    width: 32px;
    height: 32px;
    background-color: #FFFFFF;
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
}
.footer_social_block:hover{
    background-color: #F16D7F;
}
</style>
