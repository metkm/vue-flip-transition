declare module "vue-flip-transition" {
  interface Flipper {
    install: () => void
  }

  const flipper: Flipper
  export default flipper
}