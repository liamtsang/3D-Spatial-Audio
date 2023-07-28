import { EffectComposer, DepthOfField, SSAO, Noise, HueSaturation } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing'

function Effects() {
    return (
        <EffectComposer>
            
            <Noise
                premultiply={true} // enables or disables noise premultiplication
                blendFunction={BlendFunction.SCREEN} // blend mode
            />

        </EffectComposer>
    )
}

export default Effects