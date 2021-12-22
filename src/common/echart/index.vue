<template>
    <div :id="id" :class="className" :style="{ height: height, width: width }"></div>
</template>

<script>
import tdTheme from './theme.json' // 引入默认主题
export default {
    name: 'echart',
    props: {
        id: String,
        className: String,
        height: String,
        width: String,
        options: Object
    },
    data() {
        return {
            chart : null 
        }
    },
    watch: {
        options : {
            handler(options) {
                this.chart.setOption(options, true)
            },
            deep: true
        }
    },
    mounted() {
        // 覆盖默认主题
        this.$echarts.registerTheme('tdTheme',tdTheme)
        // 渲染图表
        this.initChart();
    },
    beforeDestroy () {
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        initChart() {
            // 初始化
            this.chart = this.$echarts.init(this.$el, 'tdTheme')
            this.chart.setOption(this.options,true)
        }
    }

}
</script>

