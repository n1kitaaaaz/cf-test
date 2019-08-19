<template>
    <div>
        <div class="cf-page__search cf-search">
            <div class="cf-search__border-box">
                <input placeholder="Введите запрос" class="cf-search__input" v-model="checkValueInput" @keyup.enter="handleTextSearch">
                <button @click="handleTextSearch" type="button" class="cf-search__btn-search cf-btn cf-btn--red">Поиск</button>
                <button @click="handleTextSearch" type="button" class="cf-search__btn-search cf-btn cf-btn--red-mobile">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4108 13.2889L19.5121 18.4482C19.8631 18.803 19.8631 19.3789 19.5121 19.7336C19.3366 19.9111 19.1065 20 18.8764 20C18.6465 20 18.4164 19.9111 18.2409 19.7336L13.1396 14.5743C11.7555 15.6941 10 16.3636 8.08989 16.3636C3.62202 16.3636 0 12.7005 0 8.18182C0 3.66318 3.62202 0 8.08989 0C12.558 0 16.1798 3.66318 16.1798 8.18182C16.1798 10.1136 15.518 11.8891 14.4108 13.2889ZM1.79775 8.18182C1.79775 11.6964 4.61483 14.5455 8.08989 14.5455C11.5652 14.5455 14.382 11.6964 14.382 8.18182C14.382 4.66727 11.5652 1.81818 8.08989 1.81818C4.61483 1.81818 1.79775 4.66727 1.79775 8.18182Z" fill="white"/>
                    </svg>
                </button>
            </div>
            <div class="cf-page__wrapper">
                <button class="cf-search__clear" v-show="checkValueInput.length" @click="handleClearSearchLine">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.59052 0.409075C8.36458 0.18314 7.99827 0.18314 7.77234 0.409075L4.49979 3.68163L1.22724 0.409075C1.0013 0.18314 0.634991 0.18314 0.409057 0.409075C0.183122 0.635009 0.183122 1.00132 0.409057 1.22726L3.68161 4.49981L0.408709 7.7727C0.182774 7.99864 0.182774 8.36495 0.408709 8.59089C0.634643 8.81682 1.00096 8.81682 1.22689 8.59088L4.49979 5.31799L7.77269 8.59088C7.99862 8.81682 8.36493 8.81682 8.59087 8.59089C8.8168 8.36495 8.8168 7.99864 8.59087 7.7727L5.31797 4.49981L8.59052 1.22726C8.81645 1.00132 8.81645 0.635009 8.59052 0.409075Z"/>
                        </mask>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.59052 0.409075C8.36458 0.18314 7.99827 0.18314 7.77234 0.409075L4.49979 3.68163L1.22724 0.409075C1.0013 0.18314 0.634991 0.18314 0.409057 0.409075C0.183122 0.635009 0.183122 1.00132 0.409057 1.22726L3.68161 4.49981L0.408709 7.7727C0.182774 7.99864 0.182774 8.36495 0.408709 8.59089C0.634643 8.81682 1.00096 8.81682 1.22689 8.59088L4.49979 5.31799L7.77269 8.59088C7.99862 8.81682 8.36493 8.81682 8.59087 8.59089C8.8168 8.36495 8.8168 7.99864 8.59087 7.7727L5.31797 4.49981L8.59052 1.22726C8.81645 1.00132 8.81645 0.635009 8.59052 0.409075Z" fill="#D8D8D8"/>
                            <path d="M7.77234 0.409075L7.06523 -0.298032L7.06523 -0.298032L7.77234 0.409075ZM8.59052 0.409075L9.29763 -0.298031L9.29763 -0.298033L8.59052 0.409075ZM4.49979 3.68163L3.79268 4.38873L4.49979 5.09584L5.20689 4.38873L4.49979 3.68163ZM1.22724 0.409075L1.93434 -0.298032L1.93434 -0.298032L1.22724 0.409075ZM0.409057 0.409075L1.11616 1.11618L1.11616 1.11618L0.409057 0.409075ZM0.409057 1.22726L1.11616 0.520149L1.11616 0.520149L0.409057 1.22726ZM3.68161 4.49981L4.38871 5.20691L5.09582 4.49981L4.38871 3.7927L3.68161 4.49981ZM0.408709 7.7727L1.11582 8.47981L1.11582 8.47981L0.408709 7.7727ZM0.408709 8.59089L-0.298399 9.29799L-0.298397 9.29799L0.408709 8.59089ZM1.22689 8.59088L0.519783 7.88378L0.519783 7.88378L1.22689 8.59088ZM4.49979 5.31799L5.20689 4.61088L4.49979 3.90377L3.79268 4.61088L4.49979 5.31799ZM8.59087 8.59089L9.29797 9.29799L9.29798 9.29799L8.59087 8.59089ZM8.59087 7.7727L7.88376 8.47981L7.88376 8.47981L8.59087 7.7727ZM5.31797 4.49981L4.61086 3.7927L3.90376 4.49981L4.61086 5.20691L5.31797 4.49981ZM8.59052 1.22726L9.29763 1.93436L9.29763 1.93436L8.59052 1.22726ZM8.47944 1.11618C8.31485 1.28077 8.048 1.28077 7.88341 1.11618L9.29763 -0.298033C8.68117 -0.91449 7.68169 -0.914491 7.06523 -0.298032L8.47944 1.11618ZM5.20689 4.38873L8.47944 1.11618L7.06523 -0.298032L3.79268 2.97452L5.20689 4.38873ZM5.20689 2.97452L1.93434 -0.298032L0.520131 1.11618L3.79268 4.38873L5.20689 2.97452ZM1.93434 -0.298032C1.31789 -0.91449 0.318409 -0.914491 -0.29805 -0.298032L1.11616 1.11618C0.951574 1.28077 0.684721 1.28077 0.520131 1.11618L1.93434 -0.298032ZM-0.29805 -0.298032C-0.914509 0.318427 -0.914509 1.3179 -0.29805 1.93436L1.11616 0.520149C1.28075 0.684739 1.28075 0.951592 1.11616 1.11618L-0.29805 -0.298032ZM-0.29805 1.93436L2.9745 5.20691L4.38871 3.7927L1.11616 0.520149L-0.29805 1.93436ZM1.11582 8.47981L4.38871 5.20691L2.9745 3.7927L-0.298398 7.0656L1.11582 8.47981ZM1.11582 7.88378C1.2804 8.04837 1.28041 8.31522 1.11582 8.47981L-0.298398 7.0656C-0.914857 7.68206 -0.914856 8.68153 -0.298399 9.29799L1.11582 7.88378ZM0.519783 7.88378C0.684372 7.71919 0.951225 7.71919 1.11581 7.88378L-0.298397 9.29799C0.318062 9.91445 1.31754 9.91445 1.934 9.29799L0.519783 7.88378ZM3.79268 4.61088L0.519783 7.88378L1.934 9.29799L5.20689 6.02509L3.79268 4.61088ZM3.79268 6.02509L7.06558 9.29799L8.47979 7.88378L5.20689 4.61088L3.79268 6.02509ZM7.06558 9.29799C7.68204 9.91445 8.68151 9.91445 9.29797 9.29799L7.88376 7.88378C8.04835 7.71919 8.3152 7.71919 8.47979 7.88378L7.06558 9.29799ZM9.29798 9.29799C9.91443 8.68153 9.91443 7.68206 9.29797 7.0656L7.88376 8.47981C7.71917 8.31522 7.71917 8.04837 7.88376 7.88378L9.29798 9.29799ZM9.29797 7.0656L6.02508 3.7927L4.61086 5.20691L7.88376 8.47981L9.29797 7.0656ZM7.88341 0.520149L4.61086 3.7927L6.02508 5.20691L9.29763 1.93436L7.88341 0.520149ZM7.88341 1.11618C7.71882 0.951591 7.71882 0.68474 7.88341 0.52015L9.29763 1.93436C9.91408 1.3179 9.91408 0.318427 9.29763 -0.298031L7.88341 1.11618Z" fill="#2A3246" fill-opacity="0.5" mask="url(#path-1-inside-1)"/>
                    </svg>
                    Отменить поиск
                </button>
            </div>
        </div>
        <div v-if="result.length || valueInput.length" class="cf-page__search-result search-result">

            <div v-if="result.length" class="search-result__has-response">
                <h2 class="search-result__title title--2">Результаты поиска «{{valueInput}}»‎</h2>
                <span class="search-result__count-results">Найдено {{result.length}} <span v-inclined-word="{number: result.length, titles: ['ответ', 'ответа', 'ответов']}"></span> </span>
            
                <div class="search-result__info-block info-block">
                    <div class="info-block__result result" v-for="(res, index) in result" :key="index">
                        <div class="result__title">
                            {{res.t}}
                        </div>
                        <div class="result__main-info">
                            {{res.d}}
                        </div>
                        <router-link :to="{name: 'article', params: { articleId: res.u, props: { res: res}}} " class="result__more"> 
                            <div @click="hideSearch"> Подробнее 
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.73333 3.33333L7.53333 1.13333C7.26667 0.866667 7.26667 0.466667 7.53333 0.2C7.8 -0.0666667 8.2 -0.0666667 8.46667 0.2L11.684 3.41728C11.8815 3.52593 12 3.73333 12 4C12 4.26667 11.8815 4.47407 11.684 4.58272L8.46667 7.8C8.33333 7.93333 8.2 8 8 8C7.8 8 7.66667 7.93333 7.53333 7.8C7.26667 7.53333 7.26667 7.13333 7.53333 6.86667L9.73333 4.66667H0.666667C0.266667 4.66667 0 4.4 0 4C0 3.6 0.266667 3.33333 0.666667 3.33333H9.73333Z" fill="#FF0142"/>
                                </svg>
                            </div>
                        </router-link>
                    </div>
                    
                </div>
            </div>
            
            <div v-else class="search-result__empty">
                <h2 class="search-result__title title--2"> К сожалению, по вашему запросу «{{valueInput}}»‎ ничего не найдено</h2>
                <div class="search-result__recomendation-block">
                    <span class="search-result__recomendation"> <p>Вы можете <a class="search-result__link" href="mailto:info@centrofinans.ru">задать вопрос на info@centrofinans.ru</a> </p> </span> 
                    <span class="search-result__recomendation"> <p> или позвонить нам на горячию линию <a class="search-result__link" href="tel:88007773737"> 8 800 777 37 37</a> </p> </span>
                </div>
            </div>
           
        </div>
         
