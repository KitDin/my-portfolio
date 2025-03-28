<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container-info">
        <div :class="currentInfo === 2 ? 'c-logo-about' : ''" class="c-logo" v-if="loaded">
            <transition v-if="currentInfo === 1" name="slide-left-to-right" appear>
                <span>Mar 2025</span>
            </transition>

            <transition name="slide-right-to-left" appear>
                <logoDesign />
            </transition>
        </div>
        <div class="info">
            <transition name="slide-left-to-right" appear>
                <div class="from-me" v-if="currentInfo == 1">
                    <p>From,</p>
                    <p>Dinh Tuan Kiet</p>
                    <div class="for">
                        <span>Front-end</span>
                        <span>Back-end</span>
                        <span>Ui Ux Designer</span>
                    </div>
                </div>
            </transition>

            <transition name="slide-right-to-left" appear>
                <div v-if="currentInfo == 1" class="portfolio">Portfolio</div>
            </transition>

            <transition name="slide-far-right-to-left" appear>
                <nameDesign v-if="currentInfo == 1" class="name-design" />
            </transition>

            <transition v-if="currentInfo == 1" name="fade-slide" appear>
                <div class="from-me to-any">
                    <div v-if="currentInfo == 1">
                        <p>To,</p>
                        <p>whoever is viewing this page</p>
                    </div>
                    <NextPageButton v-if="currentInfo == 1" @Next="navigateNext" />
                </div>
            </transition>

        </div>
        <div class="about-me">
            <TitleInfo v-if="currentInfo == 2" title="About me" class="title"></TitleInfo>
            <div v-if="currentInfo == 2" class="avatar"></div>
            <div v-if="currentInfo == 2" class="content">
                <p class="typing">
                    <span v-html="typedText"></span><span class="line-typing"></span>
                </p>
            </div>
            <transition name="far-big-to-small" appear>
                <nameDesign size="238" v-if="currentInfo == 2" class="name-design" />
            </transition>
        </div>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import nameDesign from '../components/DinhTuanKiet.vue';
import logoDesign from '../components/Logo.vue'
import NextPageButton from '@/components/ButtonNextPage.vue';
import TitleInfo from '@/components/TitleInfo.vue';
import "@/assets/style/animation.css";
const currentInfo = ref(1);
const totalInfo = 3;
const loaded = ref(false);

const fullText = `
    <b>Hello! I'm Kiet</b>, a passionate Full Stack Developer specializing in UI/UX design and web development. 
    I focus on creating intuitive, user-friendly interfaces while ensuring performance, security, and system stability.<br><br>

    Beyond UI/UX design, I have experience in wireframing, prototyping, and user testing. 
    On the front-end, I develop smooth, responsive interfaces optimized for various platforms. 
    On the back-end, I work with servers, databases, and API integrations to maintain reliable system performance.<br><br>

    I am <b>meticulous</b>, <b>creative</b>, and always <b>eager to learn and improve</b>. 
    With a strong sense of teamwork, I embrace challenges and seek effective solutions. 
    My problem-solving mindset and logical thinking allow me to contribute meaningfully to projects and deliver high-quality products.
`;

const typedText = ref("");
let index = 0;

const startTyping = () => {
    const interval = setInterval(() => {
        if (index < fullText.length) {
            typedText.value += fullText[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 10); // Tốc độ đánh chữ (30ms mỗi ký tự)
};

const navigateNext = () => {
    if (currentInfo.value < totalInfo) {
        currentInfo.value++;
        console.log(currentInfo.value)
    } else currentInfo.value = 1;
}


onMounted(() => {
    setTimeout(() => {
        loaded.value = true;
    }, 200), startTyping();
});


</script>

<style scoped>
* {
    font-family: "Urbanist", sans-serif;
}

.container-info {
    width: 100%;
    max-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    /* padding: 28px; */
}

.container-info .c-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    padding-right: 28px;
    padding-left: 28px;
}


.container-info .c-logo-about {
    justify-content: end;
}

.container-info .name-design {
    left: 30%;
}

.container-info .from-me {
    padding: 34px 0 0 150px;
}

.container-info .from-me p {
    margin: 0;
}

.container-info .from-me .for {
    font-style: italic;
    font-weight: 600;
}

.container-info .from-me .for span {
    border-right: 2px solid black;
    padding: 0 8px;
}

.container-info .from-me .for span:first-child {
    padding: 0 8px 0 0;
}

.container-info .from-me .for span:last-child {
    border-right: none;
}

.container-info .portfolio {
    font-family: "Urbanist", sans-serif;
    width: 100%;
    font-size: 48px;
    text-align: right;
    padding-top: 18px;
}

.container-info .to-any {
    padding-top: 124px;
    display: flex;
    justify-content: space-between;
    bottom: 0;
}

.about-me .title {
    margin-left: 150px;
}

.about-me .avatar {
    width: 200px;
    height: 128px;
    background-color: black;
    margin: 10px 0 0 150px;
}

.about-me .content {
    padding: 0 150px 50px 150px;
    height: 200px;
    margin: 0;
}

.about-me .content p {
    margin: 0;
}

.typing {
    display: inline;
    word-wrap: break-word;
    text-align: justify;
    line-height: 1.6;
}

.line-typing {
    display: inline-block;
    width: 10px;
    height: 20px;
    background-color: rgb(49, 49, 49);
    margin-left: 2px;
    background-color: black;
    animation: blink 0.8s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.about-me .name-design {
    left: -450px;
}
</style>