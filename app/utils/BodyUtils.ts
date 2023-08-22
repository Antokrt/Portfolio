type Overflow = 'hidden' | 'initial' | 'scroll';

export const BodyOverflowUtils = (cssValue:Overflow) => {
    if (typeof window !== 'undefined') {
        const body = document.querySelector('body');
        if(body){
            body.style.overflow = cssValue;
        }
    }
}