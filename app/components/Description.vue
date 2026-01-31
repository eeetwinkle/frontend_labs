<template>
  <section class="info-section">
    <div class="info-grid">
      <h2 class="info-title">
        Каждый проект<br>для нас — важный
      </h2>

      <div class="info-description">
        <p class="info-text">
          Мы строительная компания полного цикла.
        </p>
        <p class="info-text">
          Вникаем во все детали, разрабатываем планировку будущего дома,
          продумываем конструктивные решения и общую архитектурную концепцию
        </p>
      </div>

      <article class="stat-card">
        <img
            src="~/assets/images/home.svg"
            alt="Дом"
            class="stat-icon"
            width="24"
            height="24"
        />
        <div class="stat-content">
          <h3 class="stat-number">57 домов</h3>
          <p class="stat-label">
            спроектировали и построили «под ключ»
          </p>
        </div>
      </article>

      <article class="stat-card">
        <img
            src="~/assets/images/calendar.svg"
            alt="Календарь"
            class="stat-icon"
            width="24"
            height="24"
        />
        <div class="stat-content">
          <h3 class="stat-number">14 лет</h3>
          <p class="stat-label">
            мы на рынке загородного строительства
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.info-section {
  width: 100%;
  padding: 100px 88px;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: left;

  @include mixins.large {
    padding: 60px 32px;
  }

  @include mixins.small {
    padding: 40px 16px;
  }
}

.info-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto auto;
  column-gap: 20px;
  row-gap: 40px;
  align-items: stretch;

  @include mixins.large {
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
  }

  @include mixins.small {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.info-title {
  grid-column: 1;
  grid-row: 1;
  font-family: vars.$font-title;
  font-weight: 700;
  font-size: 38px;
  line-height: 1.2;
  margin: 0;
  color: vars.$color-black;

  @include mixins.large {
    grid-column: 1 / -1;
  }

  @include mixins.small {
    font-size: 24px;
    margin-bottom: 8px;
  }
}

.info-description {
  grid-column: 1;
  grid-row: 2;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include mixins.large {
    grid-column: 1 / -1;
    padding-right: 0;
    gap: 20px;
  }
}

.info-text {
  font-family: vars.$font-base;
  font-size: 20px;
  line-height: 1.6;
  color: vars.$color-gray;
  margin: 0;
  max-width: 480px;

  @include mixins.large {
    max-width: 100%;
  }
}

.stat-card {
  background-color: vars.$color-light-gray;;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;

  &:first-of-type {
    grid-column: 2;
    grid-row: 2;
  }

  &:last-of-type {
    grid-column: 3;
    grid-row: 2;
  }

  @include mixins.large {
    height: auto;

    &:first-of-type {
      grid-column: 1;
      grid-row: 3;
    }

    &:last-of-type {
      grid-column: 2;
      grid-row: 3;
    }
  }
}

.stat-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 16px;
  display: block;
}

.stat-number {
  font-family: vars.$font-title;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  color: vars.$color-black;
  margin: 0 0 6px 0;

  @include mixins.small {
    font-size: 24px;
  }
}

.stat-label {
  font-family: vars.$font-base;
  font-size: 20px;
  line-height: 1.4;
  color: vars.$color-gray;
  margin: 0;
}
</style>