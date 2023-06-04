import { animated, useSpring} from "@react-spring/web";

const useSlideAnimation = () => {
    const [spring, api] = useSpring(
        () => ({
            from: {
                x: 100,
                opacity: 0,
            },
    
            to: {
                x: 0,
                opacity: 1,
            },
    
            config: {
                damping: 400,
                clamp: true,
                tension: 50,
                friction: 10,
            },
        })
    );

    return [spring, api];
}

export default useSlideAnimation;