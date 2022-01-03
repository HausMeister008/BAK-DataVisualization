
<script setup lang="ts">
import { onMounted } from 'vue'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { BarChart, LineChart, PieChart } from 'vue-chart-3'

interface description {
    name: string,
    paragraphs: string[] | string
}

export interface Properties {
    keys: Array<string>,
    data: Array<Object>,
    name: string,
    type: string,
    date: string,
}
interface dataset {
    label: string,
    backgroundColor: string,
    data: Object
}

const props = defineProps<Properties>();
const colors = ['rgb(255,99,132)', 'rgb(99,255,132)', 'rgb(99,190,200)', 'rgb(99,140,200)']
const opac_colors = ['rgba(255,99,132, .8)', 'rgba(99,255,132, .8)', 'rgba(99,190,200, .8)', 'rgba(99,140,200, .8)']
const date: string = props.date
var yValues = props.data
var keys = props.keys.map((key) => { return key }).slice(0, props.keys.length)

const datasets: Array<dataset> = yValues
    .filter((d) => {
        var ret_val = Object.values(d).map((dd: string) => { return dd }).join().replaceAll(',', '') != ""
        return ret_val
    })
    .map((d: Object, i) => {
        var label: string = d[date] ?? 'No Description'
        // removing the date from each dataset => doesnt show up on x-axis => no label when loading again
        if (i == yValues.length - 1) delete d[date]
        return {
            label: label,
            backgroundColor: opac_colors[i % opac_colors.length],
            borderColor: colors[i % colors.length],
            hoverBackgroundColor: colors[i % colors.length],
            poinHoverRadius: 1,
            pointRadius: 1,
            pointBorderColor: 'rgba(0,0,0,.5)',
            pointBorderWidth: 6,
            poinBorderHoverWidth: 7,
            pointHoverBackgroundColor: 'rgba(0,0,0,1)',
            fill: true,
            fillOpacity: .5,
            data: d
        }
    })
const data = {
    labels: keys,
    datasets: datasets
}
const options = {
    fill: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        }
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
        }
    }
}

</script>

<template>
    <div class="statistic">
        <div class="chart">
            <h1>{{ props.name }}</h1>
            <BarChart
                v-if="props.type == 'bar'"
                :chart-data="data"
                :options="options"
                class="chart"
            />
            <LineChart
                v-else-if="props.type == 'line'"
                :chart-data="data"
                :options="options"
                class="chart"
            />
            <PieChart
                v-else-if="props.type == 'pie'"
                :chart-data="data"
                :options="options"
                class="chart"
            />
        </div>
        <!-- <PieChart v-else :chart-data="data" :options="options" class="chart" /> -->
    </div>
</template>


<style scoped>
.chart_container {
    overflow: hidden;
    height: 45%;
    width: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.chart {
    width: 100%;
    height: 80%;
}
.statistic {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: var(--anit_base);
    color: var(--base);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
@media (min-width: 900px) {
    .statistic {
        flex-direction: row;
    }
    .chart_container,
    .description {
        height: 90%;
        width: 45%;
    }
}
.statistic + .statistic {
    margin-top: 5rem;
}
.statistic + .statistic {
    margin: 5vh 0;
}
</style>