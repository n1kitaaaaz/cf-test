<template>
    <div class="cf-article">
        <button @click="handlerClickBack" class="cf-article__btn btn btn--back"> 
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.26667 4.66667L4.46667 6.86667C4.73333 7.13333 4.73333 7.53333 4.46667 7.8C4.2 8.06667 3.8 8.06667 3.53333 7.8L0.316049 4.58271C0.118519 4.47407 3.26378e-07 4.26667 3.49691e-07 4C3.73004e-07 3.73333 0.118518 3.52593 0.316048 3.41728L3.53333 0.199999C3.66667 0.0666659 3.8 -7.16867e-07 4 -6.99382e-07C4.2 -6.81898e-07 4.33333 0.0666659 4.46667 0.199999C4.73333 0.466666 4.73333 0.866666 4.46667 1.13333L2.26667 3.33333L11.3333 3.33333C11.7333 3.33333 12 3.6 12 4C12 4.4 11.7333 4.66667 11.3333 4.66667L2.26667 4.66667Z" fill="#96A0AA"/>
            </svg>
            Назад к поиску
        </button>

        <h2 class="cf-article__title title--2" v-html="titleArticle"></h2>
        <div v-html="template" class="cf-article__content">
        
        </div>
    </div>    
</template>

<script>

export default {
    data() {
        return {
            
            template: '',
            titleArticle: '',
        }
    },
     created(){

       this.template = this.$route.params.props.res.f;
       this.titleArticle = this.$route.params.props.res.t;
    },
    methods: {
        
        handlerClickBack(){

            this.$router.go(-1);
            this.$emit('hide-search');
        }
    },
}
</script>

<style lang="less">

.cf-article{

    margin: 25px 0;
    
    &__title{

        margin: 25px 0;
    }

    &__content{

        font-size: 18px;
        line-height: 21px;

        color: #2A3246;
    }    
}

.btn{

    &--back{

        background: #ffffff;
        font-size: 12px;

        color: rgba(42, 50, 70, 0.5);
    }
}

</style>
