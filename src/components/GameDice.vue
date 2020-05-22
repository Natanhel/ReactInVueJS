<template>
  <span class="dice">{{ dice.icon }}</span>
</template>

<script>
export default {
  name: 'GameDie',
  props: {
      value: {
          type: Number,
          default: undefined
      },
  },
  data() {
    return {
      dieFaces: [
        {
          value: undefined,
          icon: '🎲',
        },
        {
          value: 1,
          icon: '⚀',
        },
        {
          value: 2,
          icon: '⚁',
        },
        {
          value: 3,
          icon: '⚂',
        },
        {
          value: 4,
          icon: '⚃',
        },
        {
          value: 5,
          icon: '⚄',
        },
        {
          value: 6,
          icon: '⚅',
        },
      ]
    };
  },
  computed: {
    dice() {
      return this.dieFaces.filter((el) => el.value === this.value).shift();
    },
  }
};
</script>

<style scoped>
  .dice {
    font-size: 4em;
  }
</style>