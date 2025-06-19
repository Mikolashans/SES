<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'Slider',
  setup() {
    const slides = [
      // { image: '/car-slid1.jpg', title: 'Слайд 1' },
      // { image: '/car-slid2.jpg', title: 'Слайд 2' },
      // { image: '/car-slid3.jpg', title: 'Слайд 3' },
      // { image: '/car-slid4.jpg', title: 'Слайд 4' },
      // { image: '/car-slid5.jpg', title: 'Слайд 5' },
      { image: '/car-slid6.png', title: 'Слайд 6' },
      { image: '/car-slid6.png', title: 'Слайд 6' }
    ];

    const currentIndex = ref(0);
    const progress = ref(0);
    let intervalId = null; // для хранения ID таймера

    const updateProgress = () => {
      progress.value = ((currentIndex.value + 1) / slides.length) * 100;
    };

    const prevSlide = () => {
      if (currentIndex.value === 0) {
        currentIndex.value = slides.length - 1;
      } else {
        currentIndex.value--;
      }
      updateProgress()
    };

    const nextSlide = () => {
      if (currentIndex.value === slides.length - 1) {
        currentIndex.value = 0;
      } else {
        currentIndex.value++;
      }
      updateProgress()
    };

    onMounted(() => {
      intervalId = setInterval(() => {
        nextSlide();
      }, 140000);
      updateProgress()
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });


    const onFileChange = (event) => {
      const files = event.target.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          slides.value.push({ image: e.target.result });
          currentIndex.value = slides.value.length - 1;
        };
        reader.readAsDataURL(files[0]);
      }
    };

    return {
      slides,
      currentIndex,
      prevSlide,
      nextSlide,
      progress,
      onFileChange
    };
  },
};
</script>
<template>
  <div class="slider-container">
    <div class="slides">
      <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: index === currentIndex }">
        <img :src="slide.image" :alt="slide.title" />
      </div>
    </div>
    <div class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
    <div class="btn-group">
      <button class=" btn btn1" @click="prevSlide">
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.33326 6.59168C2.25515 6.51421 2.19315 6.42204 2.15085 6.32049C2.10854 6.21894 2.08676 6.11002 2.08676 6.00001C2.08676 5.89 2.10854 5.78108 2.15085 5.67953C2.19315 5.57798 2.25515 5.48581 2.33326 5.40834L6.15826 1.59168C6.23636 1.51421 6.29836 1.42204 6.34067 1.32049C6.38298 1.21894 6.40476 1.11002 6.40476 1.00001C6.40476 0.889999 6.38298 0.781078 6.34067 0.679529C6.29836 0.577979 6.23636 0.485812 6.15826 0.408343C6.00212 0.253134 5.79091 0.166016 5.57076 0.166016C5.3506 0.166016 5.13939 0.253134 4.98326 0.408343L1.15826 4.23334C0.690089 4.70209 0.427124 5.33751 0.427124 6.00001C0.427124 6.66251 0.690089 7.29792 1.15826 7.76668L4.98326 11.5917C5.13847 11.7456 5.34797 11.8324 5.56659 11.8333C5.67626 11.834 5.78498 11.813 5.88651 11.7715C5.98804 11.73 6.08039 11.6689 6.15826 11.5917C6.23636 11.5142 6.29836 11.422 6.34067 11.3205C6.38298 11.2189 6.40476 11.11 6.40476 11C6.40476 10.89 6.38298 10.7811 6.34067 10.6795C6.29836 10.578 6.23636 10.4858 6.15826 10.4083L2.33326 6.59168Z"
            fill="#0A0A0A" />
        </svg>
      </button>
      <button class=" btn btn2" @click="nextSlide">
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.33357 4.23334L1.50857 0.408343C1.35243 0.253134 1.14122 0.166016 0.921065 0.166016C0.700911 0.166016 0.489701 0.253134 0.333565 0.408343C0.255458 0.485812 0.193463 0.577979 0.151156 0.679529C0.108849 0.781078 0.0870667 0.89 0.0870667 1.00001C0.0870667 1.11002 0.108849 1.21894 0.151156 1.32049C0.193463 1.42204 0.255458 1.51421 0.333565 1.59168L4.1669 5.40834C4.24501 5.48581 4.307 5.57798 4.34931 5.67953C4.39162 5.78108 4.4134 5.89 4.4134 6.00001C4.4134 6.11002 4.39162 6.21894 4.34931 6.32049C4.307 6.42204 4.24501 6.51421 4.1669 6.59168L0.333565 10.4083C0.176645 10.5642 0.0880499 10.7759 0.0872685 10.9971C0.0864871 11.2182 0.173585 11.4306 0.329399 11.5875C0.485214 11.7444 0.696983 11.833 0.918119 11.8338C1.13926 11.8346 1.35165 11.7475 1.50857 11.5917L5.33357 7.76668C5.80173 7.29793 6.0647 6.66251 6.0647 6.00001C6.0647 5.33751 5.80173 4.7021 5.33357 4.23334Z"
            fill="#0A0A0A" />
        </svg>
      </button>
    </div>

  </div>
</template>



<style scoped lang="less">
.progress-bar {
  left: 100px;
  width: 82%;
  height: 1px;
  bottom: 40px;
  position: absolute;
  display: flex;
  z-index: 5;
  overflow: hidden;
  border-radius: 8px;
}

.progress {
  height: 10px;
  background-color: #fff;
  opacity: .5;
  transition: width 0.4s linear;
}

.slider-container {
  width: 100%;
  height: 914px;
  overflow: hidden;
  position: relative;
}

.slides {
  display: flex;
}

.slide {
  min-width: 100%;
  display: none;
}

.slide.active {
  display: block;
  padding-top: 80px;

  & img {
    height: 914px;
  }
}

img {
  width: 100%;
  height: auto;
  height: 701px;
}

.btn-group {
  box-sizing: border-box;
  position: absolute;
  display: flex;
  bottom: 40px;
  right: 100px;
  width: 120px;
  height: 60px;
  padding: 15px;
  border: 1px solid #FFFFFF40;
  border-radius: 8px;
  background-color: transparent;
}

.btn-group::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 10px;
  background-color: #FFFFFF40;
}

.btn-group::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 2px;
  height: 10px;
  background-color: #FFFFFF40;
}

.btn {
  width: 50%;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.btn1 {
  transition: transform ease-out 0.5s;

  &:hover {
    transform: translateX(-15px);
  }
}

.btn2 {
  transition: transform ease-out 0.5s;

  &:hover {
    transform: translateX(15px);
  }
}

@media (max-width: 1440px) {
  .slide.active {
    padding-top: 55px;
    padding-bottom: 68px;

    & img {
      height: 701px;
    }
  }

  .slider-container {
    height: 777px;
  }

  .btn-group {
    width: 90px;
    height: 50px;
    bottom: 61px;
    right: 80px;
  }

  .progress-bar {
    bottom: 60px;
  }

}

@media (max-width: 768px) {
  .slide.active {
    padding-top: 0;
  }

  .slider-container {
    height: 511px;
  }

  .btn-group {
    right: 40px;
  }

}

@media (min-height: 320px) and (max-width: 768px) {
  .btn-group {
    right: 15px;
    bottom: 90px;
  }

  .progress-bar {
    left: 15px;
    bottom: 88px;
  }
}
</style>