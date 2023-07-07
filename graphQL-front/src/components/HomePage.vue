<script>
import axios from 'axios'
import NavBar from './NavBar.vue'
import DishCart from './dishCart.vue'

export default {
    components: {
        NavBar,
        DishCart
    },
    data () {
        return {
            dishes: []
        }
    },
    methods: {
        async getDishes(){
            try {
                const res = await axios.post(
                'http://localhost:3000/graphql', {
                query: '{ dishes { id name description price image_url } }'
                })
                this.dishes = res.data.data.dishes
            } catch (e) {
                console.log('err', e)
            }  
        }
    },
    created() {
        this.getDishes()
    }
}

</script>

<template>
    <NavBar/>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">La carte</h2>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <ul v-for="dish in dishes" class="group relative">
                    <DishCart :id="dish.id" :imageUrl="dish.image_url" :name="dish.name" :description="dish.description" :price="dish.price"/>
                </ul>
            </div>
        </div>
    </div>
</template>