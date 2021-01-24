<template>
    <div class="settings-input">
        <div class="input-item">
            <p>ADS Sens</p>
            <input type="number" v-model="adsSens" />
        </div>
        <div class="input-item">
            <p>Horizontal Aspect Ration</p>
            <input type="number" v-model="hAspectRatio" />
        </div>
        <div class="input-item">
            <p>Vertical Aspect Ration</p>
            <input type="number" v-model="vAspectRatio" />
        </div>
        <div class="input-item">
            <p>FOV</p>
            <input type="number" v-model="fov" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject, watch } from 'vue'
import { storeKey } from '@/store/store'

export default defineComponent({
    name: 'SettingInput',
    setup() {
        const { setState } = inject(storeKey) as any

        const adsSens = ref(40)
        const hAspectRatio = ref(16)
        const vAspectRatio = ref(9)
        const fov = ref(80)

        watch([adsSens, hAspectRatio, vAspectRatio, fov], () =>
            setState(adsSens, hAspectRatio, vAspectRatio, fov)
        )

        return {
            adsSens,
            hAspectRatio,
            vAspectRatio,
            fov
        }
    }
})
</script>

<style scoped lang="scss">
.settings-input {
    padding: 35px;
    border-radius: 44px;
    background: #e0e0e0;
    box-shadow: inset -5px 5px 10px #b5b5b5, inset 5px -5px 10px #ffffff;

    & .input-item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:not(:last-of-type) {
            margin-bottom: 25px;
        }

        & input {
            border: none;
            margin-left: 20px;
            padding: 6px 12px;
            border-radius: 44px;
            background: #e0e0e0;
            box-shadow: -5px 5px 10px #b5b5b5, 5px -5px 10px #ffffff;

            &:focus {
                outline-width: 0;
            }
        }
    }
}
</style>
