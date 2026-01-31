<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationPrev,
  PaginationNext
} from 'radix-vue'
import arrowIcon from '~/assets/images/next.svg'

const props = defineProps({
  total: { type: Number, required: true },
  itemsPerPage: { type: Number, default: 12 },
  currentPage: { type: Number, default: 1 }
})

const emit = defineEmits(['update:page'])

const totalPages = computed(() => Math.ceil(props.total / props.itemsPerPage))

const pagesToShow = computed(() => {
  const pages = []
  const current = props.currentPage
  const total = totalPages.value

  pages.push(1)

  if (current > 3) {
    pages.push('ellipsis-start')
  }

  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
    if (i > 1 && i < total) {
      pages.push(i)
    }
  }

  if (current < total - 2) {
    pages.push('ellipsis-end')
  }

  if (total > 1) {
    pages.push(total)
  }

  return pages.filter((page, index, array) =>
      array.indexOf(page) === index && page !== 'ellipsis-start' && page !== 'ellipsis-end' ?
          page > 0 && page <= total : true
  )
})
</script>

<template>
  <div v-if="totalPages > 1" class="pagination-root">
    <PaginationRoot
        :total="total"
        :items-per-page="itemsPerPage"
        :page="currentPage"
        class="pagination-inner"
        @update:page="(val) => emit('update:page', val)"
    >
      <PaginationList class="pages-wrapper">
        <PaginationPrev class="page-btn prev">
          <img :src="arrowIcon" alt="prev" class="arrow-icon prev-icon" />
        </PaginationPrev>

        <template v-for="(pageNum, index) in pagesToShow" :key="index">
          <PaginationListItem
              v-if="pageNum !== 'ellipsis-start' && pageNum !== 'ellipsis-end'"
              :value="pageNum"
              class="page-btn"
          >
            {{ pageNum }}
          </PaginationListItem>

          <div v-else class="page-btn dots-box">
            &#8230;
          </div>
        </template>

        <PaginationNext class="page-btn next-green">
          <img :src="arrowIcon" alt="next" class="arrow-icon white" />
        </PaginationNext>
      </PaginationList>
    </PaginationRoot>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/scss/variables" as vars;

.pagination-root {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.pagination-inner {
  display: flex;
  justify-content: center;
}

.pages-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.page-btn {
  width: 36px;
  height: 36px;
  border: 1px solid vars.$color-border;
  background: vars.$color-white;
  border-radius: 8px;
  font-family: vars.$font-base;
  font-weight: 600;
  font-size: 14px;
  color: vars.$color-black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  padding: 0;
  box-sizing: border-box;

  &:hover:not(.dots-box):not([disabled]) {
    border-color: vars.$color-green;
    color: vars.$color-green;
  }

  &[data-selected] {
    background: vars.$color-footer;
    color: vars.$color-white;
    border-color: vars.$color-footer;

    &:hover {
      opacity: 0.9;
    }
  }

  &[disabled] {
    opacity: 0.5;
    cursor: default;
    border-color: vars.$color-border;
  }
}

.prev {
  margin-right: 12px;
}

.next-green {
  margin-left: 12px;
  background: vars.$color-green;
  border-color: vars.$color-green;

  &:hover:not([disabled]) {
    background: vars.$color-green;
    border-color: vars.$color-green;
    opacity: 0.9;
    color: white;
  }
}

.dots-box {
  cursor: default;
  border: none;
  &:hover {
    color: vars.$color-black;
  }
}

.arrow-icon {
  width: 10px;
  height: 10px;
  object-fit: contain;
  display: block;
}

.prev-icon {
  transform: rotate(180deg);
  filter: brightness(0);
}

.arrow-icon.white {
  filter: brightness(0) invert(1);
}
</style>