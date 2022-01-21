
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
    backgroundColor: string|string[],
    data: Object|number[]
}

const props = defineProps<Properties>();
const colors = ['#ffc2b3', '#99e9ff', '#97e7a4', '#b6c1c9']
const opac_colors = ['#ffc2b3cc', '#99e9ffcc', '#97e7a4cc', '#b6c1c9cc']
const date: string = props.date
var yValues = props.data
var keys 
var datasets: dataset[]
if (props.type != 'pie') {
    keys = props.keys.map((key) => { return key }).slice(0, props.keys.length)
    datasets = yValues
        .filter((d) => {
            var ret_val = Object.values(d).
                map((dd: string) => {
                    return dd
                }).join().replaceAll(',', '') != ""
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
} else {
    keys = yValues.map(v=>{return Object.values(v)[0]})
    datasets = [{
        label: 'Dataset',
        backgroundColor: [],
        data:[]
    }]
    yValues.forEach((d:Object, i)=>{
        var label: string = `Dataset ${i}`
        datasets[0].backgroundColor.push(opac_colors[i % opac_colors.length])
        datasets[0].data.push(Object.values(d)[1])
    })
    // data.labels = []
    // data.datasets.forEach(dataset=>{
    //     data.labels.push(dataset.label)
    //     dataset.label = Object.values(dataset.data)[0]
    //     dataset.data = Object.values(dataset.data)[1]
    // })
}
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
            <h1 class="chart_headline">{{ props.name }}</h1>
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
.chart {
    width: 100%;
    height: 80%;
}
.statistic {
    position: relative;
    background: var(--anit_base);
    color: var(--base);
    min-height: 400px;
    width: 100%;
    margin-left: 10%;
}
.statistic + .statistic {
    margin-top: 5rem;
}
.chart_headline {
    font-size: 1.1rem;
}
</style>