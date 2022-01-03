<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Statistic from './Statistic.vue'
import SiteHeader from './SiteHeader.vue'
import { ref, reactive, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { header, footer, data_contents } from './InfoSiteData.vue'
import ChartDescription, { DescriptionProperties } from './chartDescription.vue'


const route = useRoute()
const current_route = ref(route.params.route)
const content_footer = ref()
const content_header = ref()
const content_header_shown = ref(false)

interface datares {
  name: string,
  data: Array<Object>,
  keys: Array<string>,
  date: string
}
var data_order: Array<string> = reactive([])
const data: Array<datares> = reactive([])

async function load_data() {
  console.log('loading data')
  var res = await fetch('/api/data')
  var result: Array<datares> = await res.json()
  data_order.splice(0, data_order.length, ...result.map((r) => { return r.name }))
  data.splice(0, data.length, ...result)
  console.log(data_order)
  console.log(data)
}
onMounted(load_data)
watch(route, (n, o) => {
  current_route.value = route.params.route
  data.splice(0, data.length)
  load_data()
})

function check_header_in_viewport() {
  // console.log(content_header.value.isInViewport())
  // content_header_shown.value = content_header.value.isInViewport()
}

</script>

<template>
  <div class="info_site page" @scroll="check_header_in_viewport">
    <site-header />
    <div class="content">
      <h1 class="current_route_headline">{{ current_route }}</h1>
      <div class="scroll_to_header" v-if="!content_header_shown"></div>
      <div id="content_header" ref="content_header">
        <div class="header_description header_component">
          <p class="title_text">{{ header.title_text }}</p>
          <p v-for="paragraph in header.paragraphs" class="content_header_paragraph">{{ paragraph }}</p>
        </div>

        <div class="readon header_component">
          <img :src="header.readon.image" alt="Readon Image" class="readon_image" />
          <h3>{{ header.readon.headline }}</h3>
          <h2>{{ header.readon.description }}</h2>
          <button
            @click="content_footer.scrollIntoView()"
            id="readon_link_to_footer"
            class="same_page_link"
          >Weiterlesen</button>
        </div>
      </div>
      <div class="overview"></div>
      <div class="data_tag" v-for="content in data_contents">
        <chart-description
          v-if="content.paragraphs && content.orientation == 'left'"
          :headline="content.name"
          :content="content.paragraphs"
        />
        <statistic
          v-for="visual in content.visuals"
          :data="data[data_order.indexOf(visual.name)].data"
          :keys="data[data_order.indexOf(visual.name)].keys"
          :date="data[data_order.indexOf(visual.name)].date"
          :name="visual.name"
          :type="visual.type"
          class="statistic"
          v-if="data.length > 0 && data_order.length > 0"
        />
        <chart-description
          v-if="content.paragraphs && content.orientation == 'right'"
          :headline="content.name"
          :content="content.paragraphs"
        />
      </div>
      <!-- <statistic
        v-for="set, index in data"
        :data="set.data"
        :keys="set.keys"
        :name="set.name"
        :date="set.date"
        :description="data_contents[index]"
        :orientation="['left', 'right'][Math.floor(Math.random() * 2)]"
        :type="['bar', 'line'][Math.floor(Math.random() * 2)]"
        class="statistic"
      />-->
      <div id="content_footer" ref="content_footer">
        <h2 id="footer_headline" class="footer_component">{{ footer.headline }}</h2>
        <div class="footer_description footer_component">
          <p class="footer_description_text">{{ footer.description }}</p>
          <p v-for="paragraph in footer.paragraphs" class="content_footer_paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info_site {
  scroll-behavior: smooth;
  min-height: calc(100vh - var(--nav_height));
}
.content * {
  padding: 0 60px;
}
a,
.same_page_link {
  color: #e30613;
  font-size: 1rem;
  padding: 0 0.3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}
.current_route_headline {
  font-size: 3rem;
  margin: 0 0 3rem 60px;
}
#content_header,
#content_footer {
  background: #ffb7a6;
  padding: 30px 60px 30px 120px;
}
#content_header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  position: relative;
}
.header_description {
  max-width: 62.5%;
  position: relative;
  padding: 0 60px 0 0;
  box-sizing: border-box;
}
.readon {
  max-width: 37.5%;
  background: white;
  padding: 0 0 2rem 0;
  margin: 0;
  position: relative;
}
.readon_image {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}
.readon h2,
h3,
p,
button,
a {
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 0 !important;
}
.title_text {
  margin: 0;
  font-family: LibreFranklinMedium, Calibri, sans-serif;
}
.content_header_paragraph {
  margin: 0;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.content_header_paragraph + .content_header_paragraph {
  margin-top: 0;
}
#content_footer {
  min-height: calc(100vh - var(--nav_height));
  padding-left: 0;
  padding-right: 0;
}
.footer_description_text {
  font-family: LibreFranklinMedium, Calibri, sans-serif;
}
.content_footer_paragraph,
.footer_description_text {
  width: 100%;
  margin-inline: 0;
  padding: 0;
}
.footer_component {
  padding-left: 36px;
}
@media (min-width: 1000px) {
  .content_footer_paragraph,
  .footer_description_text {
    width: calc(50% - 21px);
    margin-inline: 0;
    padding: 0 0 0 6.5vw;
  }
  .footer_component {
    padding-left: 60px;
  }
}
.content_footer_paragraph {
  font-size: 1rem;
}
#footer_headline {
  font-family: LibreFranklinMedium, Calibri, sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
}
</style>
