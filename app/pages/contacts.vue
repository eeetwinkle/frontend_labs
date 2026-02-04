<script setup>
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapControls,
  YandexMapZoomControl,
  YandexMapGeolocationControl,
} from "vue-yandex-maps";
import { mockContacts } from '~/mock/contacts'
import ContactsInfo from "~/components/ContactsInfo.vue";

const { address } = mockContacts

</script>

<template>
  <div class="page-contacts">
    <div class="container">

      <Breadcrumbs currentText="Контакты" />

      <div class="contacts-wrapper">
        <div class="info-column">
          <h1 class="page-title">Контакты</h1>
          <ContactsInfo theme="contact-page"/>
        </div>

        <div class="map-column">
          <ClientOnly>
            <yandex-map
                :settings="{
              location: { center: address.coords, zoom: 10 },
            }"
            >
              <yandex-map-default-scheme-layer />
              <yandex-map-default-features-layer />
              <yandex-map-controls :settings="{ position: 'right' }">
                <yandex-map-zoom-control />
              </yandex-map-controls>
              <yandex-map-controls :settings="{ position: 'top left' }">
                <yandex-map-geolocation-control />
              </yandex-map-controls>
              <yandex-map-default-marker
                  :settings="{ coordinates: address.coords }"
              />
            </yandex-map>
          </ClientOnly>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;
@use "~/assets/scss/mixins" as mixins;

.page-contacts {
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
  line-height: 1.2;
  margin: 0 0 32px 0;
  color: vars.$color-black;

  @include mixins.small {
    font-size: 28px;
    margin-bottom: 24px;
  }
}

.contacts-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
  align-items: start;

  @include mixins.large {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.info-column {
  padding-left: 170px;
  display: flex;
  flex-direction: column;
  @include mixins.large {
    padding-left:0;
  }
}

.map-column {
  width: 100%;
  height: 360px;
  background-color: #eee;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  @include mixins.small {
    height: 300px;
  }

  :deep(.yandex-map) {
    width: 100%;
    height: 100%;
  }
}
</style>