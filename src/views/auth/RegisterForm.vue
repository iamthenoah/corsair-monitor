<template>
    <div class="fade-left">
        <div>
            <h2>Sign up.</h2>
            <p>Registering is very easy and can be done in a few simple steps...</p>
        </div>
        <section>
            <div v-if="!step1">
                <h4>Step 1 <span style="font-size: 14px">/ 3</span>.</h4>
                <p>Tell us your email and choose a username.</p>
            </div>
            <div v-else-if="!step2">
                <h4>Step 2 <span style="font-size: 14px">/ 3</span>.</h4>
                <p>Choose a password for your account.</p>
            </div>
            <div v-else>
                <h4>Step 3 <span style="font-size: 14px">/ 3</span>.</h4>
                <p>Optionally, enter your ETH wallet address.</p>
            </div>
        </section>
        <div :class="{ 'disabled' : submited }">
            <div v-if="!step1" id="form-steps" class="fade-in">
                <section>
                    <label>Email</label>
                    <input type="text" placeholder="name@domain.com" v-model="form.email">
                    <label>Username</label>
                    <input type="text" placeholder="optional username" v-model="form.username">
                </section>
                <section>
                    <button 
                        @click="step1 = true" 
                        :class="{ 'disabled' : form.email.length === 0 }" 
                        class="btn-action btn-icon-right large"
                    >Next Step<span class="material-icons">navigate_next</span></button>
                    <p>Already have an account? <router-link to="/authenticate/login"><a>Sign in</a></router-link>.</p>
                </section>
            </div>
            <div v-else-if="!step2" id="form-steps" class="fade-in">
                <section>
                    <label>Choose password</label>
                    <div class="input-icon-right">
                        <input :type="viewPassword ? 'text' : 'password'" placeholder="choose password" v-model="form.passwords[0]">
                        <span @click="viewPassword = !viewPassword" class="material-icons">{{ viewPassword ? 'visibility' : 'visibility_off' }}</span>
                    </div>
                    <label>Repeat password</label>
                    <input :type="viewPassword ? 'text' : 'password'" placeholder="repeat password" v-model="form.passwords[1]">
                </section>
                <section>
                    <button 
                        @click="step2 = true" 
                        :class="{ 'disabled' : form.passwords[0].length === 0 || form.passwords[1].length === 0 }" 
                        class="btn-action btn-icon-right large"
                    >Next Step<span class="material-icons">navigate_next</span></button>
                    <p>Go back to <a @click="step1 = false">step 1</a>.</p>
                </section>
            </div>
            <div v-else id="form-steps" class="fade-in">
                <section>
                    <label>Mining Address</label>
                    <input type="text" placeholder="address" v-model="form.addresses[0]">
                    <p id="ex-address">ex: 0x3a7aF0a0527C51E322aBb...</p>
                </section>
                <section>
                    <button @click="Register()" class="btn-action large">Create Account</button>
                    <p>Go back to <a @click="step2 = false">step 2</a>.</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['submit', 'success'],
    data() {
        return {
            step1: false,
            step2: false,
            submited: false,
            viewPassword: false,
            form: {
                username: '',
                email: '',
                passwords: ['', ''],
                addresses: ['']
            }
        }
    },
    methods: {
        Register: async function() {
            this.submited = true;
            this.$emit('submit', true);
            await setTimeout(() => {
                this.$store.dispatch('REGISTER', this.form)
                    .then(() => this.$emit('success'))
                    .catch(err => {
                        this.submited = false;
                        this.$emit('error', err.response.data.error);
                    });
            }, 1000);
        }
    },
}
</script>

<style lang="scss" scoped>

    #form-steps {
        display: grid;
        grid-auto-rows: 180px auto;
        align-items: center;
    }

    #ex-address {
        margin: 0;
    }

</style>