export const stringMixin = {
    data() {
        return {
            countText2: ''
        }
    },
    computed: {
        countString() {
            console.log("ran count computed")
            return this.countText2 + " (" + this.countText2.length + ")";
        }
    }
}