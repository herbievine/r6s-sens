import { reactive, toRefs, provide } from 'vue'
import { Globals } from '@/globals'

const storeKey = Symbol('store')

const useStore = () => {
    // State
    const state: Globals.State = reactive({
        adsSens: 40,
        aspectRation: [19, 9],
        fov: 80,
        customAds: []
    })

    // Helper function
    const fovAdjustment: (fovMult: number) => number = (fovMult: number) => {
        const aspect = +state.aspectRation[0] / +state.aspectRation[1]
        const hFov =
            2 * Math.atan(Math.tan((state.fov * (Math.PI / 180)) / 2) * aspect)
        const vFov =
            hFov > 2.61798
                ? 2 * Math.atan(Math.tan(1.309) / aspect)
                : state.fov * (Math.PI / 180)

        return Math.tan((fovMult * vFov) / 2) / Math.tan(vFov / 2)
    }

    // Sens calculator
    const calcSens = () => {
        const sens: number[] = []

        // x1
        const fovMultX1 = 0.9
        const adsMultX1 = 0.6
        sens.push(
            Math.round((adsMultX1 / fovAdjustment(fovMultX1)) * state.adsSens)
        )

        // x1.5
        const fovMultX1dot5 = 0.59
        const adsMultX1dot5 = 0.59
        sens.push(
            Math.round(
                (adsMultX1dot5 / fovAdjustment(fovMultX1dot5)) * state.adsSens
            )
        )

        // x2
        const fovMultX2 = 0.49
        const adsMultX2 = 0.49
        sens.push(
            Math.round((adsMultX2 / fovAdjustment(fovMultX2)) * state.adsSens)
        )

        // x2.5
        const fovMultX2dot5 = 0.42
        const adsMultX2dot5 = 0.42
        sens.push(
            Math.round(
                (adsMultX2dot5 / fovAdjustment(fovMultX2dot5)) * state.adsSens
            )
        )

        // x3
        const fovMultX3 = 0.35
        const adsMultX3 = 0.35
        sens.push(
            Math.round((adsMultX3 / fovAdjustment(fovMultX3)) * state.adsSens)
        )

        // x4
        const fovMultX4 = 0.3
        const adsMultX4 = 0.3
        sens.push(
            Math.round((adsMultX4 / fovAdjustment(fovMultX4)) * state.adsSens)
        )

        // x5
        const fovMultX5 = 0.22
        const adsMultX5 = 0.22
        sens.push(
            Math.round((adsMultX5 / fovAdjustment(fovMultX5)) * state.adsSens)
        )

        // x12
        const fovMultX12 = 0.092
        const adsMultX12 = 0.14
        sens.push(
            Math.round((adsMultX12 / fovAdjustment(fovMultX12)) * state.adsSens)
        )

        state.customAds = sens
    }

    // Set state
    const setState = (
        adsSens: number,
        hAspectRation: number,
        vAspectRatio: number,
        fov: number
    ) => {
        state.adsSens = adsSens
        state.aspectRation = [hAspectRation, vAspectRatio]
        state.fov = fov

        calcSens()
    }

    return {
        state,
        setState,
        calcSens
    }
}

export { storeKey, useStore }
