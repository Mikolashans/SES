<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  label: string
  class?: string
}>()

const computedClass = computed(() => {
  return props.class ? [props.class] : [];
});

</script>
<template>
  <div>
    <button :class="computedClass">
      <p>{{ props.label }}</p>
      <svg class="button-inside" width="16" height="16" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_6331_34572)">
          <path id="color"
            d="M18.374 2.6625L12.8727 2.63422C12.7407 2.63368 12.6099 2.65928 12.4878 2.70955C12.3658 2.75982 12.2549 2.83376 12.1615 2.92711C12.0682 3.02045 11.9942 3.13136 11.944 3.25342C11.8937 3.37549 11.8681 3.5063 11.8686 3.63831C11.8694 3.9025 11.9747 4.15564 12.1615 4.34244C12.3483 4.52925 12.6015 4.63455 12.8657 4.63533L17.9215 4.65655L3.50356 19.0745C3.31602 19.262 3.21067 19.5163 3.21067 19.7816C3.21067 20.0468 3.31602 20.3011 3.50356 20.4887C3.6911 20.6762 3.94545 20.7816 4.21067 20.7816C4.47588 20.7816 4.73024 20.6762 4.91777 20.4887L19.3781 6.02833L19.371 11.1407C19.3705 11.2727 19.3961 11.4035 19.4464 11.5256C19.4966 11.6477 19.5706 11.7586 19.6639 11.8519C19.7573 11.9453 19.8682 12.0192 19.9902 12.0695C20.1123 12.1197 20.2431 12.1453 20.3751 12.1448C20.5071 12.1453 20.638 12.1197 20.76 12.0695C20.8821 12.0192 20.993 11.9453 21.0863 11.8519C21.1797 11.7586 21.2536 11.6477 21.3039 11.5256C21.3542 11.4035 21.3798 11.2727 21.3792 11.1407L21.3721 5.66064C21.3717 4.86563 21.0556 4.10334 20.4935 3.54118C19.9313 2.97903 19.169 2.663 18.374 2.6625Z"
            fill="#FFF" />
        </g>
        <defs>
          <clipPath id="clip0_6331_34572">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>

  </div>

</template>

<style lang="less" scoped>
@accent-secondary-default: #fff;
@accent-secondary-hover: #ccb076;
@text-dark-primary: #0a0a0a;
@border-radius: 8px;

.button-inside {
  position: absolute;
  top: 28px;
  right: 14px;

}

.btn {
  position: relative;
  display: flex;
  width: 169px;
  height: 60px;
  padding-top: 9px;
  padding-left: 15px;
  border-radius: 8px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button__details {
  background-color: transparent;
  border: 1px solid #FFFFFF40;

  p {
    margin: 0;
    color: #fff;
    font-weight: 450;
    font-size: 18px;
    line-height: 100%;
    text-align: left;
  }
}

.button__test {
  border: none;
  background-color: #fff;

  #color {
    fill: #0A0A0A;
  }

  p {
    margin: 0;
    font-size: 18px;
    font-weight: 450;
    line-height: 100%;
    color: #0a0a0a;
    text-align: left;
  }
}

.button__desabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button__request {
  width: 215px;
  background-color: #0a0a0a;
  padding-top: 6px;

  p {
    margin: 0;
    color: #fff;
    font-weight: 450;
    font-size: 18px;
    line-height: 100%;
  }
}

.button__all {
  border-radius: 8px;
  border-color: #0A0A0A40;
  padding-top: 6px;
  cursor: pointer;

  #color {
    fill: #0A0A0A;
  }

  p {
    font-weight: 450;
    font-size: 18px;
    line-height: 100%;
    margin: 0;
  }
}

.button__all-sert {
  width: 222px;
  border-radius: 8px;
  border-color: #0A0A0A40;
  padding-top: 6px;
  cursor: pointer;

  #color {
    fill: #0A0A0A;
  }

  p {
    font-weight: 450;
    font-size: 18px;
    line-height: 100%;
    margin: 0;
  }
}

.button__sertificate {
  border: none;
  font-weight: 450;
  font-size: 18px;
  line-height: 100%;
  color: #0A0A0A;
  background-color: transparent;
}

@media (max-width: 1440px) {
  .btn {
    width: 150px;
    height: 50px;

    p {
      font-size: 16px;
    }
  }

  .button-inside {
    top: 22px;
    right: 16px;
  }

  .button__request {
    width: 187px;
  }

  .button__all-sert {
    width: 196px;
    padding-top: 9px;
  }

  .button__sertificate {
    font-size: 16px;
  }
}

@media (max-width:768px) {
  .button__request {
    position: absolute;
    bottom: 30px;
    right: 25px;
  }

  .button__all {
    padding-top: 10px;
  }
}

@media(min-width: 320px) and (max-width: 768px) {
  .button__request {
    right: 78px;
    bottom: 90px;
  }

  .button__all,
  .button__all-sert {
    position: absolute;
    left: 0;
  }

  .button__all {
    bottom: -403px;
  }

  .button__all-sert {
    bottom: -340px;
  }
}
</style>