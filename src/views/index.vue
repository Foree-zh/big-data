<template>
    <div id="index" ref='appRef'>
        <div class="bg">
            <dv-loading v-if="loading">Loading...</dv-loading>
            <div v-else class="host-body">
                <div class="d-flex jc-center">
                    <dv-decoration-10 class="dv-dec-10" />
                    <div class="d-flex jc-center">
                        <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
                        <div class="title">
                            <span class="title-text">大数据可视化平台</span>
                            <dv-decoration-6
                                class="dv-dec-6"
                                :reverse="true"
                                :color="['#50e3c2', '#67a1e5']"
                            />
                        </div>
                        <dv-decoration-8
                            class="dv-dec-8"
                            :reverse="true"
                            :color="['#568aea', '#000000']"
                        />
                    </div>
                    <dv-decoration-10 class="dv-dec-10-s" />
                </div>
                <div class="sc-gtssRu hJiyyL">
                    <div class="sc-eCApGN dmbwgC">
                        <div class="sc-jSFkmK itDiMY">
                            <dv-border-box-12></dv-border-box-12>
                        </div>
                        <div class="sc-gKAblj dnurfJ">
                            <dv-border-box-12></dv-border-box-12>
                        </div>
                    </div>
                    <div class="sc-fujyUd cxFVJQ">
                        <div class="map">
                            <center-echart></center-echart>
                        </div>
                        <div class="sc-pNWxx fVgJYJ">
                            <dv-border-box-13></dv-border-box-13>
                        </div>
                    </div>
                    <div class="sc-jrsJCI cnQfhD">
                        <div class="sc-kEqYlL boKqOl">
                            <dv-border-box-12></dv-border-box-12>
                        </div>
                        <div class="sc-iqAbSa itGLSs">
                            <dv-border-box-12></dv-border-box-12>
                        </div>
                        <div class="sc-crzoUp hjxFHG">
                            <dv-border-box-12></dv-border-box-12>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CenterEchart from '@/components/center/index'
export default {
    name: 'Home',
    components: {
        CenterEchart
    },
    data() {
        return {
            loading: false
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
