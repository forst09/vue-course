<template>
    <div class="backdrop"
        @click="$emit('close')"
        v-if="open"></div>
    <Transition :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled">
        <dialog open
            v-if="open">
            <slot></slot>
        </dialog>
    </Transition>
</template>

<script>
export default {
    data() {
        return {
            enterInterval: null,
            leaveEnterval: null
        }
    },
    emits: ['close'],
    props: ['open'],
    methods: {
        beforeEnter(el) {
            console.log('beforeEnter()');
            console.log(el);
            el.style.cssText = 'opacity: 0; transform: translateY(-50px) scale(0.4);'
        },
        enter(el, done) {
            console.log('enter');
            console.log(el);
            let round = 1;
            this.enterInterval = setInterval(() => {
                el.style.opacity = round * 0.01;
                round++;
                if (round > 100) {
                    el.style.transform = ' translateY(0) scale(1)';
                    clearInterval(this.enterInterval);
                    done();
                }
            }, 20);
        },
        afterEnter(el) {
            console.log('afterEnter');
            console.log(el);
        },
        beforeLeave(el) {
            console.log('beforeLeave()');
            console.log(el);
        },
        leave(el, done) {
            console.log('leave');
            console.log(el);
            let round = 1;
            this.leaveEnterval = setInterval(() => {
                el.style.opacity = 1 - round * 0.01;
                round++;
                if (round > 100) {
                    clearInterval(this.leaveEnterval);
                    done();
                }
            }, 20);
            el.style.transform = ' translateY(-50px) scale(0.4)';
        },
        afterLeave(el) {
            console.log('afterLeave');
            console.log(el);
        },
        enterCancelled() {
            clearInterval(this.enterInterval);
        },
        leaveCancelled() {
            clearInterval(this.leaveEnterval);
        }
    }
};
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.75);
}

dialog {
    position: fixed;
    top: 30vh;
    width: 30rem;
    left: calc(50% - 15rem);
    margin: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
    padding: 1rem;
    background-color: white;
    z-index: 100;
    border: none;
}

/* .modal-enter-active {
    animation: modal 2s ease;
}
.modal-leave-active {
    animation: modal 0.3s ease reverse
}
@keyframes modal {
    0% {
        opacity: 0;
        transform: translateY(-50px) scale(0.4);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
} */
</style>