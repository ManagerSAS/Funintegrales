<script src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer></script> 
<template>
    <div>
        <vue-recaptcha sitekey="6LeLnhseAAAAAM9DThsU87HH6WsPAspf9CJUITQr" :loadRecaptchaScript="true"
            @verify="verifyCaptcha"            
        ></vue-recaptcha>
    </div>
</template> 
<script>
import VueRecaptcha from 'vue-recaptcha';
export default {
    components: { 
        VueRecaptcha
    },
    data(){
        return{
            recaptcha: null
        }
    },
    methods:{
        verifyCaptcha(response){
            if(response){
                this.recaptcha = response
                this.$emit('captcha', true)
            }
        },
    }
};
</script>