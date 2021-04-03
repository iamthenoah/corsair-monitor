<template>
    <div class="fade-left">
        <div>
            <h2>Sign up.</h2>
            <p>Registering is very easy and can be done in a few simple steps...</p>
        </div>
        <section>
            <div v-if="!step1">
                <h4>Step 1 <span style="font-size: 14px">/ 3</span>.</h4>
                <p>Tell us what your email is and choose a name.</p>
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
                    <label>Username</label>
                    <input type="text" placeholder="choose a username" v-model="form.username">
                    <label>Email</label>
                    <input type="text" placeholder="name@domain.com" v-model="form.email">
                </section>
                <section>
                    <button 
                        @click="step1 = true" 
                        :class="{ 'disabled' : form.email.length === 0 || form.username.length === 0}" 
                        class="btn-action large"
                    >Next Step<span class="material-icons">navigate_next</span></button>
                    <p>Already have an account? <router-link to="/authenticate?form=login"><a>Sign in</a></router-link>.</p>
                </section>
            </div>
            <div v-else-if="!step2" id="form-steps" class="fade-in">
                <section>
                    <label>Choose password</label>
                    <input type="password" placeholder="choose password" v-model="form.password[0]">
                    <label>Repeat password</label>
                    <input type="password" placeholder="repeat password" v-model="form.password[1]">
                </section>
                <section>
                    <button 
                        @click="step2 = true" 
                        :class="{ 'disabled' : form.password[0].length === 0 || form.password[1].length === 0}" 
                        class="btn-action large"
                    >Next Step<span class="material-icons">navigate_next</span></button>
                    <p>Go back to previous <a @click="step1 = false">step 1</a>.</p>
                </section>
            </div>
            <div v-else id="form-steps" class="fade-in">
                <section>
                    <label>Mining Address</label>
                    <input type="text" placeholder="address" v-model="form.address">
                    <p id="ex-address">ex: 0x3a7aF0a0527C51E322aBbC3Eabfd31b...</p>
                </section>
                <section>
                    <button @click="Register()" class="btn-action large">Create Account</button>
                    <p>Go back to previous <a @click="step2 = false">step 2</a>.</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['submit'],
    data() {
        return {
            step1: false,
            step2: false,
            submited: false,
            form: {
                username: '',
                email: '',
                password: ['', ''],
                address: ''
            }
        }
    },
    methods: {
        Register: async function() {
            this.submited = true;
            this.$emit('submit', true);
            await setTimeout(() => {
                this.submited = false;
                this.$emit('submit', false);
                this.$router.push('/');
            }, 3000);
        }
    },
}
</script>

<style lang="scss" scoped>

    #form-steps {
        display: grid;
        grid-auto-rows: 150px auto;
        height: 250px;
        align-items: center;
    }

    #ex-address {
        margin: 0;
    }

</style>