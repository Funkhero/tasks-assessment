<script>
export default {
  name: 'TTitle',
  props: {
    size: {
      type: String,
      default: '1',
      validator(value) {
        return ['1', '2', '3', '4'].includes(value);
      },
    },
  },
  render(createElement) {
    return createElement(
      `h${this.size}`,
      {
        class: [
          't-title',
          `t-title_size_${this.size}`,
        ],
      },
      this.$slots.default,
    );
  },
};
</script>

<style lang="scss" scoped>
  .t-title {
    line-height: 1.2;
    &_size {
      &_1 {
        font-size: 21px;
        text-transform: uppercase;
      }
      &_2 {
        font-size: 17px;
      }
      &_3 {
        font-size: 15px;
        font-weight: 500;
      }
      &_4 {
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
</style>
