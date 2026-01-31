<script setup>
import news1_image_1x from '~/assets/images/news/news-1.jpg'
import news1_image_2x from '~/assets/images/news/news-1@2x.jpg'
import news2_image_1x from '~/assets/images/news/news-2.jpg'
import news2_image_2x from '~/assets/images/news/news-2@2x.jpg'
import news3_image_1x from '~/assets/images/news/news-3.jpg'
import news3_image_2x from '~/assets/images/news/news-3@2x.jpg'
import news4_image_1x from '~/assets/images/news/news-4.jpg'
import news4_image_2x from '~/assets/images/news/news-4@2x.jpg'
import NewsCard from "~/components/NewsCard.vue";

const newsItems = [
  {
    image: { x1: news1_image_1x, x2: news1_image_2x },
    date: '20 авг 2021',
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект...'
  },
  {
    image: { x1: news2_image_1x, x2: news2_image_2x },
    date: '20 авг 2021',
    title: 'Почему Гуд Вилл строит лучшие дома?',
    description: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...'
  },
  {
    image: { x1: news3_image_1x, x2: news3_image_2x },
    date: '20 авг 2021',
    title: 'Преимущества и недостатки частного дома',
    description: 'Первое и главное: строим дом индивидуально для вас, по вашим...'
  },
  {
    image: { x1: news4_image_1x, x2: news4_image_2x },
    date: '20 авг 2021',
    title: 'Из чего мы строим дома в ипотеку?',
    description: 'Самый популярный вопрос наших клиентов касается материалов, которы...'
  }
]
</script>
<template>
  <section class="news-section">
    <div class="container">
      <div class="header-row">
        <h2 class="section-title">Новости</h2>
        <button class="btn-all">Все новости</button>
      </div>

      <div class="grid">
        <NewsCard
            v-for="(item, index) in newsItems"
            :key="index"
            :image="item.image"
            :date="item.date"
            :title="item.title"
            :description="item.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.news-section {
  //padding-bottom: 100px;
  width: 100%;

  padding: 40px 0 100px 0;
  @include mixins.large {
    padding: 30px 0 40px 0;
    overflow: visible;
  }
}
.container {
  margin-left: 88px;
  margin-right: 88px;
  margin-top: 40px;
  box-sizing: border-box;

  @include mixins.large {
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 30px;
  }

  @include mixins.small {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
  }
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  padding: 0 16px;

  @include mixins.small {
    margin-bottom: 24px;
    padding: 0 16px;
  }
}

.section-title {
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 36px;
  margin: 0;
  color: vars.$color-black;

  @include mixins.small {
    font-size: 24px;
  }
}

.btn-all {
  background: transparent;
  border: 1px solid vars.$color-green;
  border-radius: 10px;
  padding: 12px 24px;
  color: vars.$color-green;
  font-family: vars.$font-base;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @include mixins.small {
    padding: 8px 16px;
    font-size: 12px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @include mixins.large {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @include mixins.small {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 16px;
    scroll-snap-type: x mandatory;
    padding: 0 16px 20px 16px;
    -webkit-overflow-scrolling: touch;

    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    & > * {
      scroll-snap-align: start;
      min-width: calc(100vw - 32px);
      max-width: calc(100vw - 32px);
      width: calc(100vw - 32px);
      flex-shrink: 0;
    }
  }
}
</style>