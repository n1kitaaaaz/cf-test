<template>
    <div class="cf-page__footer cf-footer">
        <div class="cf-footer__item" v-for="(item, index) in footer.menuBlock" :key="index">
            <h2 class="cf-footer__title cf-title cf-title--2">{{item.title}}</h2>
            <ul class="cf-footer__some-list cf-some-list">
                <li class="cf-some-list__item" v-for="(link, index) in item.list" :key="index"> 
                    <a href="#" class="cf-some-list__link"> {{link.text}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footer:{
                menuBlock:[
                    {
                        title: "Личный кабинет",
                        list:
                        [
                            {
                                link: "#",
                                text: "Ошибки в личном кабинете",
                            },
                            {
                                link: "#",
                                text: "Как получить доступ в личный кабинет",
                            },
                            {
                                link: "#",
                                text: "Не могу зайти в личный кабинет",
                            },
                            {
                                link: "#",
                                text: "Как получить доступ в личный кабинет",
                            },
                            {
                                link: "#",
                                text: "Ошибки в личном кабинете",
                            },
                            {
                                link: "#",
                                text: "Не могу зайти в личный кабинет",
                            },
                        ],
                    },
                    {
                        title: "Погашения займа",
                        list:
                        [
                            {
                                link: "#",
                                text: "Способы погашения",
                            },
                            {
                                link: "#",
                                text: "Нарушения при погашении",
                            },
                            {
                                link: "#",
                                text: "Нужны ли поручители для получения займа?",
                            },
                            {
                                link: "#",
                                text: "Нарушения при погашении",
                            },
                        ],
                    },
                    {
                        title: "Получение денег",
                        list:
                        [
                            {
                                link: "#",
                                text: "Не могу зайти в личный кабинет",
                            },
                            {
                                link: "#",
                                text: "Как получить доступ в личный кабинет",
                            },
                            {
                                link: "#",
                                text: "Не могу зайти в личный кабинет",
                            },
                        ],
                    },
                    {
                        title: "Личный кабинет",
                        list:
                        [
                            {
                                link: "#",
                                text: "Ошибки в личном кабинете",
                            },
                            {
                                link: "#",
                                text: "Как получить доступ в личный кабинет",
                            },
                            {
                                link: "#",
                                text: "Не могу зайти в личный кабинет",
                            },
                            {
                                link: "#",
                                text: "Как получить доступ в личный кабинет",
                            },
                            {
                                link: "#",
                                text: "Ошибки в личном кабинете",
                            },
                            {
                                link: "#",
                                text: "Не могу зайти в личный кабинет",
                            },
                        ],
                    },
                    {
                        title: "Погашения займа",
                        list:
                        [
                            {
                                link: "#",
                                text: "Способы погашения",
                            },
                            {
                                link: "#",
                                text: "Нарушения при погашении",
                            },
                            {
                                link: "#",
                                text: "Нужны ли поручители для получения займа?",
                            },
                            {
                                link: "#",
                                text: "Нарушения при погашении",
                            },
                        ],
                    },
                    {
                        title: "Получение денег",
                        list:
                        [
                            {
                                link: "#",
                                text: "Не могу зайти в личный кабинет",
                            },
                            {
                                link: "#",
                                text: "Как получить доступ в личный кабинет",
                            },
                            {
                                link: "#",
                                text: "Не могу зайти в личный кабинет",
                            },
                        ],
                    },
                ]
            }
        }
    },
}
</script>


<style lang="less">
.cf-footer{

    &__item{

        margin-top: 100px;
    }

    &__some-list{
        
        flex: 1;

        padding-top: 15px;
    }

}

.cf-some-list{

    &__item{

        font-size: 16px;
        color: #2A3246;

        margin-top: 15px;
    }

    &__link{

        border-bottom: 1px solid rgba(42, 50, 70, 0.1);
        color: #2A3246;
    }
}

@media screen and (max-width: 1100px) {

    .cf-footer{

        &__item{

            margin-top: 50px;
            width: 345px;
        }
    }
}

@media screen and (max-width: 768px) {

    .cf-footer{

        &__item{

            width: 300px;
        }
    }

    .cf-some-list{

        &__item{

            font-size: 14px;
        }
    }
}

</style>