<template>
    <div class="view-settings">
        <div class="setting-item" v-for="(reticle, i) in reticleList" :key="i">
            <p>{{ reticle }} Scope: {{ store.state.customAds[i] ?? 0 }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { storeKey } from '@/store/store'

export default defineComponent({
    name: 'ViewSettings',
    setup() {
        const reticleList = ref([
            'X1',
            'X1.5',
            'X2',
            'X2.5',
            'X3',
            'X4',
            'X5',
            'X12'
        ])

        return {
            reticleList,
            store: inject(storeKey)
        }
    }
})
</script>

<style scoped lang="scss">
.view-settings {
    margin-top: 30px;
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 0 0;
    grid-template-areas:
        '. . .'
        '. . .'
        '. . .';
    border-radius: 44px;
    background: #e0e0e0;
    box-shadow: inset -5px 5px 10px #b5b5b5, inset 5px -5px 10px #ffffff;

    & .setting-item {
        padding: 6px 22px;
        border-radius: 44px;
        background: #e0e0e0;
        box-shadow: -5px 5px 10px #b5b5b5, 5px -5px 10px #ffffff;
        margin: 10px;
        text-align: center;
    }
}
</style>