</div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            checkValueInput: "",
            valueInput: "",
            info: '',
            errors: [],
            result: [],
        }
    }, 
    methods:{
        hideSearch(){
            this.$emit('hide-search');
        },
        handleClearSearchLine(){

            this.checkValueInput = '';
            this.valueInput = '';
            this.result.length = 0;
        },
        handleTextSearch(){

            (this.checkValueInput.length > 2) ? this.handleRequest() : this.valueInput = '';
        },
        handleRequest(){

            this.valueInput = this.checkValueInput;
            this.valueInput.length ? this.getData(this.valueInput) : this.result.length = 0;
        },
        getData(valueInput){
            this.result.length = 0;
            axios({
                method: 'get',
                url: 'https://tech.uff4u.com:8443/files/test-cf/test.json',
                params: {
                    q: valueInput
                }
            })
            .then(responce => (
                Object.keys(responce.data).forEach(element => {
                    if (responce.data[element].t.includes(valueInput)){
                        this.result.push(JSON.parse(JSON.stringify(responce.data[element])));
                    }
                })
            )
        )}
    },
}
</script>

<style lang="less">

.cf-search{

    &__border-box{

        padding: 12px 18px;

        border: 1px solid rgba(42, 50, 70, 0.28);
        box-sizing: border-box;

        border-radius: 4px;

        position: relative;
    }

    &__input{

        font-size: 16px;
        line-height: 19px;

        border: none;

        &:focus{

            outline: none;
        }
    }

    &__btn-search{

        position: absolute;
        top: -1px;
        right: -1px;
    }

    &__clear{

        cursor: pointer;

        background: #ffffff;
        color: #9498A3;

        padding-top: 10px;
    }
}

