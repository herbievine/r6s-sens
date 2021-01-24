<template>
    <div class="wrapper">
        <div class="title">
            <p>Rainbow Six Siege Sens Calculator</p>
        </div>
        <SettingInput />
        <ViewSettings />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SettingInput from './components/SettingInput.vue'
import ViewSettings from './components/ViewSettings.vue'

export default defineComponent({
    name: 'App',
    components: {
        SettingInput,
        ViewSettings
    }
})
</script>

<style lang="scss">
* {
    font-family: 'Nunito', Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
}

body {
    background-color: #e0e0e0;
}

.wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & .title {
        margin: 30px;

        & p {
            font-weight: 600;
            font-size: 20px;
        }
    }
}

// Miscellaneous

// Remove input arrows
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
}
</style>
