<script setup>
import project1_image_1x from '~/assets/images/projects/project-1.jpg'
import project1_image_2x from '~/assets/images/projects/project-1@2x.jpg'
import project2_image_1x from '~/assets/images/projects/project-2.jpg'
import project2_image_2x from '~/assets/images/projects/project-2@2x.jpg'

const projects = [
  {
    image: {
      x1: project1_image_1x,
      x2: project1_image_2x
    },
    title: 'Дом в скандинавском стиле',
    description: `
      <p>Одноэтажный дом из газобетона габаритными размерами 10.73 x 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей</p>
      <p>Построен по индивидуальному проекту.</p>
    `
  },
  {
    image: {
      x1: project2_image_1x,
      x2: project2_image_2x
    },
    title: 'Дом из газобетона',
    description: `
      <p>Одноэтажный дом габаритными размерами 15.2 x 9.7м. Приведенная площадь – 127.7 м.кв.</p>
      <p>Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.</p>
    `
  }
]
</script>

<template>
  <div class="list">
    <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :description="project.description"
        :image="project.image"
    />
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/mixins" as mixins;

.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @include mixins.large {
    grid-template-columns: 1fr;
  }

  @include mixins.small {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 16px;
    scroll-snap-type: x mandatory;
    padding: 0 0 20px 0;
    margin: 0;
    width: 100%;

    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    & > * {
      scroll-snap-align: start;
      min-width: 100%;
      width: 100%;
      flex-shrink: 0;

      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>