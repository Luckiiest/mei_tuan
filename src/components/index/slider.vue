<template>
    <div class="slider-img-div">
        <el-carousel height="240px" class="">
            <el-carousel-item v-for="item in imgList" :key="item.img">
                <img :src="item.img" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: [
                {
                    url: '#xxx',
                    img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
                },
                {
                    url: '#xxx',
                    img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
                },
                {
                    url: '#xxx',
                    img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
                },
            ],
        }
    },
}
</script>

<style>
</style>