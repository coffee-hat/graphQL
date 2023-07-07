<script>
export default {
    props: [
        'id',
        'imageUrl',
        'name',
        'description',
        'price'
    ]
}


</script>

<template>
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img :src="this.imageUrl" alt="dish image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div class="mt-4 flex justify-between">
        <div>
            <h3 class="text-sm text-gray-700">
                
                {{ this.name }}
            </h3>
        </div>
        <p class="text-sm font-medium text-gray-900">{{ this.price }}</p>
    </div>
</template>
