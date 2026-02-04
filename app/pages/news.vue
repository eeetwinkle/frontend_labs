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

const baseNews = [
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

const itemsPerPage = 12
const currentPage = ref(1)

const getPaginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const result = []

  for (let i = 0; i < itemsPerPage; i++) {
    const newsIndex = (start + i) % baseNews.length
    result.push({ ...baseNews[newsIndex] })
  }

  return result
})

const onPageChange = (page) => {
  currentPage.value = page
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="page-news">
    <div class="container">
      <Breadcrumbs currentText="Новости" />

      <h1 class="page-title">Новости</h1>

      <div class="news-grid">
        <NewsCard
            v-for="(item, index) in getPaginatedNews"
            :key="`${currentPage}-${index}`"
            :image="item.image"
            :date="item.date"
            :title="item.title"
            :description="item.description"
        />
      </div>

      <Pagination
          :total="100"
          :items-per-page="itemsPerPage"
          :current-page="currentPage"
          @update:page="onPageChange"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.page-news {
  padding-top: 40px;
  padding-bottom: 100px;
}

.container {
  width: 100%;
  padding: 0 88px;
  box-sizing: border-box;
  margin: 0 auto;

  @include mixins.large {
    padding: 0 32px;
  }

  @include mixins.small {
    padding: 0 16px;
  }
}

.page-title {
  text-align: left;
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 46px;
  margin: 0 0 40px 0;
  color: vars.$color-black;

  @include mixins.small {
    font-size: 28px;
    margin-bottom: 24px;
  }
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @include mixins.large {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mixins.small {
    grid-template-columns: 1fr;
  }
}
</style>