import { ref,onUnmounted,computed } from "vue";
export default function useTimer(){
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    const timer = setInterval(() => {
        const now = new Date();
        hours.value = now.getHours();
        minutes.value = now.getMinutes();
        seconds.value = now.getSeconds();
    }, 1000);

    const time = computed(() => {
        return [hours, minutes, seconds].map(i => i.value).map(i => i < 10 ? `0${i}` : i).join(':')
    });

    onUnmounted(() => {
        clearInterval(timer);
    });

    return{
        hours,
        minutes,
        seconds,
        time,
    }
}