.cf-btn{

    &--red{
        content: "Поиск";

        background: #FF0142;
        padding: 14px 36px;

        font-weight: bold;

        font-size: 16px;
        line-height: 19px;

        color: #FFFFFF;

        border-radius: 4px;

        cursor: pointer;
    }

    &--red-mobile{

        display: none;

        background: #FF0142;

        padding: 6px 26px;
        border-radius: 4px;

        cursor: pointer;
    }
}

.search-result{

    &__count-results{
        
        font-size: 14px;
        line-height: 17px;

        color: #9498A3;
    }

     &__info-block{
        
        margin-top: 7px;
        padding: 22px 0;

        border-top: 1px solid #EAEBEC;

        width: 100%;
    }

    &__recomendation-block{

        margin-top: 10px;
    }

    &__recomendation{

        font-size: 14px;
        color: #2A3246;
        line-height: 21px;
    }

    &__link{

        color: #FF0142;
        text-decoration: none;
        border-bottom: 1px solid #FF80A0;
    }
}

.info-block{

    &__result{

        padding: 30px 0;
    }
    
}

.result{

    &__title{

        font-size: 20px;

        font-weight: bold;
      
        color: #2A3246;
    }

    &__main-info{

        padding: 15px 0 6px;
        font-size: 16px;
        line-height: 19px;

        max-width: 600px;

        color: #2A3246;
    }

    &__more{

        font-size: 14px;
        line-height: 17px;

        color: #FF0142;
    }
}

@media screen and (max-width: 768px) {

.cf-search{

    &__border-box{

        padding: 5.5px 18px;

        border: 1px solid rgba(42, 50, 70, 0.28);
        box-sizing: border-box;

        border-radius: 4px;

        position: relative;
    }

    &__input{

        font-size: 16px;
        line-height: 19px;

        border: none;

        &:focus{

            outline: none;
        }
    }

    &__btn-search{

        position: absolute;
        top: -1px;
        right: -1px;
    }

    &__clear{

        cursor: pointer;

        background: #ffffff;
        color: #9498A3;

        padding-top: 10px;
    }
}

.cf-btn{

    &--red{

        display: none; 
    }

    &--red-mobile{

        display: block;
    }
}
}
</style>