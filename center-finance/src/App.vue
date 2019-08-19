<template>
  <div class="cf-page">
    <cf-header></cf-header>
    <cf-search @hide-search="hideSearch" v-if="viewSerchLine"></cf-search>
    <router-view @hide-search="hideSearch"></router-view>
    <cf-footer></cf-footer>
  </div>
</template>

<script>

import CfHeader from './components/header.vue';
import CfSearch from './components/search.vue';
import CfFooter from './components/footer.vue';

export default {
  name: 'app',
  components: {
    CfHeader,
    CfSearch,
    CfFooter,
  },
  methods: {
    hideSearch(){
      // eslint-disable-next-line
      console.log('dfdf')
      this.viewSerchLine = !this.viewSerchLine;
    }
  },
  data() {
    return {
      viewSerchLine: true,
    }
  },
}
</script>

<style lang="less">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ul, ol, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: Arial, Helvetica, sans-serif;
    vertical-align: baseline;
}

body{

  font-family: Arial, Helvetica, sans-serif;
  background: #F9FAFB;
  display: flex;
  justify-content: center;

}

ul {
  list-style: none;
}

ol {
  list-style: none;
}

a{
  text-decoration: none;
}


.cf-page{

  background: #ffffff;
  max-width: 1200px;

  padding: 40px 52px;
  box-sizing: border-box;

  &__header{

    display: flex;
    align-items: center;

    padding-bottom: 25px;
    border-bottom: 1px solid rgba(42, 50, 70, 0.1);
  }

  &__search{

    margin-top: 43px;

    max-width: 450px;
  }

  &__footer{

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__wrapper{

    height: 43px;
  }
}

.title{

  &--2{
    font-size: 24px;
    line-height: 29px;

    color: #2A3246;
  }
}

@media screen and (max-width: 1100px) {


}

@media screen and (max-width: 768px) {

  .cf-page{

    &__header{

    }

    &__search{

    }

    &__footer{

    }

    &__wrapper{

    }

  }

  .title{

    &--2{
      font-size: 20px;
      line-height: 24px;

      color: #2A3246;
    }
  }
}

@media screen and (max-width: 400px) {

   .cf-page{

    padding: 40px 15px;

    &__footer{

      justify-content: center;
    }
  }
}
</style>