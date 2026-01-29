<template>
  <section class="hero-section" ref="heroSection">
    <div class="slider-container">

      <div class="swiper-outer-wrapper">
        <Swiper
            ref="swiperRef"
            :modules="[Navigation, Pagination]"
            :slides-per-view="1"
            :loop="true"
            :observer="true"
            :observe-parents="true"
            :observe-slide-children="true"
            @slideChange="onSlideChange"
            @swiper="onSwiper"
            class="my-swiper"
        >
          <SwiperSlide v-for="(slide, index) in slides" :key="index">
            <div class="slide-content">
              <figure class="slide-figure">
                <picture>
                  <source
                      media="(min-width: 768px)"
                      :srcset="`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1} 1x`"
                  />
                  <source
                      :srcset="`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1} 1x`"
                  />
                  <img
                      :src="slide.image_landscape.x1"
                      :alt="slide.alt"
                      class="slide-img"
                      loading="eager"
                  />
                </picture>
              </figure>

              <div class="slide-text-overlay">
                <h1 class="main-title">{{ slide.mainTitle }}</h1>
                <p class="main-description">{{ slide.mainDescription }}</p>
              </div>
            </div>
          </SwiperSlide>

          <SliderControls
              :total="slides.length"
              :current="currentIndex"
              @prev="slidePrev"
              @next="slideNext"
              @go-to="goToSlide"
          />
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import SliderControls from '~/components/SliderControls.vue'

import s1L1x from '~/assets/images/slides/slide-1-landscape.jpg'
import s1L2x from '~/assets/images/slides/slide-1-landscape@2x.jpg'
import s1P1x from '~/assets/images/slides/slide-1-portrait.jpg'
import s1P2x from '~/assets/images/slides/slide-1-portrait@2x.jpg'

import s2L1x from '~/assets/images/slides/slide-2-landscape.jpg'
import s2L2x from '~/assets/images/slides/slide-2-landscape@2x.jpg'
import s2P1x from '~/assets/images/slides/slide-2-portrait.jpg'
import s2P2x from '~/assets/images/slides/slide-2-portrait@2x.jpg'

import s3L1x from '~/assets/images/slides/slide-3-landscape.jpg'
import s3L2x from '~/assets/images/slides/slide-3-landscape@2x.jpg'
import s3P1x from '~/assets/images/slides/slide-3-portrait.jpg'
import s3P2x from '~/assets/images/slides/slide-3-portrait@2x.jpg'

const slides = [
  {
    image_landscape: { x1: s1L1x, x2: s1L2x },
    image_portrait: { x1: s1P1x, x2: s1P2x },
    alt: 'Современный загородный дом с бассейном',
    mainTitle: 'Проектируем и строим загородные дома',
    mainDescription: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений. Гарантируем качество и соблюдение сроков.'
  },
  {
    image_landscape: { x1: s2L1x, x2: s2L2x },
    image_portrait: { x1: s2P1x, x2: s2P2x },
    alt: 'Уютный дом в горах',
    mainTitle: 'Индивидуальные проекты для каждой семьи',
    mainDescription: 'Создаем уникальные архитектурные решения с учетом ваших пожеланий и особенностей участка.'
  },
  {
    image_landscape: { x1: s3L1x, x2: s3L2x },
    image_portrait: { x1: s3P1x, x2: s3P2x },
    alt: 'Коттедж с панорамными окнами',
    mainTitle: 'Полный цикл работ от идеи до реализации',
    mainDescription: 'От разработки концепции до сдачи объекта «под ключ» с гарантией качества всех работ.'
  }
]

const currentIndex = ref(0)
const swiperInstance = ref(null)
const swiperRef = ref(null)
const heroSection = ref(null)

const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex
}

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
  console.log('Swiper initialized, width:', swiper.width)

  setTimeout(() => {
    if (swiperInstance.value) {
      swiperInstance.value.update()
      swiperInstance.value.updateSize()
    }
  }, 50)
}

const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}

const goToSlide = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideToLoop(index)
  }
}

const handleResize = () => {
  if (swiperInstance.value) {
    setTimeout(() => {
      swiperInstance.value.update()
      swiperInstance.value.updateSize()
    }, 100)
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)

  setTimeout(() => {
    if (swiperInstance.value) {
      swiperInstance.value.update()
      swiperInstance.value.updateSize()
    }
  }, 200)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.hero-section {
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 0 88px;
  margin: 0 auto;

  @include mixins.large {
    padding: 0 32px;
  }

  @include mixins.small {
    padding: 0 16px;
  }
}

.slider-container {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  height: 480px;
  width: 100%;
  display: block;
  min-width: 100%;

  @include mixins.large {
    height: 400px;
  }

  @include mixins.small {
    height: 380px;
    border-radius: 20px;
  }
}

.swiper-outer-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  min-width: 100%;
}

.my-swiper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  display: block;
}

.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-text-overlay {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 20;
  max-width: 459px;
  color: vars.$color-white;
  text-align: left;
  pointer-events: none;
  padding-left: 144px;

  @include mixins.large {
    padding-left: 100px;
    max-width: 459px;
  }

  @include mixins.medium {
    padding-left: 40px;
    padding-right: 40px;
    max-width: 100%;
  }

  @include mixins.small {
    padding: 0 24px;
    left: 0;
    right: 0;
    top: auto;
    bottom: 60px;
    transform: none;
    max-width: none;
    text-align: center;
  }
}

.main-title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 46px;
  line-height: 1.1;
  margin: 0 0 24px 0;

  @include mixins.large {
    font-size: 42px;
  }

  @include mixins.small {
    font-size: 19px;
    margin-bottom: 12px;
  }
}

.main-description {
  font-family: vars.$font-base;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  opacity: 0.9;

  @include mixins.small {
    font-size: 14px;
  }
}

.slide-figure {
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: vars.$color-gray;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

</style